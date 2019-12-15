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
        "Authorization": token
      }
    };


    return fetch(
      `${this.rootUrlUbeat}users/${p_id}`,
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

  async search(p_query, p_type = "", p_limite = 10, token = "") {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    
    p_query = p_query.replace(new RegExp(" ", "g"), "%20");
    return fetch(`${this.rootUrlUbeat}search/${p_type}?q=${p_query}&limit=${p_limite}`,
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
  async searchAlbum(p_query, p_limite = 10) {
    return await this.search(p_query, "albums", p_limite);
  }
  async searchArtiste(p_query, p_limite = 10) {
    return await this.search(p_query, "artists", p_limite);
  }
  async searchTracks(p_query, p_limite = 10) {
    return await this.search(p_query, "tracks", p_limite);
  }
  async searchUsers(p_query, p_limite = 10) {
    return await this.search(p_query, "users", p_limite);
  }
  async _getAlbumOrArtistById(p_type, p_id, p_getTracksOrAlbum = "", token = "") {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    p_getTracksOrAlbum =
      p_getTracksOrAlbum != "" ? p_getTracksOrAlbum + "/" : "";

    return fetch(`${this.rootUrlUbeat}${p_type}/${p_id}/${p_getTracksOrAlbum}`,
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
  async getAlbumById(p_id) {
    return await this._getAlbumOrArtistById("albums", p_id);
  }
  async getAlbumTrackById(p_id) {
    return await this._getAlbumOrArtistById("albums", p_id, "tracks");
  }
  async getArtistById(p_id) {
    return await this._getAlbumOrArtistById("artists", p_id);
  }
  async getArtistAlbumById(p_id) {
    return await this._getAlbumOrArtistById("artists", p_id, "albums");
  }
  async getHighResImage(p_query, p_type) {
    const param = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: p_query
      })
    };
    const rep = await fetch(
      `${this.rootUrlUbeat}search/extra/${p_type}`,
      param
    );

    if (rep.ok) {
      return await rep.json();
    } else {
      console.error(rep);
      return { results: [] };
    }
  }
}
