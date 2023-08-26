import { createStore } from 'vuex'; // Import createStore from 'vuex'
import todos from './modules/todos';

// Create the Vuex store
const store = createStore({
  modules: {
    todos
  }
});

export default store; // Export the store

