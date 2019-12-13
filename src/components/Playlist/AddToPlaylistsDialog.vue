<template>
  <div class="dialog" :class="{ hidden: !isOpened }" @click="userClick">
    <div class="dialogContent">
      <p>Save to...</p>
      <div v-for="playlist in playlists" :key="playlist.id">
        <p>
          <label>
            <input
              ref="playlistCheckbox"
              type="checkbox"
              :value="playlist.id"
              @click="saveToPlaylist"
            />
            <span>{{ playlist.name }}</span>
          </label>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPlaylists,
  addTrackToPlaylist,
  deleteTrack
} from "../../lib/util/utilPlaylist";
import _ from "lodash";

export default {
  props: {
    tracks: {
      type: Array
    }
  },
  data() {
    return {
      isOpened: false,
      playlists: {}
    };
  },
  watch: {
    $route: "close"
  },
  methods: {
    open() {
      this.isOpened = true;
      this.loadPlaylists();
    },
    close() {
      if (this.isOpened) {
        this.isOpened = false;
        this.$refs.playlistCheckbox.forEach(async chkBox => {
          chkBox.checked = false;
        });
      }
    },
    showSuccessAdd(chkBox) {
      this.$toasted.show("Track added successfully", {
        position: "bottom-left",
        duration: 4000,
        action: {
          text: "Undo",
          onClick: (e, toastObject) => {
            this.deleteTracks(chkBox.value);
            chkBox.checked = false;
            this.$songEvent.$emit("playlistUpdated");
            toastObject.goAway(0);
          }
        }
      });
    },
    showSuccessDelete(chkBox) {
      this.$toasted.show("Track removed successfully", {
        position: "bottom-left",
        duration: 4000,
        action: {
          text: "Undo",
          onClick: (e, toastObject) => {
            this.addTracks(chkBox.value);
            chkBox.checked = true;
            this.$songEvent.$emit("playlistUpdated");
            toastObject.goAway(0);
          }
        }
      });
    },
    showErrorToast() {
      this.$toasted.show("An error occured", {
        position: "bottom-left",
        duration: 5000,
        action: {
          text: "Close",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        type: "error"
      });
    },
    async loadPlaylists() {
      this.playlists = await getPlaylists();
      this.playlists = _.sortBy(this.playlists, ["id"]);
    },
    async saveToPlaylist(event) {
      if (this.tracks != null) {
        const chkBox = event.target;

        if (chkBox.checked) {
          await this.addTracks(chkBox.value);
          this.showSuccessAdd(chkBox);
          this.$songEvent.$emit("playlistUpdated");
        } else {
          this.deleteTracks(chkBox.value);
          this.showSuccessDelete(chkBox);
          this.$songEvent.$emit("playlistUpdated");
        }
      }
    },
    async addTracks(playlistId) {
      this.tracks.forEach(async track => {
        const response = await addTrackToPlaylist(playlistId, track);
        if (response.status != 200) {
          this.showErrorToast();
        }
      });
    },
    async deleteTracks(playlistId) {
      this.tracks.forEach(async track => {
        const response = await deleteTrack(playlistId, track.trackId);
        if (response.status != 200) {
          this.showErrorToast();
        }
      });
    },
    userClick(event) {
      if (event.target.classList.contains("dialog")) {
        this.close();
      }
    }
  },
  mounted() {
    this.loadPlaylists();
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}

.dialog {
  position: fixed;
  z-index: 200;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  cursor: auto;
}

.dialogContent {
  background-color: white;
  color: black;
  margin: 15% auto;
  padding: 20px;
  width: max-content;
}
</style>
