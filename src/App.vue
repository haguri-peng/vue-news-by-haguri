<template>
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
		<spinner :loading="loadingStatus"></spinner>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';

export default {
	components: {
		ToolBar,
		Spinner
	},
	data() {
		return {
			loadingStatus: false
		}
	},
	methods: {
		startSpinner() {
			// console.log('startSpinner');
			this.loadingStatus = true;
		},
		endSpinner() {
			// console.log('endSpinner');
			setTimeout(() => {
				this.loadingStatus = false;
			}, 300);
		}
	},
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	}
}
</script>

<style>
	body {
		padding: 0;
		margin: 0;
	}
	a {
		color: navy;
		text-decoration: none;
	}
	a:hover {
		color: #42b883;
		text-decoration: underline;
	}
	a.router-link-exact-active {
		text-decoration: underline;
	}

	/* Router Transition */
	.page-enter-active, .page-leave-active {
		transition: opacity .5s;
	}
	.page-enter, .page-leave-to {
		opacity: 0;
	}
</style>