<template>
  <div class="flex items-center">
    <img class="mr-2 h-6 w-6 rounded" src="@/assets/images/userDefault.png" />
    <a-dropdown>
      <a class="flex cursor-pointer text-sm text-white" @click.prevent>
        {{ authInfo.userInfo?.userName ?? "东北林场" }}
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a-popconfirm
              title="确定退出吗？"
              ok-text="是"
              cancel-text="否"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a href="javascript:;">退出登录</a>
            </a-popconfirm>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useCache from "@/hooks/useCache";
import { storage_key } from "@/utils/const";

const router = useRouter();
const store = useAuthStore();
const useCacheHandler = useCache();
const { authInfo } = storeToRefs(store);

const confirm = () => {
  useCacheHandler.removeCache(storage_key);
  store.updateUserInfo();
  router.push("/login");
};

const cancel = () => {};
</script>
