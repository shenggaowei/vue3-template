<template>
  <div :class="$style.container">
    <Top />
    <div :class="$style.content">
      <div :class="$style.left">
        <Menu />
      </div>
      <div
        :class="[
          $style.right,
          store.systemInfo.menuCollapsed && $style.right_collapsed,
        ]"
      >
        <BreadcrumbCom />
        <div :class="$style.pageContainer"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from "./Top/index.vue";
import Menu from "./Menu/index.vue";
import BreadcrumbCom from "./Breadcrumb/index.vue";
import { useSystemStore } from "@/store";

const store = useSystemStore();
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.content {
  display: flex;
  flex: 1;

  .left {
    height: calc(100% - 50px);
    position: fixed;
    top: 50px;
  }

  .right {
    width: 100%;
    padding: 8px 16px 16px 0px;
    margin-left: 176px;
    margin-top: 50px;
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

    &_collapsed {
      margin-left: 96px;
    }

    .pageContainer {
      padding-top: 4px;
      border-top: 1px solid rgba(5, 5, 5, 0.06);
    }
  }
}
</style>
