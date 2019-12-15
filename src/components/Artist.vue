<template>
  <div id="artistPage" class="container">
    <div v-if="loading">Loading...</div>
    <div v-if="artistInfo">
      <ArtistInfo
        :artistName="artistInfo.artistName"
        :imgArtist="artistInfo.highResImage"
        :genre="artistInfo.primaryGenreName"
        :artistLink="artistInfo.artistLinkUrl"
      ></ArtistInfo>
      <h1 v-if="artistInfo.bio!==''">Biographie</h1>
      <p v-if="!loading">
        {{showAllBio===false?artistInfo.bio.substring(0,maxStringBio):artistInfo.bio}}
        <span
          v-if="artistInfo.bio.length>maxStringBio && showAllBio===false"
          v-on:click="showBio"
        >[...]</span>
      </p>
      <button v-on:click="showBio" v-if="artistInfo.bio.length>maxStringBio">Show more</button>
      <AlbumOfArtist title="Albums" :albumList="artistInfo.albums"></AlbumOfArtist>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import ArtistInfo from "./Artist/ArtistInfo.vue";
import AlbumOfArtist from "./Artist/AlbumOfArtist.vue";
import {
  getArtistById,
  getAlbumOfArtist,
  batchHighResAlbumImage
} from "../lib/util/utilArtist";

export default {
  data() {
    return {
      artistInfo: null,
      loading: true,
      error: null,
      maxStringBio: 1100,
      showAllBio: false,
    };
  },
  watch: {
    $route: "loadArtist"
  },
  mounted() {
    this.loadArtist();
  },
  methods: {
    async loadArtist() {
      this.error = this.artistInfo = null;
      this.loading = true;
      let albumNames = [];
      try {
        let artist = await getArtistById(this.$route.params.id, this.$cookie.get("token"));
        if(artist.ok) {
          let albumsResult = await getAlbumOfArtist(this.$route.params.id, this.$cookie.get("token"));
          if(albumsResult.ok) {         
            artist.albums = albumsResult;
            console.log(artist.albums);
            albumNames = artist.albums.map(el => {
              return el.collectionName;
            });
            this.artistInfo = artist;
            this.error = false;
          }
          else {
            this.error = albumsResult.message;
          }
        }
        else {
          this.error = artist.message;
        }
      } catch (error) {
        this.error = error;
      }
      this.loading = false;

      if(!this.error) {
        /*let arrayHighResImage = await batchHighResAlbumImage(albumNames, this.$cookie.get("token"));
        
        arrayHighResImage = arrayHighResImage.results;
        console.log(arrayHighResImage.length + " " + this.artistInfo.albums.length);
        for (let i in this.artistInfo.albums) {
          const image =
            arrayHighResImage[i].highResImage == ""
              ? this.artistInfo.albums[i].artworkUrl100
              : arrayHighResImage[i].highResImage;
          this.artistInfo.albums[i].artworkUrl100 = image;
        }*/
      }
    },
    showBio() {
      this.showAllBio = !this.showAllBio;
    }
  },
  components: {
    ArtistInfo,
    AlbumOfArtist
  }
};
</script>
<style src="./../css/Artist.css"></style>
