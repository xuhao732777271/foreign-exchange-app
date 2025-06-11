<template>
  <div>
    <h3 class="text-center m-0 mb-20px">{{ t("login.login") }}</h3>
    <van-form @submit="handleLoginSubmit">
      <!-- 用户名 -->
      <van-field
        v-model="loginFormData.username"
        name="username"
        :label="t('login.username')"
        :placeholder="t('login.username')"
        :rules="[{ required: true, message: t('login.message.username.required') }]"
      >
        <template #left-icon>
          <van-icon name="user-o" />
        </template>
      </van-field>

      <!-- 密码 -->
      <van-field
        v-model="loginFormData.password"
        type="password"
        name="password"
        :label="t('login.password')"
        :placeholder="t('login.password')"
        :rules="[
          { required: true, message: t('login.message.password.required') },
          { min: 6, message: t('login.message.password.min') },
        ]"
      >
        <template #left-icon>
          <van-icon name="lock" />
        </template>
      </van-field>

      <!-- 验证码 -->
      <van-field
        v-model="loginFormData.captchaCode"
        name="captchaCode"
        :label="t('login.captchaCode')"
        :placeholder="t('login.captchaCode')"
        :rules="[{ required: true, message: t('login.message.captchaCode.required') }]"
      >
        <template #left-icon>
          <van-icon name="shield-o" />
        </template>
        <template #button>
          <van-image
            v-if="!codeLoading"
            :src="captchaBase64"
            width="120"
            height="40"
            @click="getCaptcha"
          />
          <van-loading v-else type="spinner" />
        </template>
      </van-field>

      <div class="flex-x-between w-full">
        <van-checkbox v-model="loginFormData.rememberMe">{{ t("login.rememberMe") }}</van-checkbox>
        <van-button type="text" @click="toOtherForm('resetPwd')">
          {{ t("login.forgetPassword") }}
        </van-button>
      </div>

      <!-- 登录按钮 -->
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" :loading="loading">
          {{ t("login.login") }}
        </van-button>
      </div>
    </van-form>

    <div class="flex-center gap-10px">
      <van-text>{{ t("login.noAccount") }}</van-text>
      <van-button type="text" @click="toOtherForm('register')">
        {{ t("login.reg") }}
      </van-button>
    </div>

    <!-- 第三方登录 -->
    <van-divider>{{ t("login.otherLoginMethods") }}</van-divider>
    <div class="flex-center gap-x-5 w-full">
      <van-icon name="wechat" size="24" />
      <van-icon name="qq" size="24" />
      <van-icon name="github" size="24" />
      <van-icon name="gitee" size="24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute, type LocationQuery, type RouteLocationRaw } from "vue-router";
import AuthAPI, { type LoginFormData } from "@/api/auth.api";
import router from "@/router";
import { useUserStore } from "@/store";

const { t } = useI18n();
const userStore = useUserStore();
const route = useRoute();
const emit = defineEmits<{
  (_e: "update:modelValue", _value: "register" | "resetPwd"): void;
}>();

onMounted(() => getCaptcha());

const loading = ref(false); // 按钮 loading 状态
const codeLoading = ref(false); // 验证码 loading 状态
const captchaBase64 = ref(); // 验证码图片Base64字符串

const loginFormData = ref<LoginFormData>({
  username: "admin",
  password: "123456",
  captchaKey: "",
  captchaCode: "",
  rememberMe: false,
});

// 获取验证码
function getCaptcha() {
  codeLoading.value = true;
  AuthAPI.getCaptcha()
    .then((data) => {
      loginFormData.value.captchaKey = data.captchaKey;
      captchaBase64.value = data.captchaBase64;
    })
    .finally(() => (codeLoading.value = false));
}

// 登录提交处理
async function handleLoginSubmit() {
  try {
    loading.value = true;

    // 1. 执行登录
    await userStore.login(loginFormData.value);

    // 2. 获取用户信息
    await userStore.getUserInfo();

    // 3. 解析并跳转目标地址
    const redirect = resolveRedirectTarget(route.query);
    await router.push(redirect);

    // TODO 4. 判断用户是否点击了记住我？采用明文保存或使用jsencrypt库？
  } catch (error) {
    // 5. 统一错误处理
    console.error(error);
  } finally {
    loading.value = false;
  }
}

// 跳转到其他表单
function toOtherForm(type: "register" | "resetPwd") {
  emit("update:modelValue", type);
}

// 解析重定向目标地址
function resolveRedirectTarget(query: LocationQuery): RouteLocationRaw {
  const redirect = query.redirect as string;
  return redirect ? { path: redirect } : { path: "/" };
}
</script>

<style lang="scss" scoped>
.flex-x-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gap-10px {
  gap: 10px;
}

.gap-x-5 {
  gap: 5px;
}

.w-full {
  width: 100%;
}

.mb-20px {
  margin-bottom: 20px;
}

.text-center {
  text-align: center;
}
</style>
