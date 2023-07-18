<template>
  <h1 class="flex h-[48px] items-center px-8">
    <img
      src="../../assets/images/logo.png"
      class="mr-[20px] h-[34px] w-[34px]"
    />
    <div class="text-base text-white">{{ title }}</div>
  </h1>
</template>

<script setup lang="ts">
import { system_title } from "@/utils/const";
import { ref } from "vue";

const title = ref(system_title);
</script>
