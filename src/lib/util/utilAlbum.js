import ApiInterface from "./../ApiInterface";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const getAlbumById = async albumId => {
  if (isNaN(albumId)) {
    throw "The ID specified is not a number";
  }

  const result = await apiEngine.getAlbumById(albumId);
  if (result.resultCount == 1) {
    let album = result.results[0];

    album.trackList = await getTracklist(album.collectionId);
    album.highResImage = await apiEngine.getHighResImage(
      album.collectionName,
      "album",
      album.artistName
    );

    return album;
  } else {
    throw "Failed to fetch album: " + albumId + ". It does not exist!";
  }
};

export const getAlbumInfo = async p_album => {
  const searchResults =
    typeof p_album === "string"
      ? await apiEngine.searchAlbum(p_album, 1)
      : await apiEngine.getAlbumById(Number(p_album));
  const result = searchResults.results[0];

  let formated = {
    albumName: result.collectionName,
    artist: result.artistName,
    genre: result.primaryGenreName,
    release: new Date(result.releaseDate).getFullYear(),
    numberOfTrack: result.trackCount,
    linkItune: result.collectionViewUrl,
    trackList: await getTracklist(result.collectionId)
  };
  const highResImage = await apiEngine.getHighResImage(
    p_album,
    "album",
    formated.artist
  );

  formated["image"] = highResImage != "" ? highResImage : result.artworkUrl100;
  return [formated, result.collectionId];

  //return searchResult;
};

export const getTracklist = async album_id => {
  const param = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(`${apiEngine.rootUrlUbeat}albums/${album_id}/tracks`, param)
    .then(response => response.json())
    .then(json => {
      return json.results;
    })
    .catch(() => {
      console.error("Unable to get album's tracks");
    });
};

export const getTrackInfo = async (p_id, nb_track = -1) => {
  const searchResults = await apiEngine.getAlbumTrackById(p_id);
  const results =
    nb_track === -1
      ? searchResults.results
      : searchResults.results.slice(0, nb_track);
  const formated = results.map(el => {
    return {
      trackObj: el,
      trackNumber: el.trackNumber,
      songTitle: el.trackName,
      trackDuration: convertMillisToTrackTime(el.trackTimeMillis),
      songLink: el.previewUrl
    };
  });
  return formated;
};
const convertMillisToTrackTime = p_millis => {
  p_millis /= 1000;
  const minutes = Math.trunc(p_millis / 60);
  let seconds = Math.trunc(p_millis - minutes * 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};
