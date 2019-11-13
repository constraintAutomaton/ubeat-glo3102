<template>
  <li class="trackInfo" v-on:click="playSong">
    <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
    <span class="trackNumber">{{ trackNumber }}</span>
    <span class="songTitle">{{ songTitle }}</span>
    <span class="songArtist">{{ artist }}</span>
    <span class="trackDuration">{{ trackDuration }}</span>
  </li>
</template>
<style src="./../../css/TrackItem.css">
</style>
<script>
export default {
  props: {
    trackObj : {
      default: undefined
    },
    trackNumber: {
      type: Number,
      default: -1
    },
    songTitle: {
      type: String,
      default: "foo"
    },
    trackDuration: {
      type: String,
      default: "0:00"
    },
    songLink: {
      type: String,
      default: "./"
    },
    artist: {
      type: String,
      default: ""
    },
    album: {
      type: String,
      default: ""
    }
  },
  methods: {
    playSong() {
      this.$songEvent.$emit("data", {
        trackObj: this.trackObj,
        songTitle: this.songTitle,
        songLink: this.songLink,
        artist: this.artist,
        album: this.album
      });
    }
  }
};
</script>

