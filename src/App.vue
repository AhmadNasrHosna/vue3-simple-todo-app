<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { Todo } from "./models/Todo";

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

function removeAllTodos() {
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
  <header>
    <div class="logo-wrapper">
      <img
        alt="Todo App Intro Illustration"
        class="intro-illustration"
        src="./assets/young-man-holding-chin-and-taking-notes-in-notebook.png"
        width="200"
      />
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />
    </div>

    <div class="wrapper">
      <HelloWorld msg="Todo App" />
    </div>
  </header>

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
  <ul class="c-todos">
    <div v-if="todos.length" class="c-todos__header">
      <h2 class="c-todos__title">My Todo List</h2>
      <div class="c-todos__checkAll" @click="markAllDone">Check all</div>
      <div class="c-todos__removeAll" @click="removeAllTodos">Remove all</div>
    </div>
    <li
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="c-todo"
      :class="{ 'c-todo--checked': todo.done }"
      @click="toggleDone(todo, $event)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="c-todo__icon"
        :class="{ 'c-todo__icon--checked': todo.done }"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="26"
        height="26"
      >
        <path
          fill-rule="inherit"
          d="M10 18a8 8 0
        100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707
        9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      {{ todo.title }}
      <div class="c-todo__remove" @click="removeTodo(index)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          width="18"
          height="18"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.c-todos {
  padding: 0;
  margin: 40px 0 0 0;
  list-style: none;
}

.c-todos__header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.c-todos__header > * + * {
  margin-left: 10px;
}

.c-todos__title {
  font-family: "Craftwork Grotesk", system-ui, sans-serif;
  color: hsla(160, 100%, 34%, 1);
  font-weight: 700;
}

.c-todos__checkAll,
.c-todos__removeAll {
  font-size: 14px;
  font-weight: 600;
  padding: 6px 10px;
  background-color: var(--color-background-mute);
  border-radius: 6px;
  opacity: 0.5;
  cursor: pointer;
  user-select: none;
}

.c-todos__checkAll:hover,
.c-todos__removeAll:hover {
  opacity: 1;
}

.c-todos__checkAll {
  margin-left: auto;
}

.c-todo {
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.c-todo::before {
  --externalSize: 20px;
  --externalVerticalSize: 2px;
  content: "";
  display: flex;
  width: calc(100% + var(--externalSize));
  height: calc(100% + var(--externalVerticalSize));
  position: absolute;
  top: calc(var(--externalVerticalSize) / -2);
  left: calc(var(--externalSize) / -2);
  background-color: var(--color-background-mute);
  opacity: 0;
  border-radius: 8px;
  z-index: -1;
}

.c-todo + * {
  border-top: 1px solid var(--color-background-mute);
}

.c-todo:hover::before {
  opacity: 1;
}

.c-todo--checked {
  color: var(--color-heading);
}

.c-todo__icon {
  margin-right: 10px;
  color: var(--color-background-soft);
  pointer-events: none;
}

.c-todo__remove {
  background-color: hsl(12, 52%, 40%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-left: auto;
}

.c-todo__remove svg {
  color: hsl(12, 60%, 80%);
}

.c-todo__icon--checked {
  fill-rule: evenodd;
  color: var(--color-heading);
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
