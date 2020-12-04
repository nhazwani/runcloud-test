<template>
	<div id="app">
		<Header />
		<Contents />
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Contents from './components/Contents.vue'

	export default {
		name: 'App',
		components: {
			Header,
			Contents
		}
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
	
	body {
		font-family: 'Nunito Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: hsl(207, 26%, 17%);
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		overflow: hidden;
		font-size: 14px;
		color: hsl(0, 0%, 100%);
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}

	::-webkit-scrollbar {
		width: 6px;
	}
	
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);	
	}
	
	::-webkit-scrollbar-thumb {
		background-color: hsl(209, 23%, 22%);
		outline: 1px solid hsl(207, 26%, 17%);
		border-radius: 5px;
	}

	#app {
		text-align: center;
		height: 100%;
	}

	#country-widget {
		overflow: hidden;
		margin: 0 auto;
		text-align: left;
	}

	.widget {
		cursor: pointer;
		float: left;
		font-size: 14px;
		width: calc(19.99999% - 48px);
		height: 250px;
		background-color: hsl(209, 23%, 22%);
		border-radius: 5px;
		margin: 24px;
		box-shadow:0 0 3px #222;
	}

	.widget:hover {
		box-shadow:0 0 7px #111;
	}

	.widget > div {
		width: 100%;
		height: 110px;
	}

	.widget > div:last-child {
		width: calc(100% - 32px);
		height: calc(100% - 110px);
		padding: 16px;
		padding-bottom: 0;
		padding-top: 0;
		text-align: left;		
	}

	.widget > div:last-child > h5 {
		height: 35px;
		padding-top: 12px;
	}

	.widget > div:last-child > div {
		font-size: 12px;
		height: 25px;
		font-weight: 600;
	}

	.widget > div:last-child > div > span {
		font-weight: 300;
	}	

	.widget > div > img {
		width: 100%;
        height: 100%;
        display: block;
		border-radius: 5px 5px 0 0;
	}

	.divs, #borderDiv > div {
		background-color: hsl(209, 23%, 22%);
		color: hsl(0, 0%, 100%);
		padding: 4px 18px;
		border-radius: 3px;
		width: 40px !important;
		text-align: center;
		font-size: 14px;
		display: inline-block;
		box-shadow:0 0 3px #222;
		margin: 0 8px 8px 8px;
		float: none !important;
	}

	@media only screen and (max-width: 768px) {
		.widget {
			width: calc(33.33333% - 24px);
			margin: 12px;
		}

		.widget > div:last-child > div {
			font-size: 12px;
		}
	}

	@media only screen and (max-width: 500px) {

		#country-widget {
			display: block;
			margin: 0 auto;
			text-align: center;
		}

		.widget {
			width: calc(100% - 96px);
			float: none;
			height: 300px;
			display: block;
			text-align: center;
			margin: 18px 48px;
		}

		.widget > div {
			width: 100%;
			height: 130px;
		}

		.widget > div:last-child {
			width: calc(100% - 32px);
			height: calc(100% - 130px);
			padding: 16px;
			text-align: left;
		}

		.widget > div:last-child > h5 {
			font-size: 14px;
			height: auto;
			padding: 8px 0;
		}

		.widget > div:last-child > div {
			font-size: 12px;
			height: 25px;
			font-weight: 600;
		}
	}
</style>