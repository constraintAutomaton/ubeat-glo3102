<template>
  <div id="playlistsPage" class="container">
    <h2 class="listTitle">My Playlists</h2>
    <template v-for="playlist in playlists">
      <single-playlist
        :playlist="playlist"
        :key="playlist.id"
        ref="singlePlaylist"
        @deletePlaylist="deletePlaylistById"
      ></single-playlist>
    </template>
    <div class="newPlaylist">
      <a class="waves-effect waves-light btn" @click="newPlaylist"><i class="material-icons right">add</i>New playlist</a>
    </div>
  </div>
</template>

<script>
import { getPlaylists, addPlaylist, deletePlaylist } from "./../lib/util/utilPlaylist";
import SinglePlaylist from "./Playlist/SinglePlaylist";
import {sortBy} from "lodash";

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
	  _.sortBy(this.playlists, [iteratees=[_.id]]);
  },

  async created() {
    this.refreshPlaylists();
  },

    computed: {
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

.newPlaylist{
  text-align: center;
}
</style>
