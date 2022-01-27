import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            count: 0,
            userInput: '',
            checkboxInput: false,
            switchState: true
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        userInput(state, payload) {
            state.userInput = payload
        }
    }
})

export default store
