<template>
  <div id="albumPage" class="container">
    <AlbumInfo
      v-bind:ambumName="albumInfo.ambumName"
      v-bind:image="albumInfo.image"
      v-bind:artiste="albumInfo.artiste"
      v-bind:genre="albumInfo.genre"
      v-bind:release="albumInfo.release"
      v-bind:numberOfTrack="albumInfo.numberOfTrack"
      v-bind:linkItune="albumInfo.linkItune"
    ></AlbumInfo>
    <Tracks v-bind:trackList="trackInfo"></Tracks>
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
import { getAlbumInfo, getTrackInfo } from "./../lib/util/utilAlbum";
export default {
  data() {
    return {
      albumInfo: {
        ambumName: "bar",
        image: "./../../assets/logo.png",
        artiste: "foo",
        genre: "bar",
        release: 1984,
        numberOfTrack: 2501,
        linkItune: "./"
      },
      trackInfo: [
        { trackNumber: 1, songTitle: "bar", trackDuration: "99:00" },
        { trackNumber: 2, songTitle: "bar", trackDuration: "99:00" }
      ]
    };
  },
  async mounted() {
    if (this.$route.params.name) {
      const albumSearch = await getAlbumInfo(this.$route.params.name);
      this.albumInfo = albumSearch[0];
      const id = albumSearch[1];
      this.trackInfo = await getTrackInfo(id);
      //console.log(this.trackInfo);
    }
  },
  components: {
    AlbumInfo,
    Tracks
  }
};
</script>
