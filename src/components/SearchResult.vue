<template>
  <div class="mainContainer container">
    <h2><a>Found Tracks</a></h2>
    <Tracks class="listTitle" :trackList="this.trackResults.results"></Tracks>
    <ArtistList :artistList="this.artistsResults.results" :title="'Found Artists'" />
    <AlbumOfArtist :albumList="this.albumResults.results" :title="'Found Albums'" />
  </div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import Tracks from "./Album/Tracks.vue";
import AlbumOfArtist from "./Artist/AlbumOfArtist";
import ArtistList from "./Artist/ArtistList";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
    data() {
        return {
        trackResults: null,
        albumResults: null,
        artistsResults: true
        };
    },
    created() {
        this.search(this.$route.params.query);
    },
    methods: {
        async search(query)
        {
            this.trackResults = await apiEngine.searchTracks(query, 6);
            this.albumResults = await apiEngine.searchAlbum(query, 6);
            this.artistsResults = await apiEngine.searchArtiste(query, 6);
        }
    },
    components: {
        Tracks,
        ArtistList,
        AlbumOfArtist
    }
};
</script>
