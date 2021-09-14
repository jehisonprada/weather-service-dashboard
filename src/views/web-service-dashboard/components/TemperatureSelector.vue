<template>
	<card :title="temperatureCardTitle">
		<div class="temperature-slider-container">
			<slider :min="minTemperature" :max="maxTemperature" v-model="selectedTemperature" />
			<div>
				<p>Selected temperature: {{selectedTemperature}}</p>
			</div>
		</div>
	</card>
</template>

<script>
	import {Card, Slider} from "@/general-components"
	export default {
		name: "temperature-selector",
		components: {
			Card,
			Slider
		},
		data() {
			return {
				minTemperature: 10,
				maxTemperature: 35,
				temperatureCardTitle: "Temperature Selector"
			}
		},
		computed: {
			selectedTemperature: {
				get() {
					return this.$store.state.weatherParameters.temperature;
				},
				set(value) {
					this.$store.commit("weatherParameters/SET_TEMPERATURE", value)
				}
			}
		}
	}
</script>

<style scoped>
	.temperature-slider-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
