<template>
  <div class="register-form">
    <h3 class="form-title">{{ t("login.reg") }}</h3>

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

      <!-- 密码 -->
      <van-field
        v-model.trim="model.password"
        type="password"
        name="password"
        :label="t('login.password')"
        :placeholder="t('login.password')"
        :rules="[
          { required: true, message: t('login.message.password.required') },
          { min: 6, message: t('login.message.password.min') },
        ]"
        @keyup="checkCapsLock"
      >
        <template #left-icon>
          <van-icon name="lock" />
        </template>
        <template #right-icon>
          <van-icon name="eye-o" v-if="!showPassword" @click="showPassword = true" />
          <van-icon name="closed-eye" v-else @click="showPassword = false" />
        </template>
      </van-field>

      <!-- 确认密码 -->
      <van-field
        v-model.trim="model.confirmPassword"
        type="password"
        name="confirmPassword"
        :label="t('login.message.password.confirm')"
        :placeholder="t('login.message.password.confirm')"
        :rules="[
          { required: true, message: t('login.message.password.required') },
          { min: 6, message: t('login.message.password.min') },
          {
            validator: (value) => value === model.password,
            message: t('login.message.password.inconformity'),
          },
        ]"
        @keyup="checkCapsLock"
      >
        <template #left-icon>
          <van-icon name="lock" />
        </template>
        <template #right-icon>
          <van-icon name="eye-o" v-if="!showConfirmPassword" @click="showConfirmPassword = true" />
          <van-icon name="closed-eye" v-else @click="showConfirmPassword = false" />
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

      <div class="agreement">
        <van-checkbox v-model="isRead">{{ t("login.agree") }}</van-checkbox>
        <van-button type="text" size="small">{{ t("login.userAgreement") }}</van-button>
      </div>

      <!-- 注册按钮 -->
      <div class="submit-btn">
        <van-button round block type="primary" native-type="submit" :loading="loading">
          {{ t("login.register") }}
        </van-button>
      </div>
    </van-form>

    <div class="login-link">
      <span>{{ t("login.haveAccount") }}</span>
      <van-button type="text" @click="toLogin">{{ t("login.login") }}</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "vant";
import { useI18n } from "vue-i18n";
import AuthAPI, { type LoginFormData } from "@/api/auth.api";
import { showToast } from "vant";

const { t } = useI18n();

const emit = defineEmits<{
  (_e: "update:modelValue", _value: "login"): void;
}>();

const toLogin = () => emit("update:modelValue", "login");

onMounted(() => getCaptcha());

const formRef = ref<FormInstance>();
const loading = ref(false);
const isCapsLock = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const captchaBase64 = ref();
const isRead = ref(false);

interface Model extends LoginFormData {
  confirmPassword: string;
}

const model = ref<Model>({
  username: "admin",
  password: "123456",
  confirmPassword: "",
  captchaKey: "",
  captchaCode: "",
  rememberMe: false,
});

// 获取验证码
const codeLoading = ref(false);
function getCaptcha() {
  codeLoading.value = true;
  AuthAPI.getCaptcha()
    .then((data) => {
      model.value.captchaKey = data.captchaKey;
      captchaBase64.value = data.captchaBase64;
    })
    .finally(() => (codeLoading.value = false));
}

// 检查输入大小写
function checkCapsLock(event: KeyboardEvent) {
  if (event instanceof KeyboardEvent) {
    isCapsLock.value = event.getModifierState("CapsLock");
  }
}

const submit = async () => {
  try {
    if (!isRead.value) {
      showToast(t("login.message.agreement.required"));
      return;
    }

    await formRef.value?.validate();
    loading.value = true;
    // TODO: 实现注册逻辑
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showToast("开发中...");
  } catch (error) {
    console.error("注册失败:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.register-form {
  padding: 16px;
  animation: slide-in 0.3s ease-out;
}

.form-title {
  margin: 0 0 24px;
  font-size: 24px;
  color: var(--van-text-color);
  text-align: center;
}

.agreement {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 16px 0;
  color: var(--van-text-color-2);
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
