<template>
  <div>
    <div class="playlistNameWrapper">
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
        class=""
        :icon="['fa', 'pencil-alt']"
        @click="modifyTitle"
      />
    </div>
    <ul>
      <template v-for="track in playlist.tracks">
        <single-track :track="track"> </single-track>
      </template>
    </ul>
  </div>
</template>

<script>
import SingleTrack from "./SingleTrack";
import { modifyPlaylist } from "../../lib/util/utilPlaylist";

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

    async callPutAPI(newName) {
      this.playlist.name = newName;
      await modifyPlaylist(this.playlist);
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
  width: 100%;
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
}

.playlistNameInput:disabled {
  color: var(--primaryAccentColor);
}
</style>
