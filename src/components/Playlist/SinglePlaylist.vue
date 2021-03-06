<template>
  <div v-bind:class="{ collapsed: isCollapsed }">
    <div class="playlistNameWrapper">
      <font-awesome-icon
        v-bind:class="{ iconAngleRightHidden: !isCollapsed }"
        class="collapseHandleIcon"
        :icon="['fas', 'angle-right']"
        @click="togglePlaylist"
      />
      <font-awesome-icon
        v-bind:class="{ iconAngleDownHidden: isCollapsed }"
        class="collapseHandleIcon"
        :icon="['fas', 'angle-down']"
        @click="togglePlaylist"
      />
      <textarea
        ref="playlistName"
        class="playlistNameInput"
        placeholder="Enter a playlist title"
        rows="1"
        readonly
        @click="togglePlaylist"
        @keydown.enter="saveNewTitle"
        @focusout="saveNewTitle"
        @keyup="addAutoResize"
        v-model="playlist.name"
      >
      </textarea>
      <a v-if="route != 'User'" class="btn btn-small icons" @click="modifyTitle">
        <font-awesome-icon class="" :icon="['fa', 'pencil-alt']" />
      </a>
      <a v-if="route != 'User'" class="btn btn-small icons" @click="deletePlaylist">
        <font-awesome-icon class="" :icon="['fa', 'trash-alt']" />
      </a>
    </div>
    <ul class="playlistTracks" v-if="this.playlist.tracks.length !== 0">
      <template v-for="track in playlist.tracks">
        <single-track
          :track="track"
          :insidePlaylist="true"
          @deleteSong="deleteSong"
          :key="track.id"
        >
        </single-track>
      </template>
    </ul>

    <ul class="playlistTracks emptyPlaylist" v-else>
      <li>No tracks added yet</li>
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
    }
  },
  components: {
    SingleTrack
  },
  data() {
    return {
      isCollapsed: true,
      previousName: "New Playlist",
      route: this.$route.name
    };
  },
  methods: {
    /**
     * Enables the playlist Title textarea to edit it
     */

    modifyTitle() {
      this.previousName = this.playlist.name;
      this.$refs.playlistName.readOnly = false;
      this.$refs.playlistName.focus();
    },

    /**
     * Calls the PUT method to update Playlist name on Enter Key pressed
     * or clicks out of element
     */

    saveNewTitle() {
      if (
        this.playlist.name === "" ||
        typeof this.playlist.name === "undefined" ||
        !this.playlist.name.replace(/\s/g, "").length
      ) {
        this.$dialog
          .alert("The Playlist name is invalid!", {
            customClass: "ubeatWarning"
          })
          .then(() => {
            this.playlist.name = this.previousName;
            this.$refs.playlistName.focus();
          });
      } else {
        this.callPutAPI();
        this.$refs.playlistName.readOnly = true;
      }
    },

    addAutoResize(event) {
      if (typeof event !== "undefined" && event.type !== "resize") {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      } else {
        let element = this.$refs.playlistName;
        if (typeof element !== "undefined") {
          element.style.boxSizing = "border-box";
          element.style.height = "inherit";
          let offset = element.offsetHeight - element.clientHeight;
          element.style.height = element.scrollHeight + offset + "px";
        }
      }
    },

    togglePlaylist() {
      if (this.$refs.playlistName.readOnly)
        this.isCollapsed = !this.isCollapsed;
    },

    async callPutAPI() {
      const result = await modifyPlaylist(this.playlist, this.$cookie.get("token"));
      if(!result.ok)
        console.error(result.message);
    },

    deleteSong(trackId) {
      this.$dialog
        .confirm(
          `Delete this track from the playlist "${this.playlist.name}"?`,
          { customClass: "ubeatDelete" }
        )

        .then(async () => {
          try {
            const result = await deleteTrack(this.playlist.id, trackId, this.$cookie.get("token"));
            if(result.ok)
            {
              const trackIndex = this.playlist.tracks.findIndex(
                track => track.trackId === trackId
              );
              this.playlist.tracks.splice(trackIndex, 1);
            }
            else
            {
              console.error(result.message);
            }
          } catch (e) {
            alert(e);
          }
        })
        .catch(function() {});
    },

    deletePlaylist() {
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
  padding-bottom: 1rem;
  position: relative;
  width: calc(100% - 20px);
}

.playlistNameWrapper textarea:read-only {
  user-select: none;
}

.playlistNameWrapper textarea:hover:read-only {
  text-decoration: underline;
}

ul.playlistTracks {
  margin: 0 0 2rem;
}
.emptyPlaylist li {
  margin-left: 22px;
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
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding-right: 10px;
}

.playlistNameInput:read-only {
  color: var(--primaryAccentColor);
  cursor: pointer;
}

.icons {
  margin-right: 5px;
  color: white;
  background-color: var(--mediumGrey);
}

.icons:hover {
  background-color: var(--darkGrey);
  color: white;
}

.icons:last-child {
  margin-right: 0;
}

.collapseHandleIcon {
  position: absolute;
  left: -20px;
  top: 8px;
  font-size: 16px;
}

.collapseHandleIcon:hover {
  cursor: pointer;
}

.collapsed .playlistTracks {
  display: none;
}

.iconAngleDownHidden {
  display: none;
}

.iconAngleRightHidden {
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
