<script setup>
import { CheckIcon, TrashIcon } from "./icons";

defineProps({
  todo: { type: String, required: true },
  index: { type: Number, required: true },
});
</script>

<template>
  <li class="c-todo" :class="{ 'c-todo--checked': todo.done }">
    <CheckIcon
      class="c-todo__icon"
      :class="{ 'c-todo__icon--checked': todo.done }"
    />
    {{ todo.title }}
    <div class="c-todo__remove" @click="$emit('removeTodo')">
      <TrashIcon />
    </div>
  </li>
</template>

<style>
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
</style>
