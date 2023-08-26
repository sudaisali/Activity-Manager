<script setup>
import Todo from './components/Todo.vue';
import AddTodo from './components/AddTodo.vue';


</script>

<template>
<div id="app">
  <div class="container">
  <AddTodo/>
  <Todo/>
</div>
</div>

  
 

  
</template>

<style>
body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background-color: antiquewhite;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>