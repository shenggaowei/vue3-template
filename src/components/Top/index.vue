<template>
  <div
    class="border-[rgba(245, 246, 247, 1)] flex h-[48px] items-center justify-between border-b"
  >
    <BreadcrumbCom />
    <user-info />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbCom from "@/components/Breadcrumb/index.vue";
import UserInfo from "@/components/Top/UserInfo.vue";
</script>
