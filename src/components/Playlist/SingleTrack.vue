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
    <span v-if="!insidePlaylist" class="trackNumber">{{
      track.trackNumber
    }}</span>
    <span class="songTitle">{{ track.trackName }}</span>
    <span class="songArtist">{{ track.artistName }}</span>
    <span class="trackDuration">{{ track.trackDuration }}</span>
    <a v-if="!insidePlaylist" class="waves-light" @click="openDialog"
      ><i class="material-icons right">playlist_add</i></a
    >
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
.deleteTrack {
  min-width: 1.5em;
  margin-left: 10px;
  font-size: 1.2rem;
}
</style>
