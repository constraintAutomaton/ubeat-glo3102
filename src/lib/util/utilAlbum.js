import ApiInterface from "./../ApiInterface";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const getAlbumInfo = async p_album => {
  const searchResults = await apiEngine.searchAlbum(p_album, 1);
  const result = searchResults.results[0];
  let formated = {
    albumName: result.collectionName,
    artist: result.artistName,
    genre: result.primaryGenreName,
    release: new Date(result.releaseDate).getFullYear(),
    numberOfTrack: result.trackCount,
    linkItune: result.collectionViewUrl
  };
  const highResImage = await apiEngine.getHighResImage(
    p_album,
    "album",
    formated.artist
  );
  formated["image"] = highResImage != undefined ? highResImage : "";
  console.log(formated);
  return [formated, result.collectionId];

  //return searchResult;
};
export const getTrackInfo = async (p_id, nb_track = -1) => {
  const searchResults = await apiEngine.getAlbumTrackById(p_id);
  const results =
    nb_track === -1
      ? searchResults.results
      : searchResults.results.slice(0, nb_track);
  const formated = results.map(el => {
    return {
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
