<template>
  <section class="flexContent">
    <div class="albumImage">
      <img class="responsiveImage" v-bind:src="image" alt="Album Image" />
    </div>
    <div class="infoAlbum">
      <h1>{{ambumName}}</h1>
      <p class>
        <span>Artist:</span>
        {{artiste}}
      </p>
      <p class>
        <span>Genre:</span>
        {{genre}}
      </p>
      <p class>
        <span>Release:</span>
        {{release}}
      </p>
      <p class>
        <span>Number of tracks:</span>
        {{numberOfTrack}}
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ambumName: {
      type: String,
      default: "bar"
    },
    image: {
      type: String,
      default: ""
    },
    artiste: {
      type: String,
      default: "foo"
    },
    genre: {
      type: String,
      default: "bar"
    },
    release: {
      type: Number,
      default: 1984
    },
    numberOfTrack: {
      type: Number,
      default: 2501
    },
    linkItune: {
      type: String,
      default: "./"
    }
  }
};
</script>
