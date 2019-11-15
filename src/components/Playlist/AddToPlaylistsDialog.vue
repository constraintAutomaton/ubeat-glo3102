<template>
  <div class="dialog" :class="{ hidden: !isOpened }">
    <div class="dialogContent">
      <p>Save to...</p>
      <div v-for="playlist in playlists" :key="playlist.id">
        <p>
          <label>
            <input ref="playlistCheckbox" type="checkbox" :value="playlist.id" />
            <span>{{playlist.name}}</span>
          </label>
        </p>
      </div>
      <div class="dialogFooter">
        <a class="dialogButton waves-effect waves-light btn-small" @click="close">Cancel</a>
        <a class="dialogButton waves-effect waves-light btn-small" @click="saveToPlaylist">Save</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getPlaylists, addTrackToPlaylist } from "../../lib/util/utilPlaylist";

export default {
  props: {
    tracks: {
      type: Array
    }
  },
  data() {
    return {
      isOpened : false,
      playlists : {}
    }
  },
  methods: {
    open() {
      this.isOpened = true;
    },
    close() {
      this.isOpened = false;
      this.$refs.playlistCheckbox.forEach(async chkBox => {
        chkBox.checked = false;
      });
    },
    showSuccessToast() {
      this.$toasted.show('Tracks added successfuly', {
        position: 'bottom-left',
        duration: 5000,
        action : {
            text : 'Close',
            onClick : (e, toastObject) => {
                toastObject.goAway(0);
            }
        }
      });
    },
    showErrorToast() {
      this.$toasted.show('An error occured', {
        position: 'bottom-left',
        duration: 5000,
        action : {
            text : 'Close',
            onClick : (e, toastObject) => {
                toastObject.goAway(0);
            }
        },
        type: 'error'
      });
    },
    async loadPlaylists() {
      this.playlists = await getPlaylists();
    },
    async saveToPlaylist() {
      this.tracks.forEach(track => {
        this.$refs.playlistCheckbox.forEach(async chkBox => {
          if(chkBox.checked) {
            const response = await addTrackToPlaylist(chkBox.value, track);
            if(response.status != 200)
              this.showErrorToast();
          }
        });
      });
      this.showSuccessToast();
      this.close();
    }
  },
  mounted() {
    this.loadPlaylists();
  }
}
</script>

<style scoped>

.hidden {
  display: none;
}

.dialog {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.dialogContent {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: max-content;
}

.dialogButton {
  background-color: var(--primaryAccentColor);
  color: white;
}

.dialogButton:hover {
  background-color: var(--darkerAccentColor);
  color: white;
}

.dialogFooter {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

</style>