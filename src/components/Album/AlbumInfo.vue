<template>
  <section class="flexContent">
    <div class="albumImage">
      <img
        class="responsiveImage"
        v-bind:src="{image}"
        alt="Album Image"
      />
    </div>
    <div class="infoAlbum">
      <h1>Camelot</h1>
      <p class>
        <span>Artist:</span> NLE Choppa
      </p>
      <p class>
        <span>Genre:</span> Hip-Hop/Rap
      </p>
      <p class>
        <span>Release:</span> 2019
      </p>
      <p class>
        <span>Number of tracks:</span> 4
      </p>
      <div class="badgeContainer">
        <a
          href="https://geo.music.apple.com/ca/album/camelot-single/1478620794?mt=1&app=music"
          target="_blank"
          rel="noopener"
        >
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
    image: {
      type: String,
      default:"./../../assets/logo.png"
    },
  }
};
</script>
