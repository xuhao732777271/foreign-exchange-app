<template>
  <div class="reset-pwd-form">
    <h3 class="form-title">{{ t("login.resetPassword") }}</h3>

    <van-form ref="formRef" @submit="submit">
      <!-- 用户名 -->
      <van-field
        v-model.trim="model.username"
        name="username"
        :label="t('login.username')"
        :placeholder="t('login.username')"
        :rules="[{ required: true, message: t('login.message.username.required') }]"
      >
        <template #left-icon>
          <van-icon name="user-o" />
        </template>
      </van-field>

      <!-- 验证码 -->
      <van-field
        v-model.trim="model.captchaCode"
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

      <!-- 重置按钮 -->
      <div class="submit-btn">
        <van-button round block type="warning" native-type="submit" :loading="loading">
          {{ t("login.resetPassword") }}
        </van-button>
      </div>
    </van-form>

    <div class="login-link">
      <span>{{ t("login.thinkOfPasswd") }}</span>
      <van-button type="text" @click="toLogin">{{ t("login.login") }}</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "vant";
import { useI18n } from "vue-i18n";
import AuthAPI from "@/api/auth.api";
import { showToast } from "vant";

const { t } = useI18n();

const emit = defineEmits<{
  (_e: "update:modelValue", _value: "login"): void;
}>();

const toLogin = () => emit("update:modelValue", "login");

onMounted(() => getCaptcha());

const formRef = ref<FormInstance>();
const loading = ref(false);
const codeLoading = ref(false);
const captchaBase64 = ref();

interface ResetPwdModel {
  username: string;
  captchaKey: string;
  captchaCode: string;
}

const model = ref<ResetPwdModel>({
  username: "",
  captchaKey: "",
  captchaCode: "",
});

// 获取验证码
function getCaptcha() {
  codeLoading.value = true;
  AuthAPI.getCaptcha()
    .then((data) => {
      model.value.captchaKey = data.captchaKey;
      captchaBase64.value = data.captchaBase64;
    })
    .finally(() => (codeLoading.value = false));
}

const submit = async () => {
  try {
    await formRef.value?.validate();
    loading.value = true;
    // TODO: 实现重置密码逻辑
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showToast("开发中...");
  } catch (error) {
    console.error("重置密码失败:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.reset-pwd-form {
  padding: 16px;
  animation: slide-in 0.3s ease-out;
}

.form-title {
  margin: 0 0 24px;
  font-size: 24px;
  color: var(--van-text-color);
  text-align: center;
}

.submit-btn {
  margin: 24px 0;
}

.login-link {
  margin: 16px 0;
  color: var(--van-text-color-2);
  text-align: center;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
