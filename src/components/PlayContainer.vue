<template>
  <div id="playContainer">
    <!--    <div id="waveform"></div>-->
    <div class="waveformContainer">
      <div id="waveform"></div>
    </div>

    <div id="playBar">
      <span id="timer">0:00</span>
      <div class="audio-progress">
        <div id="progress"></div>
      </div>
      <span id="duration">0:00</span>
    </div>
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
      <i
        id="addToPlaylistButton"
        class="material-icons playIcon"
        @click="openDialog"
        >playlist_add</i
      >
      <AddToPlaylistsDialog ref="addToPlaylistDialog" :tracks="[trackObj]" />
    </div>
    <div class="playInformation">
      <div>
        <p class="info">
          <span>{{ songTitle }} </span>
        </p>
        <span class="hide-on-small-and-down"
          >&nbsp;-&nbsp;
          <router-link :to="'/album/' + albumId" tag="a" class="info"
            >{{ album }}
          </router-link>
        </span>
      </div>
      <span class="hide-on-med-and-up">&nbsp;-&nbsp;</span>
      <router-link :to="'/artist/' + artistId" tag="a" class="info"
        >{{ artist }}
      </router-link>
    </div>
  </div>
</template>

<script>
import AddToPlaylistsDialog from "./Playlist/AddToPlaylistsDialog";
import { Howl } from "howler";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import MinimapPlugin from "wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js";

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

  mounted() {
    // let wavesurferScript = document.createElement("script");
    // wavesurferScript.setAttribute(
    //   "src",
    //   "http://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js"
    // );
    // document.head.appendChild(wavesurferScript);
    // this.wavesurfer = WaveSurfer.create({
    //   // Use the id or class-name of the element you created, as a selector
    //   container: "#waveform",
    //   // The color can be either a simple CSS color or a Canvas gradient
    //   waveColor: "grey",
    //   progressColor: "#f87f8f",
    //   cursorColor: "#fff",
    //   // This parameter makes the waveform look like SoundCloud's player
    //   barWidth: 3
    // });
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
      console.log("LINK", this.songLink);
      this.song = new Howl({
        src: [this.songLink],
        onplay: this.updateSongProgress
      });
      console.log("SONG", this.song);
      if (typeof this.wavesurfer !== "undefined") {
        this.wavesurfer.destroy();
      }
      this.wavesurfer = WaveSurfer.create({
        // Use the id or class-name of the element you created, as a selector
        container: "#waveform",
        interact: "false",
        // The color can be either a simple CSS color or a Canvas gradient
        waveColor: "#383842",
        height: 40,
        progressColor: "#8fd1d9",
        cursorWidth: 0,
        // This parameter makes the waveform look like SoundCloud's player
        barWidth: 3
      });

      this.wavesurfer.load(this.song._src);
      this.wavesurfer.setVolume(0);
      this.$songEvent.$emit("switchSong", this.trackObj.trackId);
      this.wavesurfer.on("ready", () => {
        this.playSong();
      });
      // this.playSong();
    },

    pauseSong() {
      if (typeof this.song !== "undefined") {
        this.song.pause();
        this.wavesurfer.playPause();
        this.$songEvent.$emit("resumedSong", this.trackObj.trackId);
        document.getElementById("mainPause").style.display = "none";
        document.getElementById("mainPlay").style.display = "block";
      }
    },

    playSong() {
      if (typeof this.song !== "undefined") {
        this.song.play(this.song.id);
        this.wavesurfer.playPause();
        this.$songEvent.$emit("pausedSong", this.trackObj.trackId);
        document.getElementById("mainPlay").style.display = "none";
        document.getElementById("mainPause").style.display = "block";
      }
    },
    openDialog() {
      if (this.trackObj != undefined) {
        this.$refs.addToPlaylistDialog.open();
      }
    },

    updateSongProgress() {
      this.song.audioPlayed = true;
      let time = Math.round(this.song.duration());
      let songDurationSpan = document.getElementById("duration");
      songDurationSpan.textContent = this.formatTime(time);
      requestAnimationFrame(this.updateTimeTracker.bind(this));
    },

    formatTime(secs) {
      let minutes = Math.floor(secs / 60) || 0;
      let seconds = secs - minutes * 60 || 0;
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    updateTimeTracker() {
      let seek = this.song.seek() || 0;
      document.getElementById("timer").textContent = this.formatTime(
        Math.round(seek)
      );
      document.getElementById("progress").style.width =
        ((seek / this.song.duration()) * 100 || 0) + "%";

      if (this.song.playing()) {
        requestAnimationFrame(this.updateTimeTracker.bind(this));
      }
    }
  }
};
</script>

<style src="./../css/PlayContainer.css"></style>
