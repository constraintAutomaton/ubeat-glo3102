<template>
  <section class="tracks">
    <ul>
      <single-track
        v-for="track in trackList"
        :key="track.id"
        :track="track"
      ></single-track>
    </ul>
  </section>
</template>
<script>
import SingleTrack from "../Playlist/SingleTrack";
export default {
  props: {
    trackList: {
      type: Array
    }
  },
  components: {
    SingleTrack
  }
};
</script>
