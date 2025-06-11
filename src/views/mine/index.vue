<template>
  <div class="mine-container">
    <!-- 顶部个人信息区域 -->
    <div class="user-info-section">
      <div class="avatar-container">
        <van-image
          round
          width="60"
          height="60"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <div class="user-details">
        <div class="username">卫旗</div>
        <div class="department">平安银行大连分行特殊资产管理部</div>
      </div>
    </div>

    <!-- 流程审批模块 -->
    <van-card class="module-card">
      <template #title>
        <div class="card-title">流程审批</div>
      </template>
      <template #content>
        <van-grid :column-num="3" :border="false">
          <van-grid-item text="待审批">
            <template #icon>
              <van-icon name="clock-o" size="24" />
              <van-badge content="3" class="badge-top-right" />
            </template>
          </van-grid-item>
          <van-grid-item text="已逾期">
            <template #icon>
              <van-icon name="friends-o" size="24" />
              <van-badge content="3" class="badge-top-right" />
            </template>
          </van-grid-item>
          <van-grid-item icon="checked" text="已完成" />
        </van-grid>
      </template>
    </van-card>

    <!-- 其他功能列表 -->
    <van-cell-group inset class="function-list">
      <van-cell title="我的关注" is-link icon="star-o" />
      <van-cell title="清除缓存" is-link icon="delete-o" @click="clearCache" />
      <van-cell title="关于我们" is-link icon="info-o" />
    </van-cell-group>

    <!-- vConsole 按钮 -->
    <div class="vconsole-float-btn">
      <van-button type="success" size="small" round>vConsole</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { showToast } from "vant";

const clearCache = () => {
  // 模拟清除缓存操作
  showToast("缓存已清除");
};
</script>

<style lang="scss" scoped>
.mine-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f8fa;
}

.user-info-section {
  display: flex;
  align-items: center;
  padding: 20px;
  color: #fff;
  background-color: #409eff;

  .avatar-container {
    margin-right: 15px;
  }

  .user-details {
    display: flex;
    flex-direction: column;

    .username {
      font-size: 20px;
      font-weight: bold;
    }

    .department {
      margin-top: 5px;
      font-size: 14px;
      opacity: 0.8;
    }
  }
}

.module-card {
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;

  .card-title {
    padding: 10px 16px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #ebedf0;
  }

  :deep(.van-card__content) {
    padding: 0;
  }

  :deep(.van-grid-item__content) {
    padding: 15px 0;
  }

  .badge-top-right {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}

.function-list {
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.vconsole-float-btn {
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 100;
}
</style>
