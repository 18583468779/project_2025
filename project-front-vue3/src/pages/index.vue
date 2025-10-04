<template>
  <div>
    <h1 class="text-red-500">Hello World</h1>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const user = reactive({ name: "123", age: 123 });
onMounted(() => {
  count.value = 100;
  console.log(count, user);
});
console.log(count, user);
</script>

<style scoped></style>
