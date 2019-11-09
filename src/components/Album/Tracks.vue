<template>
  <section class="tracks">
    <h2 class="listTitle">
      <a>{{title}}</a>
    </h2>
    <ul>
      <TrackItem
        v-for="track in trackList"
        v-bind:key="track.songTitle"
        v-bind:trackNumber="track.trackNumber"
        v-bind:songTitle="track.songTitle"
        v-bind:trackDuration="track.trackDuration"
        v-bind:songLink="track.songLink"
        v-bind:artist="artist"
        v-bind:album="album"
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
          {
            trackNumber: 1,
            songTitle: "foo",
            trackDuration: "0:00",
            songLink: "./",
          },
          {
            trackNumber: 2,
            songTitle: "bar",
            trackDuration: "1:00",
            songLink: "./",
          }
        ];
      }
    },
    album:{
      type:String,
      default:""
    },artist:{
      type:String,
      default:""
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
