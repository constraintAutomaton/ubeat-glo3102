<template>
  <div class="mainContainer container">
    <div v-if="loading">
      Loading...
    </div>
    <h2 class="listTitle"><a>Found Tracks</a></h2>
    <Tracks :trackList="trackResults.results"></Tracks>
    <ArtistList
      :artistList="artistsResults.results"
      :title="'Found Artists'"
    />
    <AlbumOfArtist
      :albumList="albumResults.results"
      :title="'Found Albums'"
    />
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
