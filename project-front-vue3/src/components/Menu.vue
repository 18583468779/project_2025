<template>
  <div class="flex">
    <router-link to="/" class="item">产品</router-link>
    <router-link to="/community" class="item">社区</router-link>
    <router-link to="/study" class="item">学习</router-link>
    <router-link to="/about" class="item">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@reference "tailwindcss";
.item {
  @apply relative text-white text-xl px-8 py-2 cursor-pointer transition-all duration-300;
}
.item:hover {
  @apply font-bold;
}

.item:after {
  @apply content-[''] absolute bg-gray-100 w-0 h-1 bottom-0 left-[calc(50%-1rem)] transition-all duration-300;
}

.item:hover:after {
  @apply w-8;
}
</style>
