<template>
  <div id="artistPage" class="container">
    <ArtistInfo
      v-bind:artistName="artistInfo.artistName"
      v-bind:imgArtist="artistInfo.imgArtist"
      v-bind:genre="artistInfo.genre"
      v-bind:artistLink="artistInfo.artistLink"
    ></ArtistInfo>

    <section>
      <h3 class="listTitle">Latest Releases</h3>
      <ul class="latestReleases row">
        <li class="col s12 m6 l6">
          <div class="release flexContent">
            <img
              src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg"
              alt="Album Image"
              class="trackImg"
            />
            <img
              src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
              class="playButton"
            />
            <div class="infoTrack">
              <p class="trackPosition">
                <span class="trackName">Track Name</span>
              </p>
            </div>
          </div>
        </li>
        <li class="col s12 m6 l6">
          <div class="release flexContent">
            <img
              src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg"
              alt="Album Image"
              class="trackImg"
            />
            <img
              src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
              class="playButton"
            />
            <div class="infoTrack">
              <p class="trackPosition">
                <span class="trackName">Track Name</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>

   <Tracks title="Popular tracks"></Tracks>
    <AlbumOfArtist title="Albums"></AlbumOfArtist>
  </div>
</template>
<script>
  import ArtistInfo from "./Artist/ArtistInfo.vue";
  import Tracks from "./Album/Tracks";
  import AlbumOfArtist from "./Artist/AlbumOfArtist.vue";
  import {getArtistInfo} from "../lib/util/utilArtist";

  export default {
      data() {
          return {
              artistInfo: {
                  artistName: "Mick Jenkins",
                  imgArtist: "https://is5-ssl.mzstatic.com/image/thumb/Features128/v4/56/73/e8/5673e8e8-b81b-0548-0eb7-7c72c6756bda/mzl.isfkrmim.jpg/400x400bb.jpg",
                  genre: "Hip-Hop/Rap",
                  linkItune: "https://geo.music.apple.com/ca/artist/mick-jenkins/885270234?mt=1&app=music"
              }
          };
      },
      async mounted() {
          if (this.$route.params.name) {
              const artistSearch = await getArtistInfo(this.$route.params.name);
              this.artistInfo = artistSearch;
              console.log(artistSearch);
          }
      },
      components: {
          ArtistInfo,
          Tracks,
          AlbumOfArtist
      }

  };
</script>
<style src="./../css/Artist.css"></style>
