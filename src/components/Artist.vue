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

    <section>
      <h3 class="listTitle">Albums</h3>
      <ul class="listAlbum flexContent row">
        <li class="col s6 m4 l2">
          <a>
            <img
              src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg"
            />
          </a>
          <h3 class="albumTitle">
            <a>Pieces of a Man</a>
          </h3>
          <p>2018</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img
              src="https://i1.sndcdn.com/artworks-3e86379b-ae93-443b-887a-52b0a8b05a93-0-t500x500.jpg"
            />
          </a>
          <h3 class="albumTitle">
            <a>Or More The Anxious</a>
          </h3>
          <p>2017</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img
              src="https://i1.sndcdn.com/artworks-f12bb816-104e-4655-bc63-6c84c373a7a2-0-t500x500.jpg"
            />
          </a>
          <h3 class="albumTitle">
            <a>The Healing Component</a>
          </h3>
          <p>2016</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img
              src="https://i1.sndcdn.com/artworks-000127868569-v269fn-t500x500.jpg"
            />
          </a>
          <h3 class="albumTitle">
            <a>Wave[s]</a>
          </h3>
          <p>2015</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img
              src="https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg"
            />
          </a>
          <h3 class="albumTitle">
            <a>The Water (S)</a>
          </h3>
          <p>2014</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import ArtistInfo from "./Artist/ArtistInfo.vue";
  import Tracks from "./Album/Tracks";
  export default {
      data() {
          return {
              artistInfo: {
                  artistName: "bar",
                  imgArtist: "./../../assets/logo.png",
                  genre: "bar",
                  linkItune: "./"
              }
          };
      },
      components: {
          ArtistInfo,
          Tracks
      }

  };
</script>
<style src="./../css/Artist.css"></style>
