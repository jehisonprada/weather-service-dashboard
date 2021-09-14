export const namespaced = true;

export const state = {
	temperature: "21",
	pressure: "1022"
};

export const mutations = {
	SET_TEMPERATURE(state, temperature) {
		state.temperature = temperature;
	},
	SET_PRESSURE(state, pressure) {
		state.pressure = pressure;
	},
};
