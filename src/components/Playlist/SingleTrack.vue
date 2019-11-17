<template>
  <li class="trackInfo" @click="liClick">
    <font-awesome-icon
      @click="playSong"
      v-if="!playing"
      class="playTrackIcon"
      :icon="['fas', 'play-circle']"
    />
    <font-awesome-icon
      @click="pauseSong"
      v-if="playing"
      class="playTrackIcon"
      :icon="['fas', 'pause-circle']"
    />
    <span v-if="!insidePlaylist" class="trackNumber">
      {{ track.trackNumber }}
    </span>
    <div class="mainSongInfo">
      <span class="songTitle">{{ track.trackName }}</span>
      <span class="songArtist">
        <router-link :to="'/artist/' + track.artistId" tag="span" class="artistLink">{{ track.artistName }}</router-link>
      </span>
    </div>
    <span class="trackDuration">{{ track.trackDuration }}</span>
    <a
      v-if="!insidePlaylist"
      class="waves-effect waves-light playlistAdd"
      @click="openDialog"
    >
      <i class="material-icons right addIcon playlistAdd">playlist_add</i>
    </a>
    <font-awesome-icon
      v-else
      class="deleteTrack"
      :icon="['fas', 'minus-circle']"
      @click="deleteSong(track.trackId)"
    />
    <AddToPlaylistsDialog
      v-if="!insidePlaylist"
      ref="addToPlaylistDialog"
      :tracks="[track]"
    />
  </li>
</template>

<script>
import AddToPlaylistsDialog from "../Playlist/AddToPlaylistsDialog";
export default {
  name: "Track",
  components: {
    AddToPlaylistsDialog
  },
  props: {
    track: {},
    insidePlaylist: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      playing: false
    };
  },
  created() {
    this.track.trackDuration = this.getTrackTime();
    this.$songEvent.$on("switchSong", this.changePlayingStatus);
  },
  methods: {
    getTrackTime() {
      const trackTime = new Date(this.track.trackTimeMillis);
      let minutes = trackTime.getUTCMinutes();
      let seconds = trackTime.getSeconds();

      return (
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0")
      );
    },
    liClick(event) {
      const element = event.target;
      const elementTag = element.tagName;
      
      if (
          elementTag != "svg" &&
          elementTag != "path" &&
          elementTag != "P" &&
          !element.classList.contains("artistLink") &&
          !element.classList.contains("playlistAdd") &&
          !element.classList.contains("dialog") &&
          !element.classList.contains("dialogContent")
          )
      {
        if (!this.playing) {
          this.playSong();
        } else {
          this.pauseSong();
        }
      }
    },

    playSong() {
        this.$songEvent.$emit("data", this.track);
        this.playing = !this.playing;
    },

    deleteSong(trackId) {
      this.$emit("deleteSong", trackId);
    },

    pauseSong() {
      this.$songEvent.$emit("pauseSong", {});
      this.playing = false;
    },

    changePlayingStatus() {
      this.playing = false;
    },
    openDialog() {
      this.$refs.addToPlaylistDialog.open();
    }
  }
};
</script>
<style src="./../../css/Track.css"></style>

<style scoped>
.deleteTrack,
.addIcon {
  margin-left: 10px;
  font-size: 1.2rem;
}

.artistLink:hover {
  text-decoration: underline;
  color: #fff;
}

@media screen and (min-width: 500px) {
  .deleteTrack {
    min-width: 1.5em;
  }
}
</style>
