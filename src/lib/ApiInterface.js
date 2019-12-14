/**
 * This class handle the raw request to the Ubeat Api
 * Further usages are in the util class corresponding to the component.
 */
import formurlencoded from "form-urlencoded";
export default class ApiInterface {
  constructor(isSecure = true) {
    this.rootUrlUbeat = "https://ubeateq9.herokuapp.com/";
    this.userTest = {
      name: "User Test",
      email: "valerie.boivin.7@ulaval.ca",
      id: "5db9a4fbd0c7f00004015499",
      password: "Equipe7ulaval"
    };
    if (!isSecure) {
      this.rootUrlUbeat += "unsecure/";
    }
  }
  async login(email, password) {
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
    const rootUrl = this.rootUrlUbeat.substring(
      0,
      this.rootUrlUbeat.indexOf("unsecure")
    );
    const rep = await fetch(`${rootUrl}login`, param);
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
    const rootUrl = this.rootUrlUbeat.substring(
      0,
      this.rootUrlUbeat.indexOf("unsecure")
    );
    const rep = await fetch(`${rootUrl}signup`, param);
    if (rep.ok) {
      return await rep.json();
    } else {
      return { data: rep };
    }
  }
  async getUserById(p_id) {
    return await this.users(p_id);
  }
  async users(p_id) {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    const rep = await fetch(`${this.rootUrlUbeat}users/${p_id}`, param);
    if (rep.ok) {
      return rep.json();
    } else {
      console.error(rep);
      return {};
    }
  }
  async search(p_query, p_type = "", p_limite = 10) {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    let rep;
    p_query = p_query.replace(new RegExp(" ", "g"), "%20");
    if (p_type === "users") {
      console.log("inside users query");
      console.log(p_query);
      rep = await fetch(
        `${this.rootUrlUbeat}search/${p_type}?q=${p_query}`,
        param
      );
    } else {
      rep = await fetch(
        `${this.rootUrlUbeat}search/${p_type}?q=${p_query}&limit=${p_limite}`,
        param
      );
    }
    if (rep.ok) {
      return rep.json();
    } else {
      console.error(rep);
      return {};
    }
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
  async _getAlbumOrArtistById(p_type, p_id, p_getTracksOrAlbum = "") {
    const param = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    p_getTracksOrAlbum =
      p_getTracksOrAlbum != "" ? p_getTracksOrAlbum + "/" : "";
    const rep = await fetch(
      `${this.rootUrlUbeat}${p_type}/${p_id}/${p_getTracksOrAlbum}`,
      param
    );

    if (rep.ok) {
      return await rep.json();
    } else {
      console.error(rep);
      return {};
    }
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
        "Content-Type": "application/json",
        body: JSON.stringify({
          query: p_query
        })
      }
    };
    const rep = await fetch(
      `${this.rootUrlUbeat}search/extra/${p_type}`,
      param
    );

    if (rep.ok) {
      return await rep.json();
    } else {
      console.error(rep);
      return {};
    }
  }
}
