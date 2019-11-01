<template>
  <section class="tracks">
    <h2 class="listTitle">
      <a>{{title}}</a>
    </h2>
    <ul v-for="track in trackList">
      <TrackItem
        v-bind:key="track.trackNumber"
        v-bind:trackNumber="track.trackNumber"
        v-bind:songTitle="track.songTitle"
        v-bind:trackDuration="track.trackDuration"
      ></TrackItem>
    </ul>
  </section>
</template>
<script>
import TrackItem from "./TrackItem.vue";
export default {
  props: {
    trackList: {
      type: Array,
      default: () => {
        return [
          { trackNumber: 1, songTitle: "foo", trackDuration: "0:00" },
          { trackNumber: 2, songTitle: "bar", trackDuration: "1:00" }
        ];
      }
    },
    title: {
      type: String,
      default: () => {
        return "Tracks";
      }
    }
  },
  components: {
    TrackItem
  }
};
</script>
