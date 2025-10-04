<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>Check out</p>
  <p>
    Learn more about IDE Support for Vue in the
    <a>Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.card {
  padding: 2em;
  border: 10px solid red;
}

button {
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
