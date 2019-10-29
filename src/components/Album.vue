<template>
  <div id="albumPage" class="container">
    <AlbumInfo
      v-bind:ambumName="ambumName"
      v-bind-image="image"
      v-bind:artiste="artiste"
      v-bind:genre="genre"
      v-bind:release="release"
      v-bind:numberOfTrack="numberOfTrack"
      v-bind:linkItune="linkItune"
    ></AlbumInfo>
    <Tracks></Tracks>
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
import { getAlbumInfo } from "./../lib/util/utilAlbum";
export default {
  data() {
    return {
      ambumName: "bar",
      image: "./../../assets/logo.png",
      artiste: "foo",
      genre: "bar",
      release: 1984,
      numberOfTrack: 2501,
      linkItune: "./"
    };
  },
  async mounted() {
    if (this.$route.params.name) {
      const info = await getAlbumInfo(this.$route.params.name);
      // destructuring doesn't seem to work with "this"
      this.ambumName = info.ambumName;
      this.image = info.image;
      this.artiste = info.artiste;
      this.genre = info.genre;
      this.release = info.release;
      this.numberOfTrack = info.numberOfTrack;
      this.linkItune = info.linkItune;
    }
  },
  components: {
    AlbumInfo,
    Tracks
  }
};
</script>
