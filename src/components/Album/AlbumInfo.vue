<template>
  <section class="flexContent">
    <div class="albumImage">
      <img class="responsiveImage" :src="albumImage" alt="Album Image" />
    </div>
    <div class="infoAlbum">
      <h1>{{ albumInfo.collectionName }}</h1>
      <p class>
        <span>Artist: </span>
        <a :href="`./#/artist/${albumInfo.artistId}`">
          {{ albumInfo.artistName }}
        </a>
      </p>
      <p class>
        <span>Genre:</span>
        {{ albumInfo.primaryGenreName }}
      </p>
      <p class>
        <span>Release:</span>
        {{ releaseDate }}
      </p>
      <p class>
        <span>Number of tracks:</span>
        {{ albumInfo.trackCount }}
      </p>
      <div class="badgeContainer">
        <a :href="albumInfo.collectionViewUrl" target="_blank" rel="noopener">
          <img
            class="itunesBadge"
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
            alt="Listen on iTunes"
          />
        </a>
      </div>
      <a class="waves-effect waves-light btn" @click="openDialog"><i class="material-icons right">playlist_add</i>Add to playlist</a>
<!--      <div class="AlbumToPlaylist">-->
<!--        <a class="waves-effect waves-light addPlaylist" @click="openDialog">-->
<!--          <i class="material-icons right">playlist_add</i>Add to playlist-->
<!--        </a>-->
<!--      </div>-->
    </div>
    <AddToPlaylistsDialog
      ref="addToPlaylistDialog"
      :tracks="albumInfo.trackList"
    />
  </section>
</template>
<style src="./../../css/AlbumInfo.css"></style>

<script>
import AddToPlaylistsDialog from "../Playlist/AddToPlaylistsDialog.vue";

export default {
  components: {
    AddToPlaylistsDialog
  },
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
  },
  computed: {
    releaseDate() {
      return new Date(this.albumInfo.releaseDate).getFullYear();
    },
    albumImage() {
      if (this.albumInfo.highResImage != "") {
        return this.albumInfo.highResImage;
      } else {
        return this.albumInfo.artworkUrl100;
      }
    }
  },
  data() {
    return {
      tracksToAddPlaylist: []
    };
  },
  methods: {
    openDialog() {
      this.$refs.addToPlaylistDialog.open();
    }
  }
};
</script>
