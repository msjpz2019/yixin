import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		theme:'default-theme'
    },
    mutations: {
		setTheme(state, value){
			state.theme = value;
		}
    }
})

export default store