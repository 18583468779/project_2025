<template>
  <div class="shadow-md fixed top-0 w-full bg-gray-600 bg-opacity-30">
    <Container>
      <img
        src="/512x512.png"
        class="w-14 h-full lt-sm:mx-auto"
        alt="toimc logo"
      />
      <Menu />
    </Container>
  </div>

  <router-view />
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>

<script setup lang="ts">
console.log("first");
</script>

<style scoped></style>
