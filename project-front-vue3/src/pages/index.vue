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

const projects = [
  {
    icon: "i-mdi:web",
    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
  {
    icon: "i-mdi:web",

    title: "云服务",
    subTitle: "基于云平台的服务",
    url: "https://www.toimc.com/cloud",
  },
];
</script>

<template>
  <div>
    <Swiper :items="items" :height="36 * themeStore.rate + 'rem'"></Swiper>
    <Container>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4"
      >
        <!-- for遍历的内容：课程 -->
        <a
          v-for="(item, index) in projects"
          :href="item.url"
          target="_blank"
          :key="index"
          class="flex group transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
        >
          <Card
            class="w-full rounded-0 card"
            :icon="item.icon"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div
                class="mx-4 flex items-center justify-between text-gray-500 mb-4 group-hover:text-white"
              >
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">
            toimc官方出品，经典内容设计，匠心细致，专业讲解。
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<style scoped lang="scss">
:deep(.card) {
  &:hover {
    p {
      color: white;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
