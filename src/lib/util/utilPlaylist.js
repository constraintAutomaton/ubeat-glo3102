import ApiInterface from "./../ApiInterface";
import { stringify } from "cli-highlight";

const isSecure = true;
const apiEngine = new ApiInterface(isSecure);

export const getPlaylistsByUserId = async (userId, token = "") => {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
  
    return fetch(
      `${apiEngine.rootUrlUbeat}users/${userId}/playlists`,
      param
    )
    .then(async response => {
      let json = await response.json();
      
      json.ok = response.ok;

      return json;
    })
    .catch(() => {
      console.error("unable to get user playlists");
    });
  };

export const modifyPlaylist = async (playlist, token = "") => {
  const param = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(playlist)
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists/${playlist.id}`, param)
    .then(async response => {
      let json = await response.json();
      
      json.ok = response.ok;

      return json;
    })
    .catch(() => {
      console.error("unable to modify this playlist");
    });
};

export const addTrackToPlaylist = async (playlistId, trackObj, token = "") => {
  const param = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(trackObj)
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists/${playlistId}/tracks`, param)
    .then(async response => {
      let json = {};

      if(!response.ok)
        json = await response.json();

      json.ok = response.ok;

      return json;
    })
    .catch(() => {
      console.error("Unable to add this track to the playlist.");
    });
};

export const deleteTrack = async (playlistId, songId, token = "") => {
  const param = {
    method: "DELETE",
    headers: {
      "Authorization": token
    }
  };

  return fetch(
    `${apiEngine.rootUrlUbeat}playlists/${playlistId}/tracks/${songId}`, param)
    .then(async response => {
      let json = {};

      if(!response.ok)
        json = await response.json();

      json.ok = response.ok;

      return json;
    })
    .catch(() => {
    console.error("Unable to delete this track from the playlist.");
  });
};

export const addPlaylist = async (playlistName, token = "") => {
  const param = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      "name" : playlistName
    })
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists`, param)
    .then(async response => {
      let json = await response.json();
      
      json.ok = response.ok;
      
      return json;
    })
    .catch(() => {
      console.error("Unable to add this playlist.");
    });
};

export const deletePlaylist = async (playlistId, token = "") => {
  const param = {
    method: "DELETE",
    headers: {
      "Authorization": token
    }
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists/${playlistId}`, param)
    .then(async response => {
      let json = {};

      if(!response.ok)
        json = await response.json();

      json.ok = response.ok;

      return json;
    })
    .catch(() => {
      console.error("Unable to delete this playlist.");
    });
};
