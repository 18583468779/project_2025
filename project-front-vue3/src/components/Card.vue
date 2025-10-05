<template>
  <div :class="cardClass">
    <div
      v-if="image"
      :class="imageClass"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div v-else :class="['w-20', 'h-20']">
      <Icon :icon="icon" />
    </div>
    <div v-if="title || subTitle" :class="titleClass">
      <p class="text-lg font-bold pb-2 text-dark-300">{{ title }}</p>
      <p class="text-sm text-dark-100">{{ subTitle }}</p>
    </div>
    <slot :item="{ title, subTitle, url, image, icon }"></slot>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  image: String,
  imageType: {
    type: String as PropType<"default" | "rounded" | "avatar">,
    default: "default",
  },
  icon: String,
  title: String,
  subTitle: String,
  url: String,
  border: Boolean,
});
const cardClass = computed(() => {
  let defaultClass = "flex flex-col w-80";
  if (props.icon) {
    defaultClass += " items-start";
  }
  if (props.imageType === "rounded") {
    defaultClass += " rounded-2 overflow-hidden";
  } else if (props.imageType === "avatar") {
    defaultClass += " relative rounded-1/2";
  }
  if (props.border) {
    defaultClass += ` border border-gray-300`;
  }
  return defaultClass + " items-center";
});
const imageClass = computed(() => {
  const defaultClass = "w-full h-40 bg-cover bg-center-top bg-no-repeat";
  if (!props.title && !props.subTitle && props.imageType === "rounded") {
    return defaultClass + " h-60 rounded";
  } else if (props.imageType === "avatar") {
    return (
      defaultClass +
      " avatar rounded-full self-center bg-center absolute top-0 translate-y-[-50%] z-10"
    );
  }
  return defaultClass + " h-40";
});

const titleClass = computed(() => {
  const defaultClass = "flex flex-col items-center p-4";
  if (props.imageType === "avatar") {
    return defaultClass + " pt-30";
  }
  return defaultClass;
});
</script>

<style scoped>
.avatar {
  width: 6rem;
  height: 6rem;
}
</style>
