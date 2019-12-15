import ApiInterface from "./../ApiInterface";

const isSecure = true;
const apiEngine = new ApiInterface(isSecure);

export const getAlbumById = async (albumId, token) => {
  if (isNaN(albumId)) {
    throw "The ID specified is not a number";
  }

  const result = await apiEngine.getAlbumById(albumId, token);
  if(!result.ok)
    return result;

  if (result.resultCount == 1) {
    let album = result.results[0];
    const trackList = await getTracklist(album.collectionId, token)

    if(trackList.ok){
      album.trackList = trackList.results;
      album.ok = true;
    }
    else
      return trackList;

    return album;
  } else {
    throw "Failed to fetch album: " + albumId + ". It does not exist!";
  }
};

export const getTracklist = async (album_id, token = "") => {
  const param = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    }
  };
  
  return fetch(`${apiEngine.rootUrlUbeat}albums/${album_id}/tracks`, param)
    .then(async response => {
      let json = await response.json();
      
      json.ok = response.ok;

      return json;
    })
    .catch(() => {
      console.error("Unable to get album's tracks");
    });
};
