/**
 * This class handle the raw request to the Ubeat Api
 * Further usages are in the util class corresponding to the component.
 */

export default class ApiInterface {
  constructor(isSecure = true) {
    this.rootUrlUbeat = "https://ubeat.herokuapp.com/";
    this.rootUrlDiscogs = "https://api.discogs.com/";
    this.discogsTokken = "kGpyEfufJNVCCSjcBrtQFmJMxcrlSXrtfxgBfzHI";
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
      `${this.rootUrlUbeat}search/${p_type}?q=${p_query}&limit=${p_limite}`,
      param
    );
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
  async getHighResImage(p_query, p_type, p_artist) {
    if (p_type === "album") {
      let url = `${this.rootUrlDiscogs}database/search?token=${this.discogsTokken}&q=${p_query}`;
      url += `&format=album&artist=${p_artist}`;

      const rep = await fetch(url);
      if (rep.ok) {
        const data = await rep.json();

        return data.results[0] != undefined ? data.results[0].cover_image : "";
      } else {
        console.error(rep);
        return "";
      }
    } else {
      let url = `${this.rootUrlDiscogs}database/search?token=${this.discogsTokken}&q=${p_query}`;
      url += "&type=artist";
      const rep_search = await fetch(url);

      if (rep_search.ok) {
        const data = await rep_search.json();

        const id = data.results[0].id != undefined ? data.results[0].id : "";
        url = `${this.rootUrlDiscogs}artists/${id}?token=${this.discogsTokken}`;

        const rep = await fetch(url);
        if (rep.ok) {
          const data = await rep.json();
          return data.images === undefined ? "" : data.images[0].uri;
        } else {
          console.error(rep);
          return "";
        }
      } else {
        console.error(rep_search);
        return "";
      }
    }
  }
}
