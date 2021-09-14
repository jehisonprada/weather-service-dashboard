<template>
	<card :title="pressureCardTitle">
		<div class="pressure-slider-container">
			<slider :min="minPressure" :max="maxPressure" v-model="selectedPressure"/>
			<div>
				<p>Selected pressure: {{selectedPressure}}</p>
			</div>
		</div>
	</card>
</template>

<script>
	import {Card, Slider} from "@/general-components/"
	export default {
		name: "pressure-selector",
		components: {
			Card,
			Slider
		},
		data() {
			return {
				minPressure: 970,
				maxPressure: 1030,
				pressureCardTitle: "Pressure Selector",
			}
		},
		computed: {
			selectedPressure: {
				get() {
					return this.$store.state.weatherParameters.pressure;
				},
				set(value) {
					this.$store.commit("weatherParameters/SET_PRESSURE", value)
				}
			}
		}
	}
</script>

<style scoped>
	.pressure-slider-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
