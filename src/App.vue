<template>
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 底部导航 -->
    <van-tabbar
      v-if="hasMainRouter"
      v-model="activeTab"
      active-color="#1989fa"
      inactive-color="#7d7e80"
      @change="onTabChange"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/assets">资产</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const activeTab = ref(0);

const hasMainRouter = computed(() => {
  return route.path === "/" || route.path === "/mine" || route.path === "/assets";
});

// 根据当前路由设置底部导航栏的选中状态
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      activeTab.value = 0;
    } else if (newPath === "/assets") {
      activeTab.value = 1;
    } else if (newPath === "/mine") {
      activeTab.value = 2;
    }
  },
  { immediate: true }
);

const onTabChange = (index: number) => {
  if (index === 0) {
    router.push("/");
  } else if (index === 1) {
    router.push("/assets");
  } else if (index === 2) {
    router.push("/mine");
  }
};
</script>

<style lang="scss">
html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  padding: 0;
  margin: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Helvetica Neue",
    Helvetica,
    Segoe UI,
    Arial,
    Roboto,
    "PingFang SC",
    "miui",
    "Hiragino Sans GB",
    "Microsoft Yahei",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
}

// 移动端适配
@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.van-tabbar {
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
}

.van-nav-bar::after {
  border-bottom-width: 0px;
}
</style>
