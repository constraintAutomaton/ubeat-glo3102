<template>
  <div id="albumPage" class="container">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="albumInfo">
      <AlbumInfo :albumInfo="albumInfo"></AlbumInfo>
      <h2 class="listTitle">{{ albumInfo.albumName }}</h2>
      <Tracks :trackList="albumInfo.trackList"></Tracks>
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
import { getAlbumById } from "./../lib/util/utilAlbum";
export default {
  data() {
    return {
      albumInfo: null,
      error: null,
      loading: true
    };
  },
  watch: {
    $route: "loadAlbum"
  },
  mounted() {
    this.loadAlbum();
  },
  methods: {
    async loadAlbum() {
      this.error = this.albumInfo = null;
      this.loading = true;

      const album = await getAlbumById(this.$route.params.id);
      this.albumInfo = album;
      this.loading = false;
      this.error = false;
    }
  },
  components: {
    AlbumInfo,
    Tracks
  }
};
</script>
