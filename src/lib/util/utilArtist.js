import UbeatApiInterface from "./../UbeatApiInterface";



const isSecure = false;
const UbeatEngine = new UbeatApiInterface(isSecure);


export const getArtistInfo = async p_artist => {
  const searchResults = await UbeatEngine.searchArtiste(p_artist, 1);
  const result = searchResults.results[0];
  console.log(result);
  const formated = {
    artistName: result.artistName,
    imgArtist: result.achercher,
    genre: result.primaryGenreName,
    artistLink: result.artistLinkUrl,

  };

  return [formated, result.artistId];
};
export const getAlbumInfo = async (p_id, nb_album = -1) => {
  const searchResults = await UbeatEngine.getAlbumById(p_id);
  const results =
    nb_album === -1
      ? searchResults.results.splice(1,searchResults.length - 1)
      : searchResults.results.slice(1, nb_album+1);
  console.log(searchResults);
  const formated = results.map(el => {
    return {
      albumTitle: el.collectionName,
      albumImage: el.artworkUrl100,
      albumYear: new Date(el.releaseDate).getFullYear()
    };
  });
  return formated;
};
