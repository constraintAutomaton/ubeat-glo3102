<template>
  <div class="mainContainer container">
    <div v-if="loading">Loading...</div>
    <h2 class="listTitle">
      <a>Found Tracks</a>
    </h2>
    <Tracks :trackList="trackResults.results"></Tracks>
    <ArtistList
      :artistList="artistsResults.results"
      :title="'Found Artists'"
      :link="'/artistSearch/' + this.$route.params.query"
    />
    <AlbumOfArtist :albumList="albumResults.results" :title="'Found Albums'" />
    <users-list :userList="usersResults"></users-list>
  </div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import Tracks from "./Album/Tracks.vue";
import AlbumOfArtist from "./Artist/AlbumOfArtist";
import ArtistList from "./Artist/ArtistList";
import UsersList from "./Users/UsersList";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
  data() {
    return {
      loading: true,
      trackResults: [],
      albumResults: [],
      artistsResults: [],
      usersResults: []
    };
  },
  created() {
    this.search(this.$route.params.query);
  },
  methods: {
    async search(query) {
      this.trackResults = await apiEngine.searchTracks(query, 6);
      this.albumResults = await apiEngine.searchAlbum(query, 6);
      this.artistsResults = await apiEngine.searchArtiste(query, 6);
      this.artistsResults.results.forEach(artist => {
        artist.genre = artist.primaryGenreName;
        artist.artistImage = artist.highResImage;
      });
      this.usersResults = await apiEngine.searchUsers(query, 6);
      this.loading = false;
      const albumName = this.albumResults.results.map(el => {
        return el.collectionName;
      });
      const artistName = this.artistsResults.results.map(el => {
        return el.artistName;
      });
      const extraDataAlbum = await apiEngine.getHighResImage(
        albumName,
        "album"
      );
      const extraDataArtist = await apiEngine.getHighResImage(
        artistName,
        "artist"
      );
      for (let i in artistName) {
        if (extraDataAlbum.results[i].highResImage != "") {
          this.albumResults.results[i].artworkUrl100 = extraDataAlbum.results[i].highResImage;
        }
      }
     
      for (let i in albumName) {
        if (extraDataArtist.results[i].highResImage != "") {
          this.artistsResults.results[i].artistImage = extraDataArtist.results[i].highResImage;
        }
      }
      console.log(this.artistsResults);
    }
  },
  components: {
    Tracks,
    ArtistList,
    AlbumOfArtist,
    UsersList
  }
};
</script>
