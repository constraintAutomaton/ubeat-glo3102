<template>
  <section class="flexContent">
    <div class="albumImage">
      <img class="responsiveImage" v-bind:src="albumInfo.image" alt="Album Image" />
    </div>
    <div class="infoAlbum">
      <h1>{{albumInfo.albumName}}</h1>
      <p class>
        <span>Artist:</span>
        {{albumInfo.artist}}
      </p>
      <p class>
        <span>Genre:</span>
        {{albumInfo.genre}}
      </p>
      <p class>
        <span>Release:</span>
        {{albumInfo.release}}
      </p>
      <p class>
        <span>Number of tracks:</span>
        {{albumInfo.numberOfTrack}}
      </p>
      <div class="badgeContainer">
        <a v-bind:href="linkItune" target="_blank" rel="noopener">
          <img
            class="itunesBadge"
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
            alt="Listen on iTunes"
          />
        </a>
      </div>
      <div class="AlbumToPlaylist">
        <a class="waves-effect waves-light addPlaylist"><i class="material-icons right">playlist_add</i>Add to playlist</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    albumInfo: {
      type: Object,
      default: () => {
        return {
          albumName: "bar",
          artist: "foo",
          genre: "bar",
          release: 1984,
          numberOfTrack: 2501,
          linkItune: "./"
        };
      }
    }
  }
};
</script>
