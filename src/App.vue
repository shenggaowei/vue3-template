<template>
  <a-config-provider
    :theme="{
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: '#336c7f',
      },
    }"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import { theme } from "ant-design-vue";
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
</style>
