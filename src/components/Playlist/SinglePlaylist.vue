<template>
  <div>
    <div class="playlistNameWrapper">
      <textarea
        :id="`playlistName${indexNumber}`"
        data-autoresize
        class="playlistNameInput autoexpand"
        placeholder="Enter task"
        rows="1"
        disabled
        width="auto"
        v-on:keydown="saveNewTitle"
        v-on:focusout="saveNewTitle"
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
        alert("need To save");
        //TODO call save New Playlist name
        event.target.setAttribute("disabled", "");
      }
      let keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode === 13) {
        event.preventDefault();
        //TODO call save New Playlist name
        inputField.setAttribute("disabled", "");
      }
    },

    addAutoResize() {
      document.querySelectorAll("[data-autoresize]").forEach(function(element) {
        element.style.boxSizing = "border-box";
        var offset = element.offsetHeight - element.clientHeight;
        document.addEventListener("input", function(event) {
          event.target.style.height = "auto";
          event.target.style.height = event.target.scrollHeight + offset + "px";
        });
        element.removeAttribute("data-autoresize");
      });
    }
  },

  mounted() {
    this.addAutoResize();
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
  width: auto;
  outline: none;
  overflow: auto;
  resize: none;
  box-sizing: border-box;
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: 500;
}

.playlistNameInput:disabled {
  color: var(--primaryAccentColor);
}
</style>
