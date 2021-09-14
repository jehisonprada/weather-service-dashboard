import WeatherService from "@/integration/service/WeatherService.js";

export const namespaced = true;

export const state = {
	amountOfRainfallByDay: undefined
};

export const mutations = {
	SET_AMOUNT_OF_RAINFALL_BY_DAY(state, amountOfRainfallByDay) {
		state.amountOfRainfallByDay = amountOfRainfallByDay;
	}
};

export const actions = {
	fetchAmountOfRainfallByDay({commit}) {
		WeatherService.fetchAmountOfRainfallByDay().then(response => {
			let amountOfRainfallResponse = response.data;
			commit("SET_AMOUNT_OF_RAINFALL_BY_DAY", amountOfRainfallResponse[0]);
		}).catch(error => {
			let errorMessage = error.response ? error.response : "There was an error fetching the amount of rainfall by day from the server";
			alert(errorMessage);
		});
	}
};
