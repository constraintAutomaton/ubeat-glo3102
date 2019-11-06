<template>
  <li class="trackInfo" v-on:click="playSong">
    <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
    <span class="trackNumber">{{ trackNumber }}</span>
    <span class="songTitle">{{ songTitle }}</span>
    <span class="songArtist">{{ artist }}</span>
    <span class="trackDuration">{{ trackDuration }}</span>
  </li>
</template>

<script>
export default {
  props: {
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
        songTitle: this.songTitle,
        songLink: this.songLink,
        artist: this.artist,
        album: this.album
      });
    }
  }
};
</script>

<style scoped>
.trackInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primaryAccentColor);
  position: relative;
  height: 40px;
  color: #fff;
  margin-bottom: 0;
  border-bottom: solid var(--darkerAccentColor) 1px;
  padding: 5px 10px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.trackInfo:last-child {
  border-bottom: none;
}

.trackInfo:hover {
  cursor: pointer;
  background-color: var(--darkerAccentColor);
  color: var(--darkGrey);
}

.trackInfo .songTitle,
.trackInfo .songArtist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.playTrackIcon {
  font-size: 1.3rem;
}

.playTrackIcon,
.trackNumber {
  width: 3%;
  min-width: 1.5em;
}
.trackInfo .songTitle {
  flex-grow: 2;
  max-width: 90%;
}

.trackDuration {
  width: 8%;
  min-width: 3em;
  text-align: right;
}

.songArtist {
  width: 25%;
}
.playTrackIcon,
.trackNumber,
.songArtist .songTitle {
  margin-right: 10px;
}
</style>
