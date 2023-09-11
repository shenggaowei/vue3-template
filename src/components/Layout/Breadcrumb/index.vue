<template>
  <div :class="$style.container">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <router-link to="home"
          ><span :class="$style.headText">home</span></router-link
        >
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in routeStack" :key="index">
        <router-link :to="item.to">
          <div :class="$style.customText">{{ item.name }}</div></router-link
        >
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const routeStack = ref<any>([]);

watch(
  () => route.matched,
  (val) => {
    routeStack.value = val.slice(1).map((ele) => {
      return {
        to: ele.name,
        name: ele.meta.title,
      };
    });
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
.container {
  height: 30px;
  display: flex;
  align-items: center;
}
.headText {
  color: #277dbe;
  font-size: 14px;
}

.customText {
  font-size: 14px;
  color: $second_theme;
}
</style>
