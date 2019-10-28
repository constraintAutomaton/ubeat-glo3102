<template>
  <li class="trackInfo">
    <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
    <span class="trackNumber">{{trackNumber}}</span>
    <span class="songTitle">{{songTitle}}</span>
    <span class="trackDuration">{{trackDuration}}</span>
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
    }
  }
};
</script>

