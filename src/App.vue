<script setup>
import AppHeader from "./components/AppHeader.vue";
import { ref } from "vue";
import { Todo } from "./models/Todo";
import TodosList from "./components/TodosList.vue";

const todo = ref("");
const todos = ref([]);

function resetTodoTitleRef() {
  todo.value = "";
}

function addTodo() {
  const newTodo = new Todo({ title: todo.value });
  todos.value.push(newTodo);
  resetTodoTitleRef();
}

function removeTodo(todoIndex) {
  todos.value.splice(todoIndex, 1);
}

function removeAll() {
  todos.value = [];
}

function toggleDone(todo, event) {
  if (event.target !== event.currentTarget) return;
  todo.done = !todo.done;
}

function markAllDone() {
  todos.value.forEach((todo) => (todo.done = true));
}
</script>

<template>
  <AppHeader />
  <form @submit.prevent="addTodo">
    <label for="todo-title">Todo Title</label>
    <input
      name="title"
      id="todo-title"
      placeholder="Enter todo title"
      autocomplete="off"
      v-model="todo"
      required
    />
    <button>Add Todo</button>
  </form>
  <TodosList
    :todos="todos"
    @mark-all-done="markAllDone"
    @toggle-done="toggleDone"
    @remove-todo="removeTodo"
    @remove-all="removeAll"
  />
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo-wrapper {
  position: relative;
  width: 200px;
  margin: 0 auto 10px auto;
}

.logo-wrapper img {
  user-select: none;
}

.logo {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 125px;
  left: 53px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 34%, 1);
  transition: 0.4s;
}

form {
  margin-top: 50px;
}

label {
  display: flex;
  font-weight: 500;
  margin-bottom: 7px;
}

button {
  display: inline-block;
  border: none;
  padding: 10px 30px;
  margin: 0;
  border-radius: 6px;
  text-decoration: none;
  background: hsla(160, 100%, 30%, 1);
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-weight: 600;
}

button:hover,
button:focus {
  background: hsla(160, 100%, 28%, 1);
}

button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button:active {
  transform: scale(0.99);
}

input {
  border: 1px solid var(--color-border);
  background: var(--color-background);
  padding: 10px;
  border-radius: 6px;
  color: var(--color-text);
  margin-right: 14px;
  width: 310px;
}

input::placeholder {
  color: var(--color-text);
  opacity: 0.4;
}

input:focus {
  background: var(--color-background-soft);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 768px) {
  body {
    display: flex;
    justify-content: center;
  }

  header {
    display: flex;
    place-items: center;
  }

  .logo-wrapper {
    position: relative;
    width: 200px;
    margin: 0;
  }
}

@media (max-width: 767px) {
  form button {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }

  form input {
    display: flex;
    width: 100%;
  }
}
</style>
