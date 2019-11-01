import UbeatApiInterface from "./../UbeatApiInterface";

const isSecure = false;
const UbeatEngine = new UbeatApiInterface(isSecure);

export const getAlbumInfo = async p_album => {
  const searchResults = await UbeatEngine.searchAlbum(p_album, 1);
  const result = searchResults.results[0];
  const formated = {
    ambumName: result.collectionName,
    image: result.artworkUrl100,
    artiste: result.artistName,
    genre: result.primaryGenreName,
    release: new Date(result.releaseDate).getFullYear(),
    numberOfTrack: result.trackCount,
    linkItune: result.collectionViewUrl
  };

  return [formated, result.collectionId];

  //return searchResult;
};
export const getTrackInfo = async p_id => {
  const searchResults = await UbeatEngine.getAlbumTrackById(p_id);
  const results = searchResults.results;
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
