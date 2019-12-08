import ApiInterface from "./../ApiInterface";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const getArtistById = async artistId => {
  if (isNaN(artistId)) {
    throw "The ID specified is not a number";
  }

  const result = await apiEngine.getArtistById(artistId);
  if (result.resultCount == 1) {
    let artist = result.results[0];

    artist.highResImage = await apiEngine.getHighResImage(
      artist.artistName,
      "artiste",
      artist.artistName
    );

    return artist;
  } else {
    throw "Failed to fetch artist: " + artistId + ". It does not exist!";
  }
};
export const getAlbumOfArtist = async artistId => {
  let albums;
  let resultAlbums = await apiEngine.getArtistAlbumById(artistId);
  if (resultAlbums.resultCount > 0) {
    const nbAlbum =
      resultAlbums.results.length > 5 ? 5 : resultAlbums.results.length;
    albums = resultAlbums.results.slice(0, nbAlbum);
  }
  return albums;
};

export const getArtistInfo = async p_artist => {
  const searchResults = await apiEngine.searchArtiste(p_artist, 1);
  const result = searchResults.results[0];
  let formated = {
    artistName: result.artistName,
    genre: result.primaryGenreName,
    artistLink: result.artistLinkUrl
  };
  const highResImage = await apiEngine.getHighResImage(
    p_artist,
    "artiste",
    p_artist
  );
  formated["imgArtist"] = highResImage != "" ? highResImage : "";

  return [formated, result.artistId];
};
export const getAlbumInfo = async (p_id, nb_album = -1) => {
  const searchResults = await apiEngine.getAlbumById(p_id);
  const results =
    nb_album === -1
      ? searchResults.results.splice(1, searchResults.length - 1)
      : searchResults.results.slice(1, nb_album + 1);
  const formated = results.map(el => {
    let index = el.collectionName.search(/(\(|\[)/) - 1; // look for ( or [
    index = index < 0 ? el.collectionName.length : index;

    return {
      albumTitle: el.collectionName.substring(0, index),
      albumImage: el.artworkUrl100,
      albumYear: new Date(el.releaseDate).getFullYear(),
      albumId: el.collectionId
    };
  });

  return formated;
};
