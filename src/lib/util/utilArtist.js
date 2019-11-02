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

  return formated;
};
