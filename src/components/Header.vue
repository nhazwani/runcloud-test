<template>
	<header id="header" class="header">
		<h1>Where in the world?</h1>
		<div class="btn-mode">
			<font-awesome-icon :icon="['fas', 'moon']" class="icon alt" />
			<span> Dark Mode</span>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.header {
		height: 55px;
		width: calc(100% - 96px);
		display: flex;
		background-color: hsl(209, 23%, 22%);
		padding: 0 48px;
		overflow: hidden;
		line-height: 55px;
		box-shadow: 0px 5px 6px -6px #222;
	}

	.header > h1 {
		font-size: 1rem;
		margin: 0;
	}

	.btn-mode {
		position: absolute;
		right: 48px;
		cursor: pointer;
	}
</style>