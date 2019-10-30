/**
 * This class handle the raw request to the Ubeat Api
 * Further usages are in the util class corresponding to the component.
 */

export default class UbeatApiInterface {
  constructor(isSecure = true) {
    this.rootUrl = "https://ubeat.herokuapp.com/";
    this.userTest = {
      name: "User Test",
      email: "valerie.boivin.7@ulaval.ca",
      id: "5db9a4fbd0c7f00004015499",
      password: "Equipe7ulaval"
    };
    if (!isSecure) {
      this.rootUrl += "unsecure/";
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
    p_query = p_query.replace(new RegExp(" ", "g"), "%20");
    const rep = await fetch(
      `${this.rootUrl}search/${p_type}?q=${p_query}&limit=${p_limite}`,
      param
    );
    if (rep.ok) {
      return await rep.json();
    } else {
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
  async _getAlbumOrArtist(p_type, p_id, p_getTracksOrAlbum = "") {
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
      `${this.rootUrl}${p_type}/${p_id}${p_getTracksOrAlbum}`,
      param
    );
    if (rep.ok) {
      return await rep.json();
    } else {
      return {};
    }
  }
  async getAlbumById(p_id) {
    return await this._getAlbumOrArtist("albums", p_id);
  }
  async getAlbumTrackById(p_id) {
    return await this._getAlbumOrArtist("albums", p_id, "tracks");
  }
  async getArtistById(p_id) {
    return await this._getAlbumOrArtist("artists", p_id);
  }
  async getArtistAlbumById(p_id) {
    return await this._getAlbumOrArtist("artists", p_id, "albums");
  }
}
