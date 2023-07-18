import { reactive } from "vue";
import { defineStore } from "pinia";
import { IUserInfo } from "@/services/user/interface";

export interface ISystemUserInfo {
  userInfo?: IUserInfo;
}

const useSystemStore = defineStore("auth", () => {
  const authInfo = reactive<ISystemUserInfo>({ userInfo: undefined });
  const updateUserInfo = (val?: IUserInfo) => {
    authInfo.userInfo = val;
  };

  return {
    authInfo,
    updateUserInfo,
  };
});

export default useSystemStore;
