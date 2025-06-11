<template>
  <div class="home-container">
    <!-- 顶部导航和搜索 -->
    <div class="header-bar">
      <div class="header-search">
        <van-icon name="user-o" class="user-icon" />
        <van-field placeholder="请输入客户/公司名称" class="search-bar" />
      </div>
      <div class="smart-section">
        <div class="smart-text">
          <h1>智慧特管</h1>
          <p>科技赋能外汇</p>
        </div>
      </div>
    </div>

    <!-- 功能模块 -->
    <div class="modules-container">
      <!-- 最近常用 -->
      <div class="module-card">
        <div class="card-title">最近常用</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="流程审批" @click="navigateTo('/assets')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="todo-list-o" size="24" />
                <van-badge content="3" class="badge-top-right" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="定级查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="star-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="奖金查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="gold-coin-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="KPI查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="chart-trending-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 清收作业 -->
      <div class="module-card">
        <div class="card-title">清收作业</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="资产处置" @click="navigateTo('/assets')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="send-gift-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="流程审批" @click="navigateTo('/processApproval')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="todo-list-o" size="24" />
                <van-badge content="3" class="badge-top-right" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="还款查询" @click="navigateTo('/repaymentInquiry')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="gold-coin-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="定期走访报告" @click="navigateTo('/regularVisitReport')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="comment-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="掌上尽调" @click="navigateTo('/palmAdjustment')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="completed" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="项目进展" @click="navigateTo('/projectProgress')">
            <template #icon>
              <div class="icon-background">
                <van-icon name="cashier-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 生态管理 -->
      <div class="module-card">
        <div class="card-title">生态管理</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="律师管理">
            <template #icon>
              <div class="icon-background">
                <van-icon name="manager-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="催收公司管理">
            <template #icon>
              <div class="icon-background">
                <van-icon name="contact" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="服务选聘评审">
            <template #icon>
              <div class="icon-background">
                <van-icon name="star-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="合规环境评审">
            <template #icon>
              <div class="icon-background">
                <van-icon name="certificate" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 智慧分析 -->
      <div class="module-card">
        <div class="card-title">智慧分析</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="关键指标">
            <template #icon>
              <div class="icon-background">
                <van-icon name="chart-trending-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="实时战报">
            <template #icon>
              <div class="icon-background">
                <van-icon name="bullhorn-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="回收">
            <template #icon>
              <div class="icon-background">
                <van-icon name="replay" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="资产">
            <template #icon>
              <div class="icon-background">
                <van-icon name="gold-coin-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 绩效管理 -->
      <div class="module-card">
        <div class="card-title">绩效管理</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="业绩查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="chart-trending-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="KPI查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="chart-trending-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="奖金查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="gold-coin-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="定级查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="star-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 全景画像 -->
      <div class="module-card">
        <div class="card-title">全景画像</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="客户画像(新)">
            <template #icon>
              <div class="icon-background">
                <van-icon name="manager-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="律师画像">
            <template #icon>
              <div class="icon-background">
                <van-icon name="manager-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 特管智库 -->
      <div class="module-card">
        <div class="card-title">特管智库</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="优秀案例">
            <template #icon>
              <div class="icon-background">
                <van-icon name="coupon-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="外部法规">
            <template #icon>
              <div class="icon-background">
                <van-icon name="description-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="内部政策">
            <template #icon>
              <div class="icon-background">
                <van-icon name="description-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="学习园地">
            <template #icon>
              <div class="icon-background">
                <van-icon name="edit" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 辅助工具 -->
      <div class="module-card">
        <div class="card-title">辅助工具</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item text="诉讼费试算">
            <template #icon>
              <div class="icon-background">
                <van-icon name="setting-o" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="身份归属地查询">
            <template #icon>
              <div class="icon-background">
                <van-icon name="idcard" size="24" />
              </div>
            </template>
          </van-grid-item>
          <van-grid-item text="卓越服务评价">
            <template #icon>
              <div class="icon-background">
                <van-icon name="like-o" size="24" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  background: #f7f8fa;
  // padding-bottom: 50px; // 为底部导航栏留出空间

  .header-bar {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 140px;
    padding: 10px;
    color: #fff;
    background-color: #409eff; // 蓝色背景

    .header-search {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;

      .user-icon {
        font-size: 24px;
      }

      .search-bar {
        width: 80%;
        padding: 0 10px;
        margin: 0 10px;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;

        :deep(.van-field__control) {
          color: #fff;
          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        }
        :deep(.van-field__body) {
          height: 32px;
        }
      }
    }
  }

  .smart-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 15px 0 15px;
    color: #fff;

    .smart-text {
      h1 {
        margin: 0;
        font-size: 28px;
      }
      p {
        margin-top: 5px;
        font-size: 16px;
      }
    }
  }

  .modules-container {
    padding: 20px 10px 50px;
    margin-top: 150px;
    overflow-y: auto; // 允许内容滚动
    background-color: #f7f8fa;
  }

  .module-card {
    padding: 5px 0;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px 4px rgba(0, 0, 0, 0.05);

    .card-title {

      // 添加渐变线条
      position: relative; // 确保伪元素定位正确
      padding: 10px 16px;
      font-size: 16px;
      font-weight: bold;

      &::after {
        position: absolute;
        top: 29px; // 调整与标题底部的距离
        left: 16px;
        width: 64px;
        height: 3px; // 渐变线条的高度
        content: "";
        background: linear-gradient(to right, #ffa115, #ff7631); // 渐变颜色
      }
    }

    :deep(.div__content) {
      padding: 0;
    }

    :deep(.van-grid-item__content) {
      padding: 15px 0;
    }
    :deep(.van-grid-item__text) {
      margin-top: 8px;
    }
    .icon-background {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background-color: #f6f9fc; // 圆形背景颜色
      border-radius: 50%; // 圆形背景
    }

    .badge-top-right {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .vconsole-grid-item {
    :deep(.van-grid-item__content) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0; // Remove default padding for button
    }
    .van-button {
      width: 80%; // Make button smaller
      height: 80%;
    }
  }
}
</style>
