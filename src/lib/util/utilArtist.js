import ApiInterface from "./../ApiInterface";

const isSecure = true;
const apiEngine = new ApiInterface(isSecure);

export const getArtistById = async (artistId, token = "") => {
  if (isNaN(artistId)) {
    throw "The ID specified is not a number";
  }

  const result = await apiEngine.getArtistById(artistId, token);
  if(!result.ok)
    return result;
  
  if (result.resultCount == 1) {
    let artist = result.results[0];
    artist.ok = true;
    return artist;
  } else {
    throw "Failed to fetch artist: " + artistId + ". It does not exist!";
  }
};

export const getAlbumOfArtist = async (artistId, token = "") => {
  let albums;
  let resultAlbums = await apiEngine.getArtistAlbumById(artistId, token);
  if(!resultAlbums.ok)
    return resultAlbums;
    
  if (resultAlbums.resultCount > 0) {
    const nbAlbum =
      resultAlbums.results.length > 5 ? 5 : resultAlbums.results.length;
    albums = resultAlbums.results.slice(0, nbAlbum);
  }
  albums.ok = true;
  return albums;
};

export const batchHighResAlbumImage = async (p_query, token = "") => {
  if (p_query.lenght != 0) {
    let result = await apiEngine.getHighResImage(p_query, "album", token);
    return result;
  }
  return { ok: false, message: "Query is empty" };
};
