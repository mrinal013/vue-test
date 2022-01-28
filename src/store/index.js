import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            userInput: '',
            checkboxInput: false,
            switchState: true,

            name: '',
            email: ''
        }
    },
    getters: {
      getName: state => {
          return state.name
      },
      getEmail: state => {
          return state.email
      }
    },
    mutations: {
        userInput(state, payload) {
            state.userInput = payload
        },
        userName(state, name) {
            state.name = name
        },
        userEmail(state, email) {
            state.email = email
        }
    },
    actions: {
        updateName(context, payload) {
            // console.log(payload);
            context.commit('userName', payload)
        },
        updateEmail(context, payload) {
            context.commit('userEmail', payload)
        }
    }
})

export default store
