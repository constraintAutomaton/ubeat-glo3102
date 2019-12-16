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
import { getUserById } from "../lib/util/utilUser";
import ApiInterface from "./../lib/ApiInterface";
import UserList from "./Users/UsersList";
import SearchBar from "./SearchBar";

const isSecure = true;
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
			let currentUser = await getUserById(this.$cookie.get("id"), this.$cookie.get("token"));			
			this.usersResults = (await apiEngine.searchUsers(this.$route.params.query, 200, this.$cookie.get("token")));
			this.usersResults.forEach(user => {
				user.currentFollowing = false;
				currentUser.following.forEach(follow => {
				if (follow.id === user.id) user.currentFollowing = true;
				});
			});
			this.loading = false;
		}
	}
}
</script>