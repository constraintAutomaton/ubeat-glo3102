<template>
  <div id="playContainer">
    <div class="playOptions">
      <font-awesome-icon class="playIcon" :icon="['fas', 'sync']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'backward']" />
      <font-awesome-icon
        id="mainPlay"
        class="playIcon mainPlayButton"
        :icon="['fas', 'play-circle']"
        @click="playSong"
      />
      <font-awesome-icon
        id="mainPause"
        class="playIcon mainPlayButton"
        :icon="['fas', 'pause-circle']"
        @click="pauseSong"
      />
      <font-awesome-icon class="playIcon" :icon="['fas', 'forward']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'random']" />
      <add-to-playlist-box
        v-bind:playingTrackObj="trackObj"
      ></add-to-playlist-box>
    </div>
    <div class="playInformation">
      <div><p class="info">{{ songTitle }} - </p><a class="info" v-bind:href="`./#/album/${album}`">{{album}}</a></div>
      <a class="info" v-bind:href="`./#/artist/${artist}`">{{artist}}</a>
    </div>
  </div>
</template>

<script>
import AddToPlaylistBox from "./Playlist/AddToPlaylistBox";
import { Howl } from "howler";
export default {
  name: "PlayContainer.vue",

  data() {
    return {
      trackObj: undefined,
      songTitle: "",
      songLink: "",
      artist: "",
      album: "",
      song: undefined
    };
  },
  created() {
    this.$songEvent.$on("data", this.ChangePlayingSong);
    this.$songEvent.$on("pauseSong", this.pauseSong);
  },

  beforeDestroy() {
    this.$songEvent.$off("data");
    this.$songEvent.$off("pauseSong");
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
      this.$songEvent.$emit("switchSong", {});
      this.playSong();
    },

    pauseSong() {
      if (typeof this.song !== "undefined") {
        this.song.pause();
        document.getElementById("mainPause").style.display = "none";
        document.getElementById("mainPlay").style.display = "block";
      }
    },

    playSong() {
      if (typeof this.song !== "undefined") {
        console.log(this.song);
        this.song.play(this.song.id);
        document.getElementById("mainPlay").style.display = "none";
        document.getElementById("mainPause").style.display = "block";
      }
    }
  }
};
</script>

<style src="./../css/PlayContainer.css"></style>
