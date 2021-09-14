<template>
	<card :title="chartTitle">
		<div v-if="amountOfRainfallByDay">
			<bar-chart
				chartId="amountOfRainfallByDayChartContainer"
				:data="amountOfRainfallByDay.days"
				x-label="Days"
				y-label="1/m^2" dataXPropertyName="day" dataYPropertyName="amount"></bar-chart>
		</div>
	</card>
</template>

<script>
	import {Card, BarChart} from "@/general-components/"
	// mapState and mapActions is a shortcut to this.$store.state and this.$store.dispatch.
	// I am just using this here because I want you to know this is another way to do it
	import {mapState, mapActions} from "vuex"
	
	export default {
		name: "amount-of-rainfall-chart",
		components: {
			Card,
			BarChart
		},
		data () {
			return {
				chartTitle: "Amount of Rainfall"
			}
		},
		computed: {
			...mapState("rain", ["amountOfRainfallByDay"])
		},
		methods: {
			...mapActions("rain", ["fetchAmountOfRainfallByDay"])
		},
		created() {
			this.fetchAmountOfRainfallByDay();
		}
	}
</script>
