<template>
  <div
    class="fixed z-99 top-0 w-full bg-opacity-30 transition-all duration-500 h-0"
    :class="[
      {
        'bg-gray-600 bg-opacity-30 transition-all duration-300 shadow-lg':
          y > 100,
      },
      { 'lt-sm:(bg-black h-full)': show },
    ]"
  >
    <Container>
      <img
        src="/512x512.png"
        class="w-14 h-full lt-sm:mx-auto"
        alt="toimc logo"
      />
      <div
        :class="[
          'display-none  text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white lt-sm:display-block',
        ]"
        @click="() => toggle()"
      >
        <Transition name="rotate-icon" mode="out-in">
          <div class="i-ic-round-menu" v-if="!show"></div>
          <div v-else class="i-radix-icons:cross-2"></div>
        </Transition>
      </div>
      <Menu
        v-show="show"
        class="lt-sm:(absolute top-14 right-0 w-full flex-col)"
      />
    </Container>
  </div>

  <router-view />
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll();
const [show, toggle] = useToggle(false);
const flag = ref(false);
useResizeObserver(document.body, () => {
  const width = window.innerWidth;
  if (width >= 640) {
    toggle(true);
    flag.value = false;
  } else {
    if (flag.value) return;
    flag.value = true;
    toggle(false);
  }
});
</script>

<style scoped>
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
