<template>
  <div id="albumPage" class="container">
    <AlbumInfo v-bind:albumInfo="albumInfo"></AlbumInfo>
    <h2 class="listTitle">{{albumInfo.albumName}}</h2>
    <Tracks v-bind:trackList="albumInfo.trackList"></Tracks>
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
      albumInfo: {},
      trackInfo: [
        {
          trackObj: undefined,
          trackNumber: 1,
          songTitle: "bar",
          trackDuration: "99:00",
          songLink: "./"
        },
        {
          trackObj: undefined,
          trackNumber: 2,
          songTitle: "bar",
          trackDuration: "99:00",
          songLink: "./"
        }
      ]
    };
  },
  async mounted() {
    console.log(this.$route.query);
    if (this.$route.params.name) {
      const albumSearch = await getAlbumInfo(Number(this.$route.query.id));
      this.albumInfo = albumSearch[0];
      console.log(this.albumInfo);
      const id = albumSearch[1];
      this.trackInfo = await getTrackInfo(id);
    }
  },
  components: {
    AlbumInfo,
    Tracks
  }
};
</script>
