<template>
  <li class="trackInfo">
    <font-awesome-icon
      v-on:click="playSong"
      v-if="!playing"
      class="playTrackIcon"
      :icon="['fas', 'play-circle']"
    />
    <font-awesome-icon
      v-on:click="pauseSong"
      v-if="playing"
      class="playTrackIcon"
      :icon="['fas', 'pause-circle']"
    />
    <span v-if="!insidePlaylist" class="trackNumber">
      {{ track.trackNumber }}
    </span>
    <div class="mainSongInfo">
      <span class="songTitle">{{ track.trackName }}</span>
      <router-link
        :to="'/artist/' + track.artistId"
        tag="span"
        class="songArtist"
        >{{ track.artistName }}</router-link
      >
    </div>
    <span class="trackDuration">{{ track.trackDuration }}</span>
    <a
      v-if="!insidePlaylist"
      class="waves-effect waves-light"
      @click="openDialog"
    >
      <i class="material-icons right addIcon">playlist_add</i>
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
    this.$songEvent.$on("pausedSong", this.changePlayingStatus);
    this.$songEvent.$on("resumedSong", this.changePlayingStatus);
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

    playSong() {
      this.$songEvent.$emit("data", this.track);
      this.playing = !this.playing;
    },

    deleteSong(trackId) {
      this.$emit("deleteSong", trackId);
    },

    pauseSong() {
      this.$songEvent.$emit("pauseSong", this.track.trackId);
      this.playing = false;
    },

    changePlayingStatus(songId) {
      if (this.track.trackId === songId) {
        this.playing = !this.playing;
      } else {
        this.playing = false;
      }
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

@media screen and (min-width: 500px) {
  .deleteTrack {
    min-width: 1.5em;
  }
}
</style>
