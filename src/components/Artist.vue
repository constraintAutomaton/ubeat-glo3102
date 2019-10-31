<template>
  <div id="artistPage" class="container">
    <ArtistInfo
      v-bind:artistName="artistInfo.artistName"
      v-bind-image="artistInfo.imgArtist"
      v-bind:genre="artistInfo.genre"
      v-bind:linkItune="artistInfo.linkItune"
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
  export default {
      data() {
          return {
              artistInfo: {
                  artistName: "Mick Jenkins",
                  imgArtist: "./../../assets/logo.png",
                  genre: "Hip-Hop/Rap",
                  linkItune: "./"
              }
          };
      },
      components: {
          ArtistInfo,
          Tracks,
          AlbumOfArtist
      }

  };
</script>
<style src="./../css/Artist.css"></style>
