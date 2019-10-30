<template>
  <section class="tracks">
    <h2 class="listTitle">
      <a>{{title}}</a>
    </h2>
    <ul v-for="track in trackList">
      <TrackItem v-bind:key="track.trackNumber" v-bind:trackNumber="track.trackNumber"></TrackItem>
    </ul>
  </section>
</template>
<script>
import TrackItem from "./TrackItem.vue";
import { type } from "os";
export default {
  props: {
    trackList: {
      type: Array,
      default: ()=>{return [
        { trackNumber: 1, songTitle: "foo", trackDuration: "0:00" },
        { trackNumber: 2, songTitle: "foo", trackDuration: "0:00" }
      ];}
    },
      title:{
        type:String,
          default:"Tracks"
      }
  },
  components: {
    TrackItem
  }
};
</script>
