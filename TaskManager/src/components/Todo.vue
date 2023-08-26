<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    name: 'Todo',
    computed: mapGetters(['allTodos']),
    methods: {

        ...mapActions(['fetchTodos', "updateTodo",'deleteTodo', 'updateTodoTitle']),
     

        clickcheck(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updTodo);
    },

        // Display an alert with the todo's title
        async editTodoAlert(todo) {
            const editedTitle = window.prompt('Edit Todo', todo.title);
            if (editedTitle !== null) {
                await this.updateTodoTitle({
                    todoId: todo.id,
                    newTitle: editedTitle
                });
            }
        },

    //     toggleTodoStatus(todo) {
    //   // Call action to update the status
    //   this.updateTodoStatus({ todoId: todo.id, isCompleted: !todo.isCompleted });
    // }
  
      
    },
    mounted() {
        this.fetchTodos()

    }

}
</script>

<template>
<h1>Todo</h1>

<div class="todos">
    <div v-for="todo in allTodos" :key="todo.id" class="todo">
        <label class="checkbox-container">
          <input
          type="checkbox"
          v-model="todo.isCompleted"
          @change="clickcheck(todo)"
          class="cbox"
        />
        <span :class="{'completed': todo.completed}">
            {{ todo.title }}
        </span>
          
        </label>
        <i @click="editTodoAlert(todo)" class="fas fa-edit"></i>
        <i @click="deleteTodo(todo.id)" class="fa-solid fa-trash"></i>
    </div>

</div>
</template>

<style>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

i {
    position: absolute;
    bottom: 35px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}

.todo i+i {
    right: 30px;
}

.checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
}
.completed {
  text-decoration: line-through;
  color: green;
  background-color: black;
}
@media (max-width: 750px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
