import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//modules
import * as weatherParameters from "./modules/weatherParameters.js";
import * as rain from "./modules/rain.js";


export default new Vuex.Store({
  modules: {
    weatherParameters,
    rain
  }
})
