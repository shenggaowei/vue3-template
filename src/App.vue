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
import { useSystemStore } from "@/store";
import { isMobile } from "@/utils";

const store = useSystemStore();
store.updateSystemDeviceInfo(isMobile());

console.log(`设备是${store.systemInfo.isMobile ? "移动" : "pc"}端`);
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
</style>
