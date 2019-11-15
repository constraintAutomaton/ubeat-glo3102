<template>
  <div id="albumPage" class="container">
    <AlbumInfo v-bind:albumInfo="albumInfo" @addToPlaylist="openDialog"></AlbumInfo>
    <h2 class="listTitle">{{albumInfo.albumName}}</h2>
    <Tracks v-bind:trackList="albumInfo.trackList" @addToPlaylist="openDialog"></Tracks>
    <AddToPlaylistsDialog ref="addToPlaylistDialog" :tracks="tracksToAddPlaylist" />
  </div>
</template>

<style src="./../css/Album.css"></style>
<script>
import AlbumInfo from "./Album/AlbumInfo.vue";
import Tracks from "./Album/Tracks.vue";
import AddToPlaylistsDialog from "./Playlist/AddToPlaylistsDialog.vue";
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
      ],
      tracksToAddPlaylist: []
    };
  },
  async mounted() {
    if (this.$route.params.name) {
      const query =
        this.$route.query.id === undefined
          ? this.$route.params.name
          : Number(this.$route.query.id);
      const albumSearch = await getAlbumInfo(query);
      this.albumInfo = albumSearch[0];
      console.log(this.albumInfo);
      const id = albumSearch[1];
      this.trackInfo = await getTrackInfo(id);
    }
  },
  components: {
    AlbumInfo,
    Tracks,
    AddToPlaylistsDialog
  },
  methods: {
    openDialog(tracks) {
      this.tracksToAddPlaylist = tracks;
      this.$refs.addToPlaylistDialog.open();
    }
  }
};
</script>
