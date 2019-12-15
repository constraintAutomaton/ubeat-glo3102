<template>
	<div class="mainContainer container">
		<SearchBar :page="'/trackSearch'" />
		<div v-if="loading">
			Loading...
		</div>
		<Tracks v-else :pagination="true" :itemPerPage="12" :trackList="trackResults" :title="'Found Tracks'" />
	</div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import Tracks from "./Album/Tracks";
import SearchBar from "./SearchBar";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
	components: { 
		Tracks,
		SearchBar 
	},
	data() {
		return {
			trackResults: [],
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
			this.trackResults = (await apiEngine.searchTracks(this.$route.params.query, 10)).results;
			this.loading = false;
		}
	}
}
</script>