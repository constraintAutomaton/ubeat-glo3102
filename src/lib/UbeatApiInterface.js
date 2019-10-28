export default class UbeatApiInterface {
  constructor(isSecure = true) {
    this.rootUrl = "https://ubeat.herokuapp.com/";
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
    let rep = await fetch(
      `${this.rootUrl}search/${p_type}?q=${p_query}&limit=${p_limite}`,
      param
    );
    if (rep.ok) {
      return await rep.json();
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
}
