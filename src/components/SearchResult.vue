<template>
  <div class="mainContainer container">
    <div v-if="loading">Loading...</div>
    <div v-if="loadingHighResImages">Loading High resolution images...</div>

    <template
      v-if="
        trackResults.length === 0 &&
        artistsResults.length === 0 &&
          albumResults.length == 0 &&
          usersResults.length == 0&&
          !loading
      "
    >
      <p>No results found for this search.</p>
    </template>
    <template v-else>
      <Tracks
        :trackList="trackResults.results"
        :title="'Found Tracks'"
        :link="'/trackSearch/' + this.$route.params.query"
      />
      <ArtistList
        :artistList="artistsResults.results"
        :title="'Found Artists'"
        :link="'/artistSearch/' + this.$route.params.query"
      />
      <AlbumOfArtist
        :albumList="albumResults.results"
        :title="'Found Albums'"
        :link="'/albumSearch/' + this.$route.params.query"
      />
      <users-list
        :userList="usersResults"
        :title="'Found Users'"
        :link="'/userSearch/' + this.$route.params.query"
      />
    </template>
  </div>
</template>

<script>
import { getUserById } from "../lib/util/utilUser";
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
      loadingHighResImages: false,
      trackResults: [],
      albumResults: [],
      artistsResults: [],
      usersResults: [],
      currentUser: undefined
    };
  },
  created() {
    const promise = this.loadUser();
    promise.then
    {
      this.search(this.$route.params.query);
    }
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
      
      this.usersResults.forEach(user => {
        user.currentFollowing = false;
        this.currentUser.following.forEach(follow => {
          if(follow.id == user.id)
            user.currentFollowing = true;
        });
      });
      this.loading = false;
      const albumName = this.albumResults.results.map(el => {
        return el.collectionName;
      });
      const artistName = this.artistsResults.results.map(el => {
        return el.artistName;
      });
      this.loadingHighResImages = true;
      const extraDataAlbum = await apiEngine.getHighResImage(
        albumName,
        "album"
      );
      const extraDataArtist = await apiEngine.getHighResImage(
        artistName,
        "artist"
      );
      for (let i in artistName) {
        if (extraDataArtist.results[i].highResImage != "") {
          this.artistsResults.results[i].artistImage = extraDataArtist.results[i].highResImage;
        }
      }

      for (let i in albumName) {
        if (extraDataAlbum.results[i].highResImage != "") {
          this.albumResults.results[i].artworkUrl100 = extraDataAlbum.results[i].highResImage;
        }
      }
      this.loadingHighResImages = false;
      console.log(this.artistsResults);
    },
    async loadUser()
    {
      try {
        this.currentUser = await getUserById(this.$cookie.get("id"), this.$cookie.get("token"));
      } catch (ex) {}
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
