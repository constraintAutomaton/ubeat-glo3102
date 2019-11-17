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
        <i id="addToPlaylistButton" class="material-icons playIcon" @click="openDialog">playlist_add</i>
      <AddToPlaylistsDialog
      ref="addToPlaylistDialog"
      :tracks="[trackObj]"
    />
    </div>
    <div class="playInformation">
      <div>
        <p class="info">
          <span>{{ songTitle }} </span>
        </p>
        <span>&nbsp;-&nbsp;<a class="info hide-on-small-and-down" :href="`./#/album/${albumId}`">{{ album }}</a></span>
      </div>
      <span class="hide-on-med-and-up">&nbsp;-&nbsp;</span>
      <a class="info" :href="`./#/artist/${artistId}`">{{ artist }}</a>
    </div>
  </div>
</template>

<script>
import AddToPlaylistsDialog from "./Playlist/AddToPlaylistsDialog";
import { Howl } from "howler";
export default {
  name: "PlayContainer.vue",

  data() {
    return {
      trackObj: undefined,
      songTitle: "",
      songLink: "",
      artistId: "",
      artist: "",
      albumId: "",
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
    AddToPlaylistsDialog
  },
  methods: {
    ChangePlayingSong(track) {
      this.song != undefined ? this.song.stop() : "";
      this.trackObj = track;
      this.songTitle = track.trackName;
      this.songLink = track.previewUrl;
      this.artistId = track.artistId;
      this.artist = track.artistName;
      this.albumId = track.collectionId;
      this.album = track.collectionName;
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
        this.song.play(this.song.id);
        document.getElementById("mainPlay").style.display = "none";
        document.getElementById("mainPause").style.display = "block";
      }
    },
    openDialog() {
      if(this.trackObj != undefined)
      {
        this.$refs.addToPlaylistDialog.open();
      }
    }
  }
};
</script>

<style src="./../css/PlayContainer.css"></style>
