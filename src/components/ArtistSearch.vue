<template>
	<div class="mainContainer container">
		<ArtistList :pagination="true" :itemPerPage="12" :artistList="artistsResults" />
	</div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import ArtistList from "./Artist/ArtistList";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
	components: { ArtistList },
	data() {
		return {
			artistsResults: []
		}
	},
	created() {
		this.search(this.$route.params.query);
	},
	methods: {
		async search(query) {
			this.artistsResults = (await apiEngine.searchArtiste(query, 200)).results;
			this.artistsResults.forEach(artist => {
        artist.genre = artist.primaryGenreName;
        artist.artistImage = artist.highResImage;
      });
		}
	}
}
</script>