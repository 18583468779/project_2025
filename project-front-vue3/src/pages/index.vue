<script setup lang="ts">
import type { SwiperItemType } from "@/components/types";
import bg from "../assets/images/bg.png";
import { useThemeStore } from "../store/useThemeStore";
const themeStore = useThemeStore();

const items: SwiperItemType[] = [
  {
    image: bg,
    title: "传播技术的种子",
    subTitle: "让技术没有门槛，让沟通没有障碍",
  },
  {
    image: bg,
    title: "传播技术的种子",
    subTitle: "让技术没有门槛，让沟通没有障碍",
  },
  {
    image: bg,
    title: "传播技术的种子",
    subTitle: "让技术没有门槛，让沟通没有障碍",
  },
  {
    image: bg,
    title: "传播技术的种子",
    subTitle: "让技术没有门槛，让沟通没有障碍",
  },
  {
    image: bg,
    title: "传播技术的种子",
    subTitle: "让技术没有门槛，让沟通没有障碍",
  },
];
</script>

<template>
  <div>
    <Swiper :items="items" :height="36 * themeStore.rate + 'rem'"></Swiper>
  </div>
</template>
