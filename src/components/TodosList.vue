<script setup>
import TodoItem from "./TodoItem.vue";

defineProps({
  todos: { type: Array, required: true },
});
</script>

<template>
  <ul class="c-todos">
    <div v-if="todos.length" class="c-todos__header">
      <h2 class="c-todos__title">Todos</h2>
      <div class="c-todos__checkAll" @click="$emit('markAllDone')">
        Check all
      </div>
      <div class="c-todos__removeAll" @click="$emit('removeAllTodos')">
        Remove all
      </div>
    </div>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="$emit('removeTodo', index)"
      @click="$emit('toggleDone', todo, $event)"
    />
  </ul>
</template>

<style>
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
</style>
