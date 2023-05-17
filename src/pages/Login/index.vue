<script setup lang="ts">
import type { ElForm } from "element-plus";
import { reactive, ref } from "vue";
import useCache from "@/hooks/useCache";
import { useRouter } from "vue-router";
import { useLogin } from "./service";
import { storage_key } from "@/utils/const/index";

const isActiveUsername = ref(false);
const isActivePassword = ref(false);
const isShowLoginBtn = ref(false);

const cacheHandler = useCache();
const $router = useRouter();
const loginHandler = useLogin();

const loginForm = reactive({
  userName: ``,
  password: ``,
});

const loginRules = {
  userName: [
    {
      required: true,
      message: "请填写用户名",
      trigger: `blur`,
    },
  ],
  password: [
    {
      required: true,
      message: "请填写密码",
      trigger: `blur`,
    },
  ],
};
// 登录函数
const submitForm = async () => {
  try {
    // await loginHandler.run({
    //   username: loginForm.userName,
    //   password: loginForm.password,
    // });
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
  if (loginForm.userName && loginForm.password) {
    isShowLoginBtn.value = true;
  } else {
    isShowLoginBtn.value = false;
  }
};
</script>

<template>
  <div class="login">
    <div class="loginBox">
      <div class="login-left">
        <img src="@/assets/images/login-left.png" class="logoLeftImg" />
      </div>
      <div class="login-info">
        <div class="logo-img">
          <img src="@/assets/images/logo.png" class="logo-icon" alt="" />
        </div>
        <div class="form-style">
          <el-form
            :model="loginForm"
            status-icon
            :rules="loginRules"
            class="demo-ruleForm"
          >
            <el-form-item prop="userName" class="username-input">
              <el-input
                v-model="loginForm.userName"
                autocomplete="off"
                maxlength="20"
                placeholder="请填写用户名"
                class="span10"
                @focus="handleFocus(`userName`)"
                @blur="handleBlur(`userName`)"
                @keyup="handleChangeInput"
              >
                <template #prefix>
                  <img
                    v-if="isActiveUsername"
                    class="user-icon"
                    src="@/assets/images/user_active_icon.png"
                    alt=""
                  />
                  <img
                    v-else
                    class="user-icon"
                    src="@/assets/images/user_icon.png"
                    alt=""
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                autocomplete="off"
                maxlength="20"
                placeholder="请填写密码"
                class="span10"
                @focus="handleFocus(`password`)"
                @blur="handleBlur(`password`)"
                @keyup="handleChangeInput"
              >
                <template #prefix>
                  <img
                    v-if="isActivePassword"
                    class="user-icon"
                    src="@/assets/images/pwd_active_icon.png"
                    alt=""
                  />
                  <img
                    v-else
                    class="user-icon"
                    src="@/assets/images/pwd_icon.png"
                    alt=""
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="btn-login span10">
              <el-button
                v-if="isShowLoginBtn"
                class="btn-login-active"
                type="primary"
                @click="submitForm"
              >
                登录
              </el-button>
              <el-button
                v-else
                class="btn-login-disable"
                type="primary"
                disabled
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(@/assets/images/login-bg.png) no-repeat 100% 100%;
  background-size: cover;
  .login-left {
    width: 65%;
    .logoLeftImg {
      height: 100%;
      width: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  .loginBox {
    display: flex;
    width: 900px;
    height: 460px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0;
    margin: auto;
    z-index: 1;
    // padding: 50px 30px 0;
    border: 1px solid $main_theme;
    border-radius: 10px;
    background-color: #fff;
    .login-info {
      width: 50%;
      // margin-left: 50px;
      .logo-img {
        text-align: center;
      }
      .logo-icon {
        width: 60px;
        margin-top: 80px;
        margin-bottom: 10px;
      }
    }
    .form-style {
      padding: 20px 50px 0 50px;
    }

    .username-input {
      margin-bottom: 30px;
    }
    .header-icon {
      z-index: 10000;
    }
    .login-remark {
      margin-left: 10px;
      color: #b1b3b8;
    }
    .code-date {
      color: #94979e;
    }
    .code-icon {
      display: inline-block;
      height: 20px;
      width: 1px;
      background-color: #e2e4e7;
      margin-top: 8px;
      margin-right: 10px;
    }

    .code-label {
      color: $main_theme;
      cursor: pointer;
    }
    .zhuce-style {
      color: $main_theme;
      cursor: pointer;
    }
    h4 {
      margin: 35px 0 30px 10px;
      font-size: 22px;
    }
    :deep(.el-form) {
      .el-form-item {
        background-color: transparent;
      }
      .el-form-item__content {
        background-color: transparent;
      }
      &:last-child {
        .el-button {
          width: 100%;
        }
      }
    }
    .btn-login {
      margin-top: 30px;
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
      //margin-top: 9px;
    }

    :deep(.el-input__inner:focus) {
      outline: 0;
    }
  }
}
</style>
