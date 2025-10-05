<template>
  <div>
    <h1>404 页面不存在</h1>
    <el-button type="primary" @click="handleClick">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const handleClick = () => {
  router.back();
};
</script>

<style scoped></style>
