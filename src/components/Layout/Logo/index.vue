<template>
  <h1 :class="$style.container">
    <img src="../../../assets/images/logo.png" :class="$style.logo" />
    <div :class="$style.title">{{ title }}</div>
  </h1>
</template>

<script setup lang="ts">
import { system_title } from "@/utils/const";
import { ref } from "vue";

const title = ref(system_title);
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: $second_theme;

  .logo {
    margin-right: 20px;
    height: 40px;
    width: 40px;
  }

  .title {
    color: #fff;
    font-size: 22px;
  }
}
</style>
