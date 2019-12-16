/**
 * This class handle the raw request to the Ubeat Api
 * Further usages are in the util class corresponding to the component.
 */
import formurlencoded from "form-urlencoded";
export default class ApiInterface {
  constructor(isSecure = true) {
    this.rootUrlUbeat = "https://ubeateq9.herokuapp.com/";
    if (!isSecure) {
      this.rootUrlUbeat += "unsecure/";
    }
  }
  async login(email, password) {
    const body = formurlencoded({
      email: email,
      password: password
    });
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    };

    const rep = await fetch(`${this.rootUrlUbeat}login`, param);
    if (rep.ok) {
      return await rep.json();
    } else {
      return { data: "erreur de connexion" };
    }
  }
  async signup(name, email, password) {
    const body = formurlencoded({
      email: email,
      name: name,
      password: password
    });
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    };

    const rep = await fetch(`${this.rootUrlUbeat}signup`, param);
    if (rep.ok) {
      return await rep.json();
    } else {
      return { data: rep };
    }
  }
  async getUserById(p_id, token = "") {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    };

    return fetch(`${this.rootUrlUbeat}users/${p_id}`, param)
      .then(async response => {
        let json = await response.json();

        json.ok = response.ok;

        return json;
      })
      .catch(() => {
        console.error("unable to get user");
      });
  }

  async search(p_query, p_type = "", p_limite = 10, token = "") {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    };

    p_query = p_query.replace(new RegExp(" ", "g"), "%20");
    return fetch(
      `${this.rootUrlUbeat}search/${p_type}?q=${p_query}&limit=${p_limite}`,
      param
    )
      .then(async response => {
        let json = await response.json();

        json.ok = response.ok;

        return json;
      })
      .catch(() => {
        console.error("unable to get user");
      });
  }
  async searchAlbum(p_query, p_limite = 10, token = "") {
    return await this.search(p_query, "albums", p_limite, token);
  }
  async searchArtiste(p_query, p_limite = 10, token = "") {
    return await this.search(p_query, "artists", p_limite, token);
  }
  async searchTracks(p_query, p_limite = 10, token = "") {
    return await this.search(p_query, "tracks", p_limite, token);
  }
  async searchUsers(p_query, p_limite = 10, token = "") {
    return await this.search(p_query, "users", p_limite, token);
  }
  async _getAlbumOrArtistById(
    p_type,
    p_id,
    p_getTracksOrAlbum = "",
    token = ""
  ) {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    };
    p_getTracksOrAlbum =
      p_getTracksOrAlbum != "" ? p_getTracksOrAlbum + "/" : "";

    return fetch(
      `${this.rootUrlUbeat}${p_type}/${p_id}/${p_getTracksOrAlbum}`,
      param
    )
      .then(async response => {
        let json = await response.json();

        json.ok = response.ok;

        return json;
      })
      .catch(() => {
        console.error("unable to get user");
      });
  }
  async getAlbumById(p_id, token) {
    return await this._getAlbumOrArtistById("albums", p_id, "", token);
  }
  async getAlbumTrackById(p_id, token) {
    return await this._getAlbumOrArtistById("albums", p_id, "tracks", token);
  }
  async getArtistById(p_id, token) {
    return await this._getAlbumOrArtistById("artists", p_id, "", token);
  }
  async getArtistAlbumById(p_id, token) {
    return await this._getAlbumOrArtistById("artists", p_id, "albums", token);
  }
  async getHighResImage(p_query, p_type, token) {
    let e_query = formurlencoded(p_query);

    const param = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        query: e_query
      })
    };

    return fetch(`${this.rootUrlUbeat}search/extra/${p_type}`, param)
      .then(async response => {
        let json = await response.json();

        json.ok = response.ok;

        return json;
      })
      .catch(() => {
        console.error("unable to get High Res Image");
      });
  }
}
