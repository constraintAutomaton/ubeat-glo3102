<template>
  <li class="trackInfo" v-on:click="playSong">
    <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
    <span class="songTitle">{{ track.trackName }}</span>
    <span class="songArtist">{{ track.artistName }}</span>
    <span class="trackDuration">{{ track.trackDuration }}</span>
    <font-awesome-icon
      class="deleteTrack"
      :icon="['fas', 'minus-circle']"
      @click="deleteSong(track.trackId)"
    />
  </li>
</template>

<script>
// import { deleteTrack } from "../../lib/util/utilPlaylist";

export default {
  name: "Track",
  props: {
    track: {}
  },
  created() {
    this.track.trackDuration = this.getTrackTime();
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
      this.$songEvent.$emit("data", {
        songTitle: this.track.trackName,
        songLink: this.track.previewUrl,
        artist: this.track.artistName,
        album: this.album
      });
    },

    deleteSong(trackId) {
        console.log("in single track", trackId);
      this.$emit("deleteSong", trackId);
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
