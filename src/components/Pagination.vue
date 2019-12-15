<template>
	<div>
		<ul v-if="pageCount > 1" class="pagination">
			<li class="waves-effect disabled" ref="prev" @click="prevPage"><a><i class="material-icons">chevron_left</i></a></li>            
			<li v-for="n in pageCount" :key="n" :class="{ active: n==1 }" ref="pageLink" class="waves-effect" @click="pageChange" :data-id="n">
					<a>{{n}}</a>
			</li>
			<li class="waves-effect" ref="next" @click="nextPage"><a><i class="material-icons">chevron_right</i></a></li>
		</ul>
	</div>
</template>

<script>

export default {
	props: {
		pageCount: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			currentPage: 1
		}
	},
	methods: {
		pageChange(event) {
			if(!event.currentTarget.classList.contains("active")) {
				this.$emit("pageChange", event.currentTarget.dataset.id);
			}
		},
		nextPage() {
			if(!this.$refs.next.classList.contains("disabled")) {
				this.$emit("pageChange", parseInt(this.currentPage) + 1);
			}
		},
		prevPage() {
			if(!this.$refs.prev.classList.contains("disabled")) {
				this.$emit("pageChange", this.currentPage - 1);
			}
		},
		setCurrentPage(pageNumber) {
			this.$refs.pageLink.forEach(pageLink => {
				if(pageLink.dataset.id == pageNumber)
					pageLink.classList.add("active");
				else
					pageLink.classList.remove("active");
			});

			if(pageNumber > 1)
				this.$refs.prev.classList.remove("disabled");
			else
				this.$refs.prev.classList.add("disabled");

			if(pageNumber < this.pageCount)
				this.$refs.next.classList.remove("disabled");
			else
				this.$refs.next.classList.add("disabled");

			this.currentPage = pageNumber;
		}
	}
}
</script>

<style scoped>
.pagination {
	text-align: right;
}

.pagination .active {
	background-color: var(--darkGrey);
}
</style>