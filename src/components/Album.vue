<template>
  <div id="albumPage" class="container">
    <AlbumInfo></AlbumInfo>
    <Tracks></Tracks>
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
export default {
  components: {
    AlbumInfo,
    Tracks
  }
};
</script>
