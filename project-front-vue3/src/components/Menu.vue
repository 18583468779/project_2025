<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <router-link class="item" to="/">产品</router-link>
    <a class="item" href="https://www.imooc.com" target="_blank">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  align: {
    type: String as PropType<"vertical" | "horizontal">, // 修正拼写错误
    default: "horizontal", // 补充默认值
  },
});
</script>

<style scoped lang="scss">
// 使用SCSS语法（带大括号和分号），兼容大多数环境
.item {
  // 基础样式
  position: relative;
  color: white;
  font-size: 1.25rem; /* text-xl 对应20px */
  padding-left: 2rem; /* px-8 对应8*0.25rem=2rem */
  padding-right: 2rem;
  padding-top: 0.5rem; /* py-2 对应2*0.25rem=0.5rem */
  padding-bottom: 0.5rem;
  font-weight: 300;
  cursor: pointer;

  // 小于sm断点（640px）时的样式
  @media (max-width: 639.9px) {
    align-self: flex-start;
  }

  // hover状态
  &:hover {
    font-weight: 500;

    // 下划线伪元素（默认隐藏，需要显示可打开注释）
    &::after {
      content: none; /* 若要显示下划线，改为 content: ''; */
      position: absolute;
      background-color: #f3f4f6; /* bg-gray-100 对应色值 */
      width: 2rem; /* w-8 对应2rem */
      height: 1px;
      bottom: 0;
      left: calc(50% - 1rem); /* 水平居中 */
    }
  }
}
</style>
