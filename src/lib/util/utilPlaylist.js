import ApiInterface from "./../ApiInterface";
import { stringify } from "cli-highlight";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const getPlaylists = async () => {
  const param = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(
    `${apiEngine.rootUrlUbeat}users/${apiEngine.userTest.id}/playlists`,
    param
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(() => {
      console.error("unable to get user playlists");
    });
};

export const getPlaylistsByUserId = async userId => {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
  
    return fetch(
      `${apiEngine.rootUrlUbeat}users/${userId}/playlists`,
      param
    )
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(() => {
        console.error("Unable to get user playlists");
      });
  };

export const modifyPlaylist = async playlist => {
  const param = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(playlist)
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists/${playlist.id}`, param)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(() => {
      console.error("unable to modify this playlist");
    });
};

export const addTrackToPlaylist = async (playlistId, trackObj) => {
  const param = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(trackObj)
  };

  return fetch(
    `${apiEngine.rootUrlUbeat}playlists/${playlistId}/tracks`, param
  ).catch(() => {
    console.error("Unable to add this track to the playlist.");
  });
};

export const deleteTrack = async (playlistId, songId) => {
  return fetch(
    `${apiEngine.rootUrlUbeat}playlists/${playlistId}/tracks/${songId}`,
    {
      method: "DELETE"
    }
  ).catch(() => {
    console.error("Unable to delete this track from the playlist.");
  });
};

export const addPlaylist = async (userEmail, playlistName) => {
  const param = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name" : playlistName,
      "owner" : userEmail
    })
  };

  return fetch(`${apiEngine.rootUrlUbeat}playlists`, param)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(() => {
      console.error("Unable to add this playlist.");
    });
};

export const deletePlaylist = async (playlistId) => {
  return fetch(
    `${apiEngine.rootUrlUbeat}playlists/${playlistId}`,
    {
      method: "DELETE"
    }
  ).catch(() => {
    console.error("Unable to delete this playlist.");
  });
};
