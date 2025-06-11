<template>
  <div class="login-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar :title="t('login.title')" left-arrow @click-left="onClickLeft" class="nav-bar">
      <template #right>
        <van-icon name="setting-o" size="18" @click="showSettings = true" />
      </template>
    </van-nav-bar>

    <!-- 登录页主体 -->
    <div class="login-content">
      <!-- logo -->
      <div class="logo-container">
        <h2 class="title">
          <van-tag type="success" round>{{ `v ${defaultSettings.version}` }}</van-tag>
          {{ defaultSettings.title }}
        </h2>
      </div>

      <!-- 表单组件 -->
      <div class="form-container">
        <transition name="fade-slide" mode="out-in">
          <component :is="formComponents[component]" v-model="component" />
        </transition>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="footer">
      <van-text type="info" size="small">
        Copyright © 2021 - 2025 youlai.tech All Rights Reserved.
        <a href="http://beian.miit.gov.cn/" target="_blank">皖ICP备20006496号-2</a>
      </van-text>
    </div>

    <!-- 设置弹窗 -->
    <van-popup v-model:show="showSettings" position="bottom" round>
      <div class="settings-content">
        <div class="settings-item">
          <span>{{ t("login.themeToggle") }}</span>
          <DarkModeSwitch />
        </div>
        <div class="settings-item">
          <span>{{ t("login.languageToggle") }}</span>
          <LangSelect />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import defaultSettings from "@/settings";
import { useRouter } from "vue-router";
import DarkModeSwitch from "@/components/DarkModeSwitch/index.vue";
import LangSelect from "@/components/LangSelect/index.vue";

const router = useRouter();
const t = useI18n().t;
const showSettings = ref(false);

type LayoutMap = "login" | "register" | "resetPwd";

const component = ref<LayoutMap>("login"); // 切换显示的组件
const formComponents = {
  login: defineAsyncComponent(() => import("./components/Login.vue")),
  register: defineAsyncComponent(() => import("./components/Register.vue")),
  resetPwd: defineAsyncComponent(() => import("./components/ResetPwd.vue")),
};

const onClickLeft = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--van-background);
}

.nav-bar {
  background: transparent;
  :deep(.van-nav-bar__title) {
    color: var(--van-text-color);
  }
  :deep(.van-icon) {
    color: var(--van-text-color);
  }
}

.login-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo-container {
  margin-bottom: 40px;
  text-align: center;

  .title {
    margin-top: 16px;
    font-size: 24px;
    color: var(--van-text-color);
  }
}

.form-container {
  width: 100%;
  max-width: 375px;
  padding: 20px;
  background: var(--van-background);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.footer {
  padding: 16px;
  font-size: 12px;
  color: var(--van-text-color-2);
  text-align: center;

  a {
    color: var(--van-primary-color);
    text-decoration: none;
  }
}

.settings-content {
  padding: 20px;

  .settings-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid var(--van-border-color);

    &:last-child {
      border-bottom: none;
    }
  }
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
