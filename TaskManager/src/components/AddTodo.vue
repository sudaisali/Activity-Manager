<script>
import {
    mapActions
} from 'vuex';

export default {

    name: 'AddTodo',
    data() {
        title: ''
    },

    methods: {
        ...mapActions(['newTodo']),

        onSubmit(e) {
            e.preventDefault();

            if (!this.title) {  //validation
                this.showError = true;
                return;
            }

            this.showError = false;
            this.newTodo(this.title);
            this.title = '';
        }

    }
}
</script>

<template>
<h1>Add Todo</h1>

<div class="add">
    <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo" :class="{ 'error': showError && !title }">
        <input type="submit" value="submit">
    </form>
</div>
</template>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    /* Define border color here */
    cursor: pointer;
}

.error {
    border-color: red;
    /* This line is enough to change the border color */
}
</style>
