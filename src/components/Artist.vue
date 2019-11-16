<template>
  <div id="artistPage" class="container">
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="artistInfo">
      <ArtistInfo
        :artistName="artistInfo.artistName"
        :imgArtist="artistInfo.highResImage"
        :genre="artistInfo.primaryGenreName"
        :artistLink="artistInfo.artistLinkUrl"
      ></ArtistInfo>
      <Tracks title="Popular tracks"></Tracks>
      <AlbumOfArtist
        title="Albums"
        :albumList="artistInfo.albums"
      ></AlbumOfArtist>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>
<script>
import ArtistInfo from "./Artist/ArtistInfo.vue";
import Tracks from "./Album/Tracks";
import AlbumOfArtist from "./Artist/AlbumOfArtist.vue";
import { getArtistById } from "../lib/util/utilArtist";

export default {
  data() {
    return {
      artistInfo: null,
      loading: true,
      error: null
    };
  },
  watch: {
    $route: "loadArtist"
  },
  mounted() {
    this.loadArtist();
  },
  methods: {
    async loadArtist() {
      this.error = this.artistInfo = null;
      this.loading = true;

      try {
        const artist = await getArtistById(this.$route.params.id);
        this.artistInfo = artist;
        this.loading = false;
        this.error = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    }
  },
  components: {
    ArtistInfo,
    AlbumOfArtist,
    Tracks
  }
};
</script>
<style src="./../css/Artist.css"></style>
