<template>
  <section class="tracks">
<!--    <h2 class="listTitle">-->
<!--&lt;!&ndash;      <a>{{// track.collectionName}}</a>&ndash;&gt;-->
<!--    </h2>-->
    <ul>
<!--      <TrackItem-->
<!--        v-for="track in trackList"-->
<!--        v-bind:key="track.songTitle"-->
<!--        v-bind:trackObj="track.trackObj"-->
<!--        v-bind:trackNumber="track.trackNumber"-->
<!--        v-bind:songTitle="track.songTitle"-->
<!--        v-bind:trackDuration="track.trackDuration"-->
<!--        v-bind:songLink="track.songLink"-->
<!--        v-bind:artist="artist"-->
<!--        v-bind:album="album"-->
<!--      ></TrackItem>-->

      <single-track
        v-for="track in trackList"
        :key="track.id"
        :track="track"
        @addToPlaylist="pushAddToPlaylist"
      ></single-track>
    </ul>
  </section>
</template>
<script>
import TrackItem from "./TrackItem.vue";
import SingleTrack from "../Playlist/SingleTrack";
export default {
  props: {
    trackList: {
      type: Array
    }
  },
  components: {
    TrackItem,
      SingleTrack
  },
  methods: {
    pushAddToPlaylist(tracks) {
      this.$emit("addToPlaylist", tracks);
    }
  }
};
</script>
