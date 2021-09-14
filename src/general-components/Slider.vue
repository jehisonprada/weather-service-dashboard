<template>
	<div>
		<label>
			Label
			<input type="range" :min="min" :max="max" :value="value" @input="$emit('input', $event.target.value)">
		</label>
	</div>
</template>

<script>
	export default {
		name: "slider",
		props: {
			value: String,
			min: {
				type: Number,
				required: true
			},
			max: {
				type: Number,
				required: true
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
