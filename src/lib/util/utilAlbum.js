import UbeatApiInterface from "./../UbeatApiInterface";

const isSecure = false;
const UbeatEngine = new UbeatApiInterface(isSecure);

export const getAlbumInfo = async p_album => {
  const searchResults = await UbeatEngine.searchAlbum(p_album, 1);
  const result = searchResults.results[0];
  console.log(result);
  const formated = {
    ambumName: result.collectionName,
    image: result.artworkUrl100,
    artiste: result.artistName,
    genre: result.primaryGenreName,
    release: new Date(result.releaseDate).getFullYear(),
    numberOfTrack: result.trackCount,
    linkItune: result.collectionViewUrl
  };

  return formated;

  //return searchResult;
};
