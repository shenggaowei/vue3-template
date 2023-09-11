<template>
  <div :class="$style.container">
    <logo />
    <user-info />
  </div>
</template>

<script setup lang="ts">
import UserInfo from "../Top/UserInfo.vue";
import Logo from "../Logo/index.vue";
</script>

<style module lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: $second_theme;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
