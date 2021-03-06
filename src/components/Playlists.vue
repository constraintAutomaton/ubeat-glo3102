<template>
  <div id="playlistsPage" class="container">
    <div v-if="!error">
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
        <a class="waves-effect waves-light btn" @click="newPlaylist"
          ><i class="material-icons right">add</i>New playlist</a
        >
      </div>
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import {
  getPlaylistsByUserId,
  addPlaylist,
  deletePlaylist
} from "./../lib/util/utilPlaylist";
import SinglePlaylist from "./Playlist/SinglePlaylist";
import _ from "lodash";

export default {
  name: "Playlists.vue",

  data() {
    return {
      playlists: [],
      error: ""
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

  computed: {},
  methods: {
    async refreshPlaylists() {
      const result = await getPlaylistsByUserId(this.$cookie.get("id"), this.$cookie.get("token"));
      if(result.ok)
      {
        this.playlists = result;
        this.playlists = _.sortBy(this.playlists, ["id"]);
      }
      else {
        this.error = result.message;
      }
    },
    async newPlaylist() {
      const result = await addPlaylist("New Playlist", this.$cookie.get('token'));
      if(result.ok)
      {
        await this.refreshPlaylists();
        this.modifyPlaylistById(result.id);
      }
      else {
        this.error = result.message;
      }
    },
    async deletePlaylistById(playlist) {
      this.$dialog
        .confirm(`Delete this playlist \"${playlist.name}\"?`, {
          customClass: "ubeatDelete"
        })

        .then(async dialog => {
          try {
            const result = await deletePlaylist(playlist.id, this.$cookie.get('token'));            
            if(result.ok)
            {
              this.refreshPlaylists();
            }
            else {
              this.error = result.message;
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function() {});
    },
    modifyPlaylistById(playlistId) {
      this.$refs.singlePlaylist.forEach(singlePlaylist => {
        if (singlePlaylist.playlist.id === playlistId)
          singlePlaylist.modifyTitle();
      });
    }
  }
};
</script>

<style scoped>
.newPlaylist {
  text-align: center;
}
</style>
