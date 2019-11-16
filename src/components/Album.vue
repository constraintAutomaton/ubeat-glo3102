<template>
  <div id="albumPage" class="container">
    <div v-if="!albumId">
      <AlbumOfArtist :title="'Featured Albums'"/>
    </div>
    <div v-else-if="this.albumInfo != null">
      <AlbumInfo :albumInfo="albumInfo"></AlbumInfo>
      <h2 class="listTitle">{{albumInfo.albumName}}</h2>
      <Tracks :trackList="albumInfo.trackList"></Tracks>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
import AlbumOfArtist from './Artist/AlbumOfArtist';
import { getAlbumById } from "./../lib/util/utilAlbum";
export default {
  data() {
    return {
      albumInfo: null
    };
  },
  computed: {
    albumId() {
      this.loadAlbum();
      return this.$route.params.id;
    }
  },
  mounted() {
      this.loadAlbum();
  },
  methods: {
    async loadAlbum() {
      if (this.$route.params.id) {
        const album = await getAlbumById(this.$route.params.id);
        this.albumInfo = album;
      }
    }
  },
  components: {
    AlbumInfo,
    Tracks,
    AlbumOfArtist
  }
};
</script>
