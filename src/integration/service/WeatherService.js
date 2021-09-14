import api from "@/integration/api"

const AMOUNT_OF_RAIN_URL = "/weather34/rain";

export default {
	fetchAmountOfRainfallByDay() {
		return api.get(AMOUNT_OF_RAIN_URL);
	}
}
