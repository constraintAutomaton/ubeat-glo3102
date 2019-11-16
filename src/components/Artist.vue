<template>
  <div id="artistPage" class="container">
    <div v-if="!artistId">
      <ArtistList :title="'Featured Artists'"/>
    </div>
    <div v-else-if="artistInfo != null">
      <ArtistInfo
        :artistName="artistInfo.artistName"
        :imgArtist="artistInfo.highResImage"
        :genre="artistInfo.primaryGenreName"
        :artistLink="artistInfo.artistLinkUrl"
      ></ArtistInfo>
      <LatestReleases></LatestReleases>
      <Tracks title="Popular tracks"></Tracks>
      <AlbumOfArtist title="Albums"
                    :albumList="artistInfo.albums"
      ></AlbumOfArtist>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>
  import ArtistInfo from "./Artist/ArtistInfo.vue";
  import Tracks from "./Album/Tracks";
  import AlbumOfArtist from "./Artist/AlbumOfArtist.vue";
  import { getArtistById } from "../lib/util/utilArtist";
  import LatestReleases from "./Artist/LatestReleases";
  import ArtistList from './Artist/ArtistList'

  export default {
      data() {
          return {
              artistInfo: null
          };
      },
      mounted() {
        this.loadArtist();
      },
      computed: {
        artistId() {
          this.loadArtist();
          return this.$route.params.id;
        }
      },
      methods: {
        async loadArtist() {
          if (this.$route.params.id) {
              const artist = await getArtistById(this.$route.params.id);
              this.artistInfo = artist;
          }
          else {
            this.artistInfo = null;
          }
        }
      },
      components: {
          LatestReleases,
          ArtistInfo,
          AlbumOfArtist,
          Tracks,
          ArtistList
      }

  };
</script>
<style src="./../css/Artist.css"></style>
