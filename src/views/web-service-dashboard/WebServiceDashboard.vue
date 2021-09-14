<template>
	<div id="wsdContainer" class="container">
		<h1>{{title}}</h1>
		<div class="d-flex justify-content-around mt-5">
			<div class="flex-column">
				<pressure-selector/>
			</div>
			<div class="flex-column">
				<chance-of-rain-chart/>
			</div>
		</div>
		
		<div class="d-flex justify-content-around mt-5">
			<div class="flex-column">
				<temperature-selector/>
			</div>
			<div class="flex-column">
				<amount-of-rainfall-chart/>
			</div>
		</div>
	</div>
</template>

<script>
	import PressureSelector from "./components/PressureSelector";
	import TemperatureSelector from "./components/TemperatureSelector";
	import ChanceOfRainChart from "./components/ChanceOfRainChart";
	import AmountOfRainfallChart from "./components/AmountOfRainfallChart";
	
	export default {
		name: "web-service-dashboard",
		components: {
			PressureSelector,
			TemperatureSelector,
			ChanceOfRainChart,
			AmountOfRainfallChart
		},
		data() {
			return {
				title: "Weather service dashboard"
			}
		}
	}
</script>
