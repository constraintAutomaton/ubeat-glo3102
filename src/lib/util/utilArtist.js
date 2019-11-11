import ApiInterface from "./../ApiInterface";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const getArtistInfo = async p_artist => {
  const searchResults = await apiEngine.searchArtiste(p_artist, 1);
  const result = searchResults.results[0];
  let formated = {
    artistName: result.artistName,
    //imgArtist: result.achercher,
    genre: result.primaryGenreName,
    artistLink: result.artistLinkUrl
  };
  const highResImage = await apiEngine.getHighResImage(
    //p_artist,
    //"artiste",
    //p_artist
  );
  formated["imgArtist"] = highResImage != {} ? highResImage : "";

  return [formated, result.artistId];
};
export const getAlbumInfo = async (p_id, nb_album = -1) => {
  const searchResults = await apiEngine.getAlbumById(p_id);
  const results =
    nb_album === -1
      ? searchResults.results.splice(1, searchResults.length - 1)
      : searchResults.results.slice(1, nb_album + 1);
  const formated = results.map(el => {
    return {
      albumTitle: el.collectionName,
      albumImage: el.artworkUrl100,
      albumYear: new Date(el.releaseDate).getFullYear()
    };
  });
  //for (let i = 0; i < formated.length; i++) {
    //let highResImage = await apiEngine.getHighResImage(
      //results[i].collectionName,
      //"album",
     // results[i].artistName
    //);
    //highResImage = highResImage != {} ? highResImage : "";
   // formated[i]["albumImage"] = await highResImage;
  //}
  console.log(formated);
  return formated;
};
