<template>
	<div class="mainContainer container">
		<SearchBar :page="'/artistSearch'" />
		<div v-if="loading">
			Loading...
		</div>
		<ArtistList v-else :pagination="true" :itemPerPage="12" :artistList="artistsResults" />
	</div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import ArtistList from "./Artist/ArtistList";
import SearchBar from "./SearchBar";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
	components: { 
		ArtistList,
		SearchBar 
	},
	data() {
		return {
			artistsResults: [],
			loading: true,
			newSearch: this.$route.params.query
		}
	},
	watch: {
		$route: "search"
	},
	created() {
		this.search();
	},
	methods: {
		async search() {
			this.loading = true;
			this.artistsResults = (await apiEngine.searchArtiste(this.$route.params.query, 200)).results;
			this.artistsResults.forEach(artist => {
				artist.genre = artist.primaryGenreName;
				artist.artistImage = artist.highResImage;
			});
			this.loading = false;
		}
	}
}
</script>