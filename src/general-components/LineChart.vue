<template>
	<div :id="chartId">
	</div>
</template>

<script>
	import * as d3 from "d3";
	
	export default {
		name: "line-chart",
		props: {
			chartId: {
				type: String,
				required: true
			},
			data: {
				type: Array,
				required: true
			},
			dataDomainPropertyName: {
				type: String,
				required: true
			},
			dataLinesPropertyConfig: {
				type: Array,
				required: true
			},
			maxRange: {
				type: Number,
				default: 100
			},
			width: {
				type: Number,
				default: 300
			},
			height: {
				type: Number,
				default: 300
			},
			xLabel: {
				type: String,
				required: true
			},
			yLabel: {
				type: String,
				required: true
			}
		},
		mounted() {
			let svg;
			let g;
			let xScale;
			let yScale;
			
			const margins= {horizontal: 50, vertical: 50};
			
			const vm = this;
			
			if(this.data && this.data.length > 0) {
				svg = d3
					.select("#" + this.chartId)
					.append("svg")
					.attr("width", this.width)
					.attr("height", this.height);
				
				g = svg.append("g");
				
				xScale = d3.scaleBand()
					.domain(this.data.map(d => d[this.dataDomainPropertyName]))
					.rangeRound([0, this.width - margins.horizontal])
					.padding(0.1);
				
				yScale = d3.scaleLinear()
					.domain([this.maxRange, 0])
					.range([0, this.height - margins.vertical]);
				
				g.append("g")
					.attr("transform", "translate(" + margins.horizontal/2 + "," + (this.height - (margins.vertical/2)) + ")")
					.call(d3.axisBottom(xScale))
					.append("text")
					.text(this.yLabel)
					.attr("text-anchor", "start")
					.attr("stroke", "green")
					.attr("x", -(margins.horizontal/2))
					.attr("y", (this.height - (margins.vertical - 15)) * -1);
				
				
				g.append("g")
					.attr("transform", "translate(" + margins.horizontal/2 + "," + margins.vertical/2 + ")")
					.call(d3.axisLeft(yScale))
					.append("text")
					.attr("text-anchor", "start")
					.attr("stroke", "green")
					.text(this.xLabel)
					.attr("x", this.width - ((margins.vertical)))
					.attr("y", this.height - (margins.vertical + 15));

				this.dataLinesPropertyConfig.forEach(dataLinesProperty => {
					svg.append("path")
						.datum(this.data)
						.attr("fill", "none")
						.attr("stroke", dataLinesProperty.color ? dataLinesProperty.color : "#"+((1<<24)*Math.random()|0).toString(16))
						.attr("stroke-width", 1.5)
						.attr("d", d3.line()
							.x(d => margins.horizontal + xScale(d[vm.dataDomainPropertyName]))
							.y(d => yScale(d[dataLinesProperty.name]) + (margins.vertical/2))
						);
				});
			}
		}
	}
</script>
