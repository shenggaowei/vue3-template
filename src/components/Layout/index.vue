<template>
  <div class="flex h-full flex-row">
    <div class="w-[216px]">
      <Aside />
    </div>
    <div class="flex-1 px-6">
      <Top />
      <div class="py-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Aside from "@/components/Aside/index.vue";
import Top from "@/components/Top/index.vue";
</script>
