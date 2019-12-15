<template>
	<div class="mainContainer container">
		<SearchBar :page="'/userSearch'" />
		<div v-if="loading">
			Loading...
		</div>
		<UserList v-else :pagination="true" :itemPerPage="12" :userList="usersResults" />
	</div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import UserList from "./Users/UsersList";
import SearchBar from "./SearchBar";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export default {
	components: { 
		UserList,
		SearchBar 
	},
	data() {
		return {
			usersResults: [],
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
			this.usersResults = (await apiEngine.searchUsers(this.$route.params.query, 10));
			this.loading = false;
		}
	}
}
</script>