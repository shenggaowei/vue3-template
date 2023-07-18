<template>
  <div :class="[cls['menu-container'], 'w-full']">
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :items="items"
    ></a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import systemRoutes from "@/router/routes";

const router = useRouter();
const route = useRoute();
const state = reactive({
  collapsed: false,
  selectedKeys: [],
});

const _systemRoutes = (systemRoutes as any)[0].children.map((ele) => {
  const meta = ele.meta;
  return {
    label: meta.label,
    title: meta.title,
    key: meta.key,
    icon: meta.icon,
  };
});

const items = reactive(_systemRoutes);

watch(
  () => state.selectedKeys,
  (val) => {
    router.push(val[0]);
  },
);

watch(
  () => route.name,
  (val, oldVal) => {
    if (val && val !== oldVal) {
      state.selectedKeys = [val];
    }
    if (!val) {
      state.selectedKeys = [_systemRoutes[0].key];
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" module="cls">
.menu-container :global(.ant-menu-item) {
  border-radius: 0%;
}
</style>
