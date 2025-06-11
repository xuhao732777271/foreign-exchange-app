import type { App } from "vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const metaRoutes = import.meta.glob("./routes/*.ts", { eager: true }) as Record<
  string,
  { default: RouteRecordRaw | RouteRecordRaw[] }
>;
const routeList: RouteRecordRaw[] = [];

Object.keys(metaRoutes).forEach((key) => {
  const module = metaRoutes[key].default || {};
  const moduleList = Array.isArray(module) ? [...module] : [module];
  routeList.push(...(moduleList as RouteRecordRaw[]));
});

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "首页", icon: "home", affix: true, keepAlive: true },
  },
  {
    path: "/assets",
    name: "Assets",
    component: () => import("@/views/assets/index.vue"),
    meta: { title: "资产", icon: "apps-o", keepAlive: true },
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("@/views/mine/index.vue"),
    meta: { title: "我的", icon: "user-o", keepAlive: true },
  },
  ...routeList,
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
