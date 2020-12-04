<template>
	<div class="main-container">
		<div class="list-container" v-if="isHidden">
			<div>
				<div>
					<font-awesome-icon :icon="['fas', 'search']" class="input-icon" />
					<input type="text" v-model="searchQuery" placeholder="Search for a country...">
				</div>
				<div>
					<select name="region" id="region" value="" v-model="selectedRegion">
						<option value="" disabled selected>Filter by region</option>
						<option v-for="item in uniqueList" v-bind:key="item.name" :value="item">{{ item }}</option>
					</select>
				</div>
			</div>
			<div id="country-widget" >
				<div class="widget" v-for="item in resultQuery" v-bind:key="item.name" v-bind:id="item.name" v-on:click="isHidden = !isHidden | showDetails(item)">
					<div>
						<img v-bind:src="item.flag" />
					</div>
					<div>
						<h5>{{ item.name }}</h5>
						<div>Population: <span>{{ item.population }}</span></div>
						<div>Region: <span>{{ item.region }}</span></div>
						<div>Capital: <span>{{ item.capital }}</span></div>
					</div> 
				</div>
			</div>
		</div>
		<div class="details-container" v-if="!isHidden">
			<div>
				<div class="btn" v-on:click="isHidden = true">
					<font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
					<span> Back</span>
				</div>
			</div>
			<div id="detail-widget" >
				<div class="flagDiv">
					<img id="flag" />
				</div>
				<div class="detailsDiv">
					<h3 id="countryName"></h3>
					<div>
						<div>
							<div>Native Name: <span id="native"></span></div>
							<div>Population: <span id="population"></span></div>
							<div>Region: <span id="region"></span></div>
							<div>Sub Region: <span id="subregion"></span></div>
							<div>Capital: <span id="capital"></span></div>
						</div>
						<div>
							<div>Top Level Domain: <span id="tld"></span></div>
							<div>Currencies: <span id="currencies"></span></div>
							<div>Languages: 
								<span id="lang"></span>							
							</div>
						</div>
					</div>
					<div id="borderDiv">
						<span>Border Countries:</span>					
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const axios = require('axios');
	export default {
		name: 'Contents',
		data() {
			return {
				searchQuery: null,
				selectedRegion: '',
				isHidden: true,
				info: []
			}
		},
		mounted() {
			axios
				.get('https://restcountries.eu/rest/v2/all')				
				.then(response => (this.info = response.data))
		},
		computed: {
			resultQuery(){
				let filterRegion = this.selectedRegion;
				if (this.searchQuery) {
					return this.info
					.filter((item) => {
						return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
					})
				} 
				else if (filterRegion) {
					return this.info
					.filter((item)=>{
						return filterRegion.toLowerCase().split(' ').every(v => item.region.toLowerCase().includes(v))
					})
				} else {
					return this.info;
				}
			},
			uniqueList() {
				return [...new Set(this.info.map(({ region }) => region))]
			}
		},
		methods: {
			showDetails: function(elem) {	
						
				setTimeout(function(){	
					document.getElementById("flag").src = elem.flag;
					document.getElementById("countryName").innerHTML = elem.name;
					document.getElementById("native").innerHTML = elem.nativeName;
					document.getElementById("population").innerHTML = elem.population;
					document.getElementById("region").innerHTML = elem.region;
					document.getElementById("subregion").innerHTML = elem.subregion;
					document.getElementById("capital").innerHTML = elem.capital;
					document.getElementById("tld").innerHTML = elem.topLevelDomain.toString();
					document.getElementById("currencies").innerHTML = elem.currencies[0].name;
					
					for (var i=0; i<elem.languages.length; i++) {
						document.getElementById("lang").innerHTML += elem.languages[i].name + ", ";
					}
					
					let parent = document.getElementById("borderDiv");
					for (var j=0; j<elem.borders.length; j++) {
						let child = document.createElement("div");
						child.className = 'divs';
						child.innerHTML = elem.borders[j];
						parent.appendChild(child);
					}
				}, 800);
			}
		}
	}
</script>

<style scoped>
	input, select {
		background-color: hsl(209, 23%, 22%);
		border: none;
		border-radius: 3px;
		padding: 12px 16px;
		color: hsl(0, 0%, 100%);
	}

	input {
		padding-left: 42px;
	}

	input::placeholder {
		color: hsl(0, 0%, 100%);
	}

	input[type=text]:focus, select:focus {
		outline: none;
	}

	select > option:first {
		display: none;
	}

	.main-container {
		height: calc(100% - 111px);		
		width: calc(100% - 96px);
		padding: 28px 48px;
		overflow: auto;
		position: absolute;
		top: 55px;
		left: 0;
	}

	.list-container > div:first-child, .details-container > div:first-child {
		margin-bottom: 28px;
		overflow: auto;
	}

	.list-container > div:first-child > div:first-child {
		float: left;
	}

	.list-container > div:first-child > div:last-child {
		float: right;
	}

	#detail-widget {
		overflow: hidden;
	}

	#detail-widget > div:first-child {
		width: 40%;
		float: left;
	}

	.flagDiv, .flagDiv > img {
		width: 100%;
		height: 100%;
	}

	.detailsDiv {
		float: left;
		width: calc(60% - 48px);
		text-align: left;
		margin-left: 48px;
		overflow: hidden;
	}

	.detailsDiv > div {
		overflow: hidden;
	}

	.detailsDiv > div > div {
		width: 50%;
		float: left;
	}

	.detailsDiv > div > div > div {
		font-weight: 600;
	}

	.detailsDiv > div > div > div > span {
		font-weight: 300;
	}

	.detailsDiv > div:first-of-type > div > div {
		padding-bottom: 4px;
	}

	.detailsDiv > div:last-of-type {
		width: 100%;
		padding-top: 48px;
	}

	#countryName {
		font-size: 2rem;
		margin: 42px 0;
	}

	.input-icon {
		position: absolute;
		margin-top: 12px;
		margin-left: 16px;
	}

	.btn {
		background-color: hsl(209, 23%, 22%);
		color: hsl(0, 0%, 100%);
		padding: 6px 18px;
		border-radius: 3px;
		cursor: pointer;
		text-align: center;
		font-size: 14px;
		float: left;
	}

	.btn > span {
		margin-left: 8px;
	}

	@media only screen and (max-width: 768px) {
		.main-container {
			font-size: 12px;
		}

		#countryName {
			font-size: 1.2rem;
			margin: 24px 0;
		}

		.detailsDiv > div:last-of-type {
			padding-top: 24px;
		}
	}

	@media only screen and (max-width: 500px) {
		input, select {
			padding: 8px 12px;
		}

		input {
			padding-left: 42px;
		}

		.main-container {
			height: calc(100% - 111px);		
			width: calc(100% - 56px);
			padding: 28px;
		}

		.list-container > div[data-v-5a705e4a]:first-child, .details-container > div[data-v-5a705e4a]:first-child {
			margin-bottom: 16px;
		}

		.list-container > div:first-child > div:first-child {
			float: none;
			width: 100%;
			margin-bottom: 12px;
		}

		.list-container > div:first-child > div:first-child > input {
			width: calc(100% - 58px);
		}

		.list-container > div:first-child > div:last-child {
			float: none;
			text-align: left;
		}

		#detail-widget > div:first-child, .detailsDiv {
			width: 100%;
			float: none;
		}

		.flagDiv {
			width: 100%;
			height: 200px;
		}

		.detailsDiv {
			width: 100%;
			margin-left: 0;
			font-size: 14px;
		}

		.detailsDiv > div > div {
			width: 100%;
			float: none;
		}

		#countryName {
			margin: 24px 0;
		}

		.detailsDiv > div > div:nth-child(1) {
			margin-bottom: 24px;
		}
	}

</style>