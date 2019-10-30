<template>
  <li>
    <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
    <span class="songTitle">{{ track.trackName }}</span>
    <span class="artistName">{{ track.artistName }}</span>
    <span class="trackDuration">{{ track.trackDuration }}</span>
  </li>
</template>

<script>
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
    }
  }
};
</script>

<style scoped></style>
