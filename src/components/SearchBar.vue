<template>
	<div class="searchBar row">
		<input class="col s8" v-model="newSearch" type="text" placeholder="Search..." @keypress.enter="searchEnter" />
		<router-link :to="page + '/' + newSearch" ref="routerLink" class="waves-effect waves-light btn left"><i class="material-icons">search</i></router-link>
	</div>
</template>

<script>
export default {
	props: {
		page: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			newSearch: this.$route.params.query
		}
	},
	methods: {
		searchEnter() {
			this.$refs.routerLink.$el.click();
		}
	}
}
</script>

<style scoped>
.searchBar {
	display: flex;
	justify-content: center;
}

.searchBar .btn {
	color:#fff;
	background-color: var(--darkGrey);
}
</style>