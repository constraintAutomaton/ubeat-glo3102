<template>
  <div id="playContainer">
    <div class="playOptions">
      <font-awesome-icon class="playIcon" :icon="['fas', 'sync']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'backward']" />
      <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'forward']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'random']" />
    </div>
    <div class="playInformation">
      <p>{{songTitle}}</p>
      <p>{{artist}}</p>
    </div>
  </div>
</template>

<script>
import { Howl } from "howler";
export default {
  data() {
    return {
      songTitle: "Name of the song",
      songLink: "",
      artist: "Artist",
      album: "Album",
      song: undefined
    };
  },
  created() {
    this.$songEvent.$on("data", this.ChangePlayingSong);
  },

  beforeDestroy() {
    this.$songEvent.$off("data");
  },
  methods: {
    ChangePlayingSong(info) {
      this.song != undefined ? this.song.stop() : "";
      this.songTitle = info.songTitle;
      this.songLink = info.songLink;
      this.artist = info.artist;
      this.album = info.album;
      this.song = new Howl({
        src: [this.songLink]
      });
      this.song.play();
    }
  },
  name: "PlayContainer.vue"
};
</script>

<style src ="./../css/PlayContainer.css"></style>
