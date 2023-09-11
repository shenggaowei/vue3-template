<template>
  <div
    :class="[
      cls['menu-container'],
      store.systemInfo.menuCollapsed && cls['menu-container-collapsed'],
    ]"
  >
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :items="items"
      :inline-collapsed="store.systemInfo.menuCollapsed"
      :class="cls['menu-list']"
    ></a-menu>

    <div :class="cls['toggle-button']" @click="toggleCollapsed">
      <MenuUnfoldOutlined
        :class="cls['icon']"
        v-if="store.systemInfo.menuCollapsed"
      />
      <MenuFoldOutlined v-else :class="cls['icon']" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import systemRoutes from "@/router/routes";
import { reactive, watch } from "vue";
import { useSystemStore } from "@/store";

const store = useSystemStore();
const router = useRouter();
const route = useRoute();
const state = reactive({
  selectedKeys: [],
});

const _systemRoutes = (systemRoutes as any)[0].children.map((ele) => {
  const meta = ele.meta;
  return {
    label: meta.title,
    title: meta.title,
    key: meta.key,
    icon: meta.icon,
  };
});

const items = reactive(_systemRoutes);

// 菜单的收起和展开状态
const toggleCollapsed = () => {
  const collapsed = store.systemInfo.menuCollapsed;
  store.updateSystemMenuCollapsed(!collapsed);
};

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
.menu-container {
  position: relative;
  width: 160px;
  height: 100%;
  transition: width 0.2s cubic-bezier(0.2, 0, 0, 1) 0s;
  display: flex;
  flex-direction: column;

  &-collapsed {
    width: 80px;
  }
}

.toggle-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  cursor: pointer;

  .icon {
    font-size: 22px;
    color: #fff;
  }
}

.menu-container :global(.ant-menu-item) {
  border-radius: 0%;
  padding: 0 30px !important;
}

.menu-list {
  background: $second_theme;
  flex: 1;
}
</style>
