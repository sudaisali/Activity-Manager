import axios from 'axios';

const state = {
    todos: []
};
const getters = {

    allTodos: (state) => state.todos

};
const actions = {

    //fetch data from server
    async fetchTodos({ commit }) {

        const response = await axios.get('http://localhost:3000/todos');
        commit('setTodos', response.data);

    },
   

    //add new data to server
    async newTodo({ commit }, title) {

        const response = await axios.post('http://localhost:3000/todos', {
            title, isCompleted: false
        });

        commit('newTodo', response.data);

        //save updated object on local storage
        localStorage.setItem('todos', JSON.stringify(state.todos));

    },

    //delete data from server
    async deleteTodo({ commit }, id) {

        await axios.delete(`http://localhost:3000/todos/${id}`);
        commit('deleteTodo', id);

    },

    //update data on server
    async updateTodoTitle({ commit }, { todoId, newTitle }) {
        try {
            await axios.put(`http://localhost:3000/todos/${todoId}`, { title: newTitle });
            commit('updateTodoTitle', { todoId, newTitle });
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    },
   
    //update status on server
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(
          `http://localhost:3000/todos/${updTodo.id}`,
          updTodo
        );
    
        console.log(response.data);
    
        commit('updateTodo', response.data);
      }
  

    
    



};



const mutations = {

    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodoTitle(state, { todoId, newTitle }) {
        const todoToUpdate = state.todos.find(todo => todo.id === todoId);
        if (todoToUpdate) {
            todoToUpdate.title = newTitle;
        }
    },

   

    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
          state.todos.splice(index, 1, updTodo);
        }
      }
    
   
};


export default {
    state,
    getters,
    actions,
    mutations
}