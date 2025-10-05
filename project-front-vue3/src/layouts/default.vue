<template>
  <div
    class="fixed z-99 top-0 w-full bg-opacity-30"
    :class="[
      {
        'bg-gray-600 bg-opacity-30 transition-all duration-300 shadow-lg':
          y > 100,
      },
    ]"
  >
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
const { y } = useWindowScroll();
</script>

<style scoped></style>
