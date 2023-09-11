import { reactive } from "vue";
import { defineStore } from "pinia";

export interface ISystemInfo {
  // 是否是移动端
  isMobile: boolean;
  // 左侧菜单折叠收起状态
  menuCollapsed: boolean;
}

const useSystemStore = defineStore("system", () => {
  const systemInfo = reactive<ISystemInfo>({
    isMobile: false,
    menuCollapsed: false,
  });

  // 修改 isMobile 状态
  const updateSystemDeviceInfo = (val: boolean) => {
    systemInfo.isMobile = val;
  };

  // 修改菜单折叠收起状态
  const updateSystemMenuCollapsed = (val: boolean) => {
    systemInfo.menuCollapsed = val;
  };

  return {
    systemInfo,
    updateSystemDeviceInfo,
    updateSystemMenuCollapsed,
  };
});

export default useSystemStore;
