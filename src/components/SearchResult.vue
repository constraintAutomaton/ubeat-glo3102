<template>
  <div class="mainContainer container">
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
    <users-list v-if="" :user-list="usersResults.results"></users-list>
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

		// debugger;
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
