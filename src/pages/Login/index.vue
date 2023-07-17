<script setup lang="ts">
import { reactive, ref } from "vue";
import useCache from "@/hooks/useCache";
import { useRouter } from "vue-router";
import { useLogin } from "./service";
import { storage_key, system_info } from "@/utils/const/index";

const isActiveUsername = ref(false);
const isActivePassword = ref(false);
const isShowLoginBtn = ref(false);

const cacheHandler = useCache();
const $router = useRouter();
const loginHandler = useLogin();

const formData = reactive({
  userName: ``,
  password: ``,
});

// 登录函数
const submitForm = async () => {
  try {
    await loginHandler.run({
      username: formData.userName,
      password: formData.password,
    });
  } catch (e) {
  } finally {
    cacheHandler.setCache(storage_key, { token: "12345" });
    $router.push({ name: "home" });
  }
};

const handleFocus = (val: string) => {
  if (val === `userName`) {
    isActiveUsername.value = true;
  } else if (val === `password`) {
    isActivePassword.value = true;
  }
};

const handleBlur = (val: string) => {
  if (val === `userName`) {
    isActiveUsername.value = false;
  } else if (val === `password`) {
    isActivePassword.value = false;
  }
};

const handleChangeInput = () => {
  if (formData.userName && formData.password) {
    isShowLoginBtn.value = true;
  } else {
    isShowLoginBtn.value = false;
  }
};
</script>

<template>
  <div :class="cls.login">
    <div :class="cls.loginBox">
      <div :class="cls['login-left']">
        <img
          src="@/assets/images/login-left.png"
          :class="cls['logo-left-img']"
        />
        <div :class="cls['title-container']">
          <div :class="cls['title']">{{ system_info.title }}</div>
          <div :class="cls['second-title']">{{ system_info.description }}</div>
        </div>
      </div>
      <div :class="cls['login-info']">
        <img src="@/assets/images/logo.png" :class="cls['logo-icon']" alt="" />
        <div :class="cls['form-content']">
          <a-form :model="formData" :class="cls['demo-ruleForm']">
            <a-form-item
              name="userName"
              :class="cls['username-input']"
              :rules="[
                { required: true, message: '请填写用户名', trigger: 'blur' },
              ]"
            >
              <a-input
                v-model:value="formData.userName"
                :maxlength="20"
                :class="cls['input-common']"
                placeholder="请填写用户名"
                @focus="handleFocus(`userName`)"
                @blur="handleBlur(`userName`)"
                @keyup="handleChangeInput"
              >
                <template #prefix>
                  <img
                    v-if="isActiveUsername"
                    :class="cls['user-icon']"
                    src="@/assets/images/user_active_icon.png"
                  />
                  <img
                    v-else
                    :class="cls['user-icon']"
                    src="@/assets/images/user_icon.png"
                  />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
              name="password"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'blur' },
              ]"
            >
              <a-input-password
                v-model:value="formData.password"
                :maxlength="20"
                :class="cls['input-common']"
                placeholder="请填写密码"
                @focus="handleFocus(`password`)"
                @blur="handleBlur(`password`)"
                @keyup="handleChangeInput"
              >
                <template #prefix>
                  <img
                    v-if="isActivePassword"
                    :class="cls['user-icon']"
                    src="@/assets/images/pwd_active_icon.png"
                    alt=""
                  />
                  <img
                    v-else
                    :class="cls['user-icon']"
                    src="@/assets/images/pwd_icon.png"
                    alt=""
                  />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item :class="cls['btn-login']">
              <a-button
                v-if="isShowLoginBtn"
                :class="[cls['btn-login-active'], cls['btn-common']]"
                type="primary"
                @click="submitForm"
              >
                登录
              </a-button>
              <a-button
                v-else
                :class="[cls['btn-login-disable'], cls['btn-common']]"
                type="primary"
                disabled
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(@/assets/images/login-bg.png) center center/cover no-repeat;
  .login-left {
    width: 65%;
    position: relative;

    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 45px;
      position: absolute;
      top: 0;
      left: 0;

      .title {
        height: 40px;
        font-size: 26px;
        font-weight: 600;
        color: #262626;
        line-height: 40px;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }

      .second-title {
        height: 20px;
        font-size: 16px;
        color: rgba(103, 106, 108, 0.7);
        line-height: 20px;
        letter-spacing: 1px;
      }
    }
    .logo-left-img {
      height: 100%;
      width: 100%;
    }
  }
  .loginBox {
    display: flex;
    width: 900px;
    height: 460px;
    border: 1px solid $main_theme;
    border-radius: 10px;
    background-color: #fff;
    .login-info {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo-icon {
        width: 60px;
        margin-top: 80px;
        margin-bottom: 10px;
      }
    }
    .form-content {
      padding: 20px 50px 0 50px;
      width: 100%;
    }

    .username-input {
      margin-bottom: 30px;
    }

    .input-common {
      height: 36px;
    }

    .btn-login {
      margin-top: 30px;

      .btn-common {
        width: 100%;
      }

      .btn-login-active {
        height: 36px;
      }
      .btn-login-disable {
        height: 36px;
        background-color: #c8c9cc;
      }
    }
    .user-icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
