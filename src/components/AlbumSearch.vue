<template>
	<div class="mainContainer container">
		<SearchBar :page="'/albumSearch'" />
		<div v-if="loading">
			Loading...
		</div>
		<AlbumOfArtist v-else :pagination="true" :itemPerPage="12" :albumList="albumsResults" />
	</div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import AlbumOfArtist from "./Artist/AlbumOfArtist";
import SearchBar from "./SearchBar";

const isSecure = true;
const apiEngine = new ApiInterface(isSecure);

export default {
	components: { 
		AlbumOfArtist,
		SearchBar 
	},
	data() {
		return {
			albumsResults: [],
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
			this.albumsResults = (await apiEngine.searchAlbum(this.$route.params.query, 200, this.$cookie.get("token"))).results;
			this.loading = false;
		}
	}
}
</script>