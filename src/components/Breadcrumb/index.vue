<template>
  <a-breadcrumb separator=">">
    <a-breadcrumb-item>
      <router-link to="home"
        ><span class="text-textColor">home</span></router-link
      >
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in routeStack" :key="index">
      <router-link :to="item.to">{{ item.name }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
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
        name: ele.meta.label,
      };
    });
  },
  { immediate: true },
);
</script>
