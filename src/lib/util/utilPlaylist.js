import UbeatApiInterface from "./../UbeatApiInterface";
import {stringify} from "cli-highlight";

const isSecure = false;
const UbeatEngine = new UbeatApiInterface(isSecure);

export const getPlaylists = async () => {
  const param = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(
    `${UbeatEngine.rootUrl}users/${UbeatEngine.userTest.id}/playlists`,
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

export const modifyPlaylist = async (playlist) => {
  const param = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(playlist)
  };

  return fetch(
    `${UbeatEngine.rootUrl}playlists/${playlist.id}`,
    param
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(() => {
      console.error("unable to modify this playlist");
    });
};
