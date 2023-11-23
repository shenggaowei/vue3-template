<template>
  <div>
    <h1 class="text-3xl font-bold text-red-50 underline">Hello world!</h1>
    <svg-icon name="menu_vue" size="100"></svg-icon>
    <div :class="style.container">
      <div :class="style.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/Icon/index.vue";
</script>

<style lang="scss" module="style">
.container {
  width: 400px;
  height: 400px;
  background-color: #ccc;
  .content {
    width: 100%;
    height: 400px;
    padding: 0 100px;
    background-color: orange;
  }
}
</style>
