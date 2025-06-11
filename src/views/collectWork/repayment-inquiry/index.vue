<template>
  <div class="assets-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="资产处置" left-arrow @click-left="onClickLeft" />
    <div class="main-content">
      <van-tabs v-model:active="activeTab" @click-tab="onClickTab" offset-top="46px" sticky>
        <van-tab title="待办(3)" name="0"></van-tab>
        <van-tab title="已办(0)" name="1"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref(0);

// 切换tab时重置数据
const onClickTab = () => {
  console.log("【 onClickTab 】");
};

const onClickLeft = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.assets-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f8fa;
}

.van-nav-bar {
  background-color: #409eff;
  .van-nav-bar__title,
  .van-icon {
    color: #fff;
  }
}

.tab-content {
  padding: 10px;
}

.data-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
  margin-bottom: 15px;
  color: #fff;
  background-color: #409eff;
  border-radius: 8px;

  .data-item {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 14px;
      opacity: 0.8;
    }

    .value {
      margin-top: 5px;
      font-size: 18px;
      font-weight: bold;
    }

    &:nth-child(3) {
      grid-column: span 2;
      text-align: center;

      .value {
        font-size: 24px;
      }
    }
  }
}

.asset-list {
  .van-cell-group {
    overflow: hidden;
    border-radius: 8px;
  }

  .van-cell {
    align-items: center;

    .asset-info {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      font-size: 13px;
      color: #969799;

      .info-item {
        display: flex;
        gap: 5px;
        margin-bottom: 3px;
      }
    }

    .van-icon {
      margin-left: 10px;
      font-size: 20px;
    }
  }
}

.vconsole-float-btn {
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 100;
}
</style>
