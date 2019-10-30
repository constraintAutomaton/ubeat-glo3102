<template>
  <div id="playlistsPage" class="container">
    <h1>My Playlists</h1>
    <template v-for="(playlist, index) in playlists">
      <single-playlist :playlist="playlist" :indexNumber="index.toString()"></single-playlist>
    </template>
  </div>
</template>

<script>
import { getPlaylists } from "./../lib/util/utilPlaylist";
import SinglePlaylist from "./Playlist/SinglePlaylist";

export default {
  name: "Playlists.vue",

  data() {
    return {
      playlists: []
    };
  },

  components: {
    SinglePlaylist
  },

  mounted() {},

  async created() {
    this.playlists = await getPlaylists();
  }
};
</script>

<style scoped></style>
