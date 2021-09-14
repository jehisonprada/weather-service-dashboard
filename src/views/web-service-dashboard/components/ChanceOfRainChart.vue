<template>
	<card :title="chartTitle">
		<div v-if="amountOfRainfallByDay">
			<line-chart
				:key="pressure + temperature"
				chartId="chanceOfRainByDayChartContainer"
				:data.sync="chanceOfRainByDay"
				:dataDomainPropertyName="dataDomainPropertyName"
				:dataLinesPropertyConfig="dataLinesPropertyConfig"
				x-label="Days"
				y-label="%"></line-chart>
		</div>
	</card>
</template>

<script>
	import {Card, LineChart} from "@/general-components/"
	import {mapState} from "vuex";
	
	export default {
		name: "chance-of-rain-chart",
		components: {
			Card,
			LineChart
		},
		data () {
			return {
				chartTitle: "Chance Of Rain",
				dataDomainPropertyName: "day",
				dataLinesPropertyConfig: [
					{
						name: "lowerBound",
						color: "green"
					},
					{
						name: "mean",
						color: "blue"
					},
					{
						name: "upperBound",
						color: "red"
					}
				]
			}
		},
		computed: {
			...mapState("weatherParameters", ["pressure", "temperature"]),
			...mapState("rain", ["amountOfRainfallByDay"]),
			chanceOfRainByDay() {
				const vm = this;
				return this.amountOfRainfallByDay.days.map(day => {
					let chanceOfRainForDay = vm.chanceOfRain(vm.pressure, vm.temperature, day.amount);
					return {
						day: day.day,
						lowerBound: chanceOfRainForDay[0],
						mean: chanceOfRainForDay[1],
						upperBound: chanceOfRainForDay[2],
					}
				});
			}
		},
		methods: {
			chanceOfRain(pressure, temperature, amount) {
				const amountToCalculateScore = amount + 1;
				const pressureToCalculateScore = pressure - 929;
				const temperatureToCalculateScore = pressure - temperature-9;
				let score = Math.log(amountToCalculateScore) * Math.log(pressureToCalculateScore) * Math.log(temperatureToCalculateScore);
				let mean = Math.min(Math.max(score, 0), 100);
				let upperBound = Math.min(1.5 * mean, 100);
				let lowerBound = Math.max(0.5 * mean, 0);
				return [lowerBound, mean, upperBound];
			}
		}
	}
</script>
