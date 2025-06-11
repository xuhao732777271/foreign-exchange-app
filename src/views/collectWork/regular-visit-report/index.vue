<template>
  <div class="assets-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="资产处置" left-arrow @click-left="onClickLeft" />

    <!-- Tab 切换 -->
    <van-tabs v-model:active="activeTab" sticky animated>
      <van-tab title="对公">
        <div class="tab-content">
          <!-- 数据概览 -->
          <div class="data-overview">
            <div class="data-item">
              <span class="label">数据日期:</span>
              <span class="value">2025年06月09日</span>
            </div>
            <div class="data-item">
              <span class="label">客户数</span>
              <span class="value">113</span>
            </div>
            <div class="data-item">
              <span class="label">贷款余额 (元)</span>
              <span class="value">1,428,794,786.21</span>
            </div>
          </div>

          <!-- 资产列表 -->
          <div class="asset-list">
            <van-cell-group inset>
              <van-cell v-for="item in assets" :key="item.id" :title="item.companyName" is-link>
                <template #label>
                  <div class="asset-info">
                    <div class="info-item">
                      <span>主管人:</span>
                      <span>{{ item.manager }}</span>
                    </div>
                    <div class="info-item">
                      <span>当前本金余额(元):</span>
                      <span>{{ item.currentBalance }}</span>
                    </div>
                  </div>
                </template>
                <template #right-icon>
                  <van-icon name="like-o" :color="item.isFavorite ? 'red' : ''" />
                </template>
                <template #extra>
                  <van-tag v-if="item.isBigProject" type="primary" size="small">大项目</van-tag>
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </div>
      </van-tab>
      <van-tab title="小额贷">
        <div class="tab-content">
          <van-empty description="暂无小额贷资产" />
        </div>
      </van-tab>
    </van-tabs>

    <!-- vConsole 按钮 -->
    <div class="vconsole-float-btn">
      <van-button type="success" size="small" round>vConsole</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref(0);

const assets = ref([
  {
    id: 1,
    companyName: "石弓机电股份有限公司",
    manager: "茅僧辞",
    currentBalance: "454,861,510.58",
    isFavorite: false,
    isBigProject: true,
  },
  {
    id: 2,
    companyName: "厦门海泾旭康声学股份有限公司",
    manager: "倪锐步",
    currentBalance: "189,000,000.00",
    isFavorite: true,
    isBigProject: false,
  },
  {
    id: 3,
    companyName: "拉链科技股份有限公司",
    manager: "茅僧辞",
    currentBalance: "89,506,604.18",
    isFavorite: false,
    isBigProject: true,
  },
  {
    id: 4,
    companyName: "超微线材股份有限公司",
    manager: "茅僧辞",
    currentBalance: "89,000,000.00",
    isFavorite: false,
    isBigProject: false,
  },
]);

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
