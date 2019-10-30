<template>
  <div id="playlistsPage" class="container">
    <template v-for="playlist in playlists">
      <h2>{{ playlist.name }}</h2>
    </template>
  </div>
</template>

<script>
import { getPlaylists } from "./../lib/util/utilPlaylist";

export default {
  name: "Playlists.vue",

  data() {
    return {
      playlists: []
    };
  },

  mounted() {
    console.log("TEST", this.playlists);
  },

  async created() {
      console.log("before", this.playlists);
      this.playlists = await getPlaylists();
      console.log(this.playlists);
  }
};
</script>

<style scoped></style>
