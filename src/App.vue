<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useSystemStore } from "@/store";
import { isMobile } from "@/utils";

const store = useSystemStore();
store.updateSystemDeviceInfo(isMobile());

console.log(`设备是${store.systemInfo.isMobile ? "移动" : "pc"}端`);
</script>
