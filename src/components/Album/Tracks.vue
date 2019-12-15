<template>
  <section class="tracks">
    <h2 class="listTitle" v-if="title !== undefined" >
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>
    <ul v-if="trackList.length !== 0">
      <single-track
        v-for="track in trackList"
        :key="track.id"
        :track="track"
      ></single-track>
    </ul>
    <p v-else>No tracks found</p>
  </section>
</template>
<script>
import SingleTrack from "../Playlist/SingleTrack";
export default {
  props: {
    trackList: {
      type: Array
    },
    link: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    }
  },
  components: {
    SingleTrack
  }
};
</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
