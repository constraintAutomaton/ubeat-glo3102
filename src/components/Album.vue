<template>
  <div id="albumPage" class="container">
    <AlbumInfo v-bind:albumInfo="albumInfo"></AlbumInfo>
    <Tracks
      v-bind:trackList="trackInfo"
      v-bind:artist="albumInfo.artist"
      v-bind:album="albumInfo.album"
    ></Tracks>
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
        albumName: "bar",
        image: "./../../assets/logo.png",
        artist: "foo",
        genre: "bar",
        release: 1984,
        numberOfTrack: 2501,
        linkItune: "./"
      },
      trackInfo: [
        {
          trackNumber: 1,
          songTitle: "bar",
          trackDuration: "99:00",
          songLink: "./"
        },
        {
          trackNumber: 2,
          songTitle: "bar",
          trackDuration: "99:00",
          songLink: "./"
        }
      ]
    };
  },
  async mounted() {
    if (this.$route.params.name) {
      const albumSearch = await getAlbumInfo(this.$route.params.name);
      this.albumInfo = albumSearch[0];
      console.info(this.albumInfo);
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
