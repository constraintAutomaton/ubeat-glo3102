<template>
  <div id="playlistsPage" class="container">
    <h1>My Playlists</h1>
    <template v-for="playlist in playlists">
      <single-playlist
        :playlist="playlist"
        :key="playlist.id"
        ref="singlePlaylist"
        @deletePlaylist="deletePlaylistById"
      ></single-playlist>
    </template>
    <div id="newPlaylist">
      <a class="btn btn-floating btn-large waves-effect waves-light" v-on:click="newPlaylist"><i class="material-icons">add</i></a>
    </div>
  </div>
</template>

<script>
import { getPlaylists, addPlaylist, deletePlaylist } from "./../lib/util/utilPlaylist";
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

  mounted() {
    this.$songEvent.$on("playlistUpdated", this.refreshPlaylists);
  },

  async created() {
    this.refreshPlaylists();
  },
  methods: {
    async refreshPlaylists() {
      this.playlists = await getPlaylists();
    },
    async newPlaylist() {
      const response = await addPlaylist("New Playlist");
      await this.refreshPlaylists();
      this.modifyPlaylistById(response.id);
    },
    async deletePlaylistById(playlist) {
      this.$dialog
        .confirm(`Delete this playlist \"${playlist.name}\"?`, {customClass:'ubeatDelete'})

        .then(async (dialog) => {
          try {
            const response = await deletePlaylist(playlist.id);
            this.refreshPlaylists();
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function() {
        });
    },
    modifyPlaylistById(playlistId) {
      this.$refs.singlePlaylist.forEach(singlePlaylist => {
        if(singlePlaylist.playlist.id == playlistId)
          singlePlaylist.modifyTitle();
      });
    }
  }
};
</script>

<style scoped>

#newPlaylist{
  margin-top: 10px;
  text-align: right;
}

#newPlaylist .btn{
  position: inherit;
  background-color: var(--primaryAccentColor);
}
</style>
