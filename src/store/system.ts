import { reactive } from "vue";
import { defineStore } from "pinia";

export interface ISystemInfo {
    isMobile: boolean;
}

const useSystemStore = defineStore("system", () => {
    const systemInfo = reactive<ISystemInfo>({
        isMobile: false,
    });
    const updateSystemDeviceInfo = (val: boolean) => {
        systemInfo.isMobile = val;
    };

    return {
        systemInfo,
        updateSystemDeviceInfo,
    };
});

export default useSystemStore;
