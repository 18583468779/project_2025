<script setup lang="ts">
import router from "./router";
</script>

<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped></style>
