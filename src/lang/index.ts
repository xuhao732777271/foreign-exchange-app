import type { App } from "vue";
import { createI18n } from "vue-i18n";
// import { useAppStoreHook } from "@/store/modules/app.store"; // 已删除
// 本地语言包
import enLocale from "./package/en";
import zhCnLocale from "./package/zh-cn"; // 修正导入路径

// const appStore = useAppStoreHook(); // 已删除

const messages = {
  "zh-cn": {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "zh-cn", // 直接设置默认语言为中文
  messages: messages,
  globalInjection: true,
});

// 全局注册 i18n
export function setupI18n(app: App<Element>) {
  app.use(i18n);
}

export default i18n;
