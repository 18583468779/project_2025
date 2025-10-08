<template>
  <div class="text-red-500 shadow-orange-400 text-xl">
    home 主页
    <button @click="store.increment">+ {{ store.count }}</button>
    <nuxt-link to="/about">about</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '~~/stores/useCounter'

const store = useCounter()
</script>

<style scoped></style>
