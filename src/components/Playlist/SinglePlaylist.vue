<template>
  <div class="collapsed">
    <div class="playlistNameWrapper">
      <font-awesome-icon
        class="iconAngleRight collapseHandleIcon"
        :icon="['fas', 'angle-right']"
        @click="expandPlaylist"
      />
      <font-awesome-icon
        class="iconAngleDown collapseHandleIcon"
        :icon="['fas', 'angle-down']"
        @click="collapsePlaylist"
      />
      <textarea
        :id="`playlistName${indexNumber}`"
        class="playlistNameInput"
        placeholder="Enter a playlist title"
        rows="1"
        disabled
        v-on:keydown="saveNewTitle"
        v-on:focusout="saveNewTitle"
        v-on:keyup="addAutoResize"
        v-model="playlist.name"
      >
      </textarea>
      <font-awesome-icon
        class="icons"
        :icon="['fa', 'pencil-alt']"
        @click="modifyTitle"
      />
      <font-awesome-icon
        class="icons"
        :icon="['fa', 'trash-alt']"
        @click="deletePlaylistById"
      />
    </div>
    <ul class="playlistTracks">
      <template v-for="track in playlist.tracks">
        <single-track :track="track" @deleteSong="deleteSong"> </single-track>
      </template>
    </ul>
  </div>
</template>

<script>
import SingleTrack from "./SingleTrack";
import { modifyPlaylist, deleteTrack } from "../../lib/util/utilPlaylist";


export default {
  name: "SinglePlaylist",
  props: {
    playlist: {
      type: Object
    },
    indexNumber: {
      type: String
    }
  },
  components: {
    SingleTrack
  },
  methods: {
    /**
     * Enables the playlist Title textarea to edit it
     */

    modifyTitle() {
      let inputField = document.getElementById(
        `playlistName${this.indexNumber}`
      );
      inputField.removeAttribute("disabled");
      inputField.focus();
    },

    /**
     * Calls the PUT method to update Playlist name on Enter Key pressed
     * or clicks out of element
     */

    saveNewTitle(event) {
      let inputField = document.getElementById(
        `playlistName${this.indexNumber}`
      );

      if (event.type === "focusout") {
        this.callPutAPI(inputField.value);
        event.target.setAttribute("disabled", "");
      }
      let keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode === 13) {
        event.preventDefault();
        this.callPutAPI(inputField.value);
        inputField.setAttribute("disabled", "");
      }
    },

    addAutoResize(event) {
      if (typeof event !== "undefined" && event.type !== "resize") {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      } else {
        document.querySelectorAll("textarea").forEach(function(element) {
          element.style.boxSizing = "border-box";
          element.style.height = "inherit";
          let offset = element.offsetHeight - element.clientHeight;
          element.style.height = element.scrollHeight + offset + "px";
        });
      }
    },

    expandPlaylist(event) {
      let playlistElem = document.getElementById(
        `playlistName${this.indexNumber}`
      ).parentElement.parentElement;

      if (playlistElem.classList.contains("collapsed")) {
        playlistElem.classList.remove("collapsed");
      }

      playlistElem.classList.add("expanded");
    },

    collapsePlaylist(event) {
      let playlistElem = document.getElementById(
        `playlistName${this.indexNumber}`
      ).parentElement.parentElement;

      if (playlistElem.classList.contains("expanded")) {
        playlistElem.classList.remove("expanded");
      }

      playlistElem.classList.add("collapsed");
    },

    async callPutAPI(newName) {
      this.playlist.name = newName;
      await modifyPlaylist(this.playlist);
    },

    deleteSong(trackId) {
      this.$dialog
        .confirm(`Delete this track from the playlist \"${this.playlist.name}\"?`, {customClass:'ubeatDelete'})

        .then(async (dialog) => {
          try {
            await deleteTrack(this.playlist.id, trackId);
            const trackIndex = this.playlist.tracks.findIndex(
              track => track.trackId === trackId
            );
            this.playlist.tracks.splice(trackIndex, 1);
          } catch (e) {
            alert(e);
          }
        })
        .catch(function() {
        });
    },

    deletePlaylistById() {
      this.$emit("deletePlaylist", this.playlist);
    }
  },

  mounted() {
    this.addAutoResize();
    window.addEventListener("resize", this.addAutoResize);
  }
};
</script>

<style scoped>
.playlistNameWrapper {
  display: inline-flex;
  /*width: 100%;*/
  margin-left: 20px;
  position: relative;
  width: calc(100% - 26px);
}

.playlistNameInput {
  border: none;
  /*width: auto;*/
  outline: none;
  height: auto;
  min-height: 1em;
  /*overflow: auto;*/
  resize: none;
  box-sizing: border-box;
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding-right: 10px;
}

.playlistNameInput:disabled {
  color: var(--primaryAccentColor);
}

.icons {
  top: 6px;
  position: relative;
  color: var(--darkGrey);
  background-color: #38384226;
  padding: 7px;
  border-radius: 100%;
  width: 26px;
  height: 26px;
  margin: 0 5px;
}

.icons:last-child {
  margin-right: 0;
}

.collapseHandleIcon {
  position: absolute;
  left: -20px;
  top: 10px;
  font-size: 16px;
}

.collapseHandleIcon:hover {
  cursor: pointer;
}

.collapsed .playlistTracks {
  display: none;
}

.collapsed .iconAngleDown {
  display: none;
}

.collapsed .iconAngleRight {
  display: block;
}

.expanded .playlistTracks {
  display: block;
}

.expanded .iconAngleDown {
  display: block;
}

.expanded .iconAngleRight {
  display: none;
}

button:focus {
  outline: none;
  background-color: #2ab7a9;
  color: #fff;
}

 .dg-pull-right {
   float: right;
 }
 .dg-btn--ok {
   color: #009688;
   background-color: #fefefe;
   border-color: #009688;
 }
</style>
