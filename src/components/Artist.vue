<template>
  <div id="artistPage" class="container">
    <ArtistInfo
      v-bind:artistName="artistInfo.artistName"
      v-bind:imgArtist="artistInfo.imgArtist"
      v-bind:genre="artistInfo.genre"
      v-bind:artistLink="artistInfo.artistLink"
    ></ArtistInfo>
    <LatestReleases></LatestReleases>
    <Tracks title="Popular tracks"></Tracks>
    <AlbumOfArtist title="Albums"
                   v-bind:albumList="albumInfo"
    ></AlbumOfArtist>
  </div>
</template>
<script>
  import ArtistInfo from "./Artist/ArtistInfo.vue";
  import Tracks from "./Album/Tracks";
  import AlbumOfArtist from "./Artist/AlbumOfArtist.vue";
  import {getArtistInfo, getAlbumInfo} from "../lib/util/utilArtist";
  import LatestReleases from "./Artist/LatestReleases";

  export default {
      data() {
          return {
              artistInfo: {
                  artistName: "Mick Jenkins",
                  imgArtist: "https://is5-ssl.mzstatic.com/image/thumb/Features128/v4/56/73/e8/5673e8e8-b81b-0548-0eb7-7c72c6756bda/mzl.isfkrmim.jpg/400x400bb.jpg",
                  genre: "Hip-Hop/Rap",
                  artistLink: "https://geo.music.apple.com/ca/artist/mick-jenkins/885270234?mt=1&app=music"
              },
              albumInfo: [
                  { albumTitle: "Pieces of a man", albumYear : 2018, albumImage: "https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" },
                  { albumTitle: "Or More The Anxious" , albumYear: 2017, albumImage: "https://i1.sndcdn.com/artworks-3e86379b-ae93-443b-887a-52b0a8b05a93-0-t500x500.jpg" },
                  { albumTitle: "The Healing Component", albumYear: 2016, albumImage: "https://i1.sndcdn.com/artworks-000127868569-v269fn-t500x500.jpg" },
                  { albumTitle: "Wave[s]", albumYear: 2015, albumImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },
                  { albumTitle: "The Water(s)", albumYear: 2014, albumImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },
              ]
          };
      },
      async mounted() {
          if (this.$route.params.name) {
              const artistSearch = await getArtistInfo(this.$route.params.name);
              this.artistInfo = artistSearch[0];
              const albumInfo = await getAlbumInfo(artistSearch[1],6);
              this.albumInfo = albumInfo;
              console.log(artistSearch);
          }
      },
      components: {
          LatestReleases,
          ArtistInfo,
          AlbumOfArtist,
          Tracks
      }

  };
</script>
<style src="./../css/Artist.css"></style>
