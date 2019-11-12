<template>
  <div id="playContainer">
    <div class="playOptions">
      <font-awesome-icon class="playIcon" :icon="['fas', 'sync']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'backward']" />
      <font-awesome-icon id="mainPlay" class="playIcon mainPlayButton" :icon="['fas', 'play-circle']" />
      <font-awesome-icon id="mainPause" class="playIcon mainPlayButton" :icon="['fas', 'pause-circle']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'forward']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'random']" />
    <add-to-playlist-box v-bind:playingTrackObj="trackObj" ></add-to-playlist-box>
    </div>
    <div class="playInformation">
      <p>{{songTitle}}</p>
      <p>{{artist}}</p>
    </div>
  </div>
</template>

<script>
import AddToPlaylistBox from "./Playlist/AddToPlaylistBox";
import { Howl } from "howler";
export default {
  data() {
    return {
      trackObj: undefined,
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
  components: {
    AddToPlaylistBox
  },
  methods: {
    ChangePlayingSong(info) {
      this.song != undefined ? this.song.stop() : "";
      this.trackObj = info.trackObj;
      this.songTitle = info.songTitle;
      this.songLink = info.songLink;
      this.artist = info.artist;
      this.album = info.album;
      this.song = new Howl({
        src: [this.songLink]
      });
      this.song.play();
      document.getElementById('mainPlay').style.display = 'none';
      document.getElementById('mainPause').style.display = 'block';
    }
  },
  name: "PlayContainer.vue"
};
</script>

<style src ="./../css/PlayContainer.css"></style>
