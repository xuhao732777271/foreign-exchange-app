<template>
  <div class="assets-container">
    <div class="container-header">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="评估委托" left-arrow @click-left="onClickLeft"></van-nav-bar>
      <van-tabs v-model:active="activeName">
        <van-tab title="申请概要" name="summary" />
        <van-tab title="审批意见" name="opinion" />
        <van-tab title="附件信息" name="attachment" />
      </van-tabs>
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <div v-if="activeName === 'summary'">
        <ApplySummary />
      </div>
      <div v-if="activeName === 'opinion'">
        <ApplyOpinion />
      </div>
      <div v-if="activeName === 'attachment'">
        <ApplyAttachment />
      </div>
    </div>

    <!-- 底部固定输入框和按钮 -->
    <div class="fixed-bottom">
      <div class="input-area">
        <van-field
          v-model="approvalOpinion"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入审批意见"
          maxlength="5000"
          show-word-limit
        ></van-field>
      </div>
      <div class="buttons">
        <van-button class="button deny-button">不同意</van-button>
        <van-button class="button agree-button">同意</van-button>
        <van-button class="button more-options-button">更多意见</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ApplySummary from "./components/apply-summary.vue";
import ApplyOpinion from "./components/apply-opinion.vue";
import ApplyAttachment from "./components/apply-attachment.vue";

const router = useRouter();
const activeName = ref("summary");
const approvalOpinion = ref("");

const onClickLeft = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.assets-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;

  .container-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 88px;
    background: #409eff;
  }

  .main-content {
    position: absolute;
    top: 88px;
    width: 100%;
    overflow-y: auto;
    background-color: #f7f8fa;
  }
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

  .input-area {
    position: relative;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    .button {
      flex: 1;
      height: 40px;
      margin: 0 5px;
      font-size: 16px;
      border-radius: 8px;
    }
    .deny-button {
      color: #323233;
      background-color: #fff;
      border: 1px solid #ebedf0;
    }
    .agree-button {
      color: #fff;
      background-color: #409eff;
      border: none;
    }
    .more-options-button {
      color: #323233;
      background-color: #fff;
      border: 1px solid #ebedf0;
    }
  }
}
</style>

<style lang="scss">
.assets-container {
  .van-nav-bar {
    height: 46px;
    background: #409eff;
    .van-nav-bar__title,
    .van-icon {
      color: #fff;
    }
    &::after {
      border-bottom-width: 0px;
    }
  }

  .tab-content {
    padding: 10px;
  }
  .van-tabs {
    width: 100%;
    height: 42px;
    background: #409eff;
    .van-tab,
    .van-tabs__wrap {
      color: #fff;
      background: #409eff;
    }
    .van-tabs__nav,
    .van-tabs__nav--line {
      padding-bottom: 8px;
      background: #409eff !important;
    }
    .van-tabs__line {
      background: #fff;
    }
  }
}
</style>
