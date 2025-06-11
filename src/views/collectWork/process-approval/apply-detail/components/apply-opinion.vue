<template>
  <div class="apply-opinion-container">
    <van-cell-group class="section-card">
      <van-cell title="管理员 2023/12/27 16:25:18" class="section-title">
        <template #right-icon>
          <van-tag class="action-text" type="primary" size="small">发起申请</van-tag>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="approval-item">
        <p>
          <span>岗位名称:</span>
          发起人
        </p>
        <p>
          <span>机构名称:</span>
          总行
        </p>
        <p>
          <span>手机号码:</span>
          15007877240
        </p>
        <p>
          <span>审批意见:</span>
          发起申请
        </p>
      </div>
    </van-cell-group>

    <van-cell-group class="section-card">
      <van-cell title="管理员 2024/07/22 18:05:11" class="section-title">
        <template #right-icon>
          <van-tag class="action-text" type="primary" size="small">转他人处理</van-tag>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="approval-item">
        <p>
          <span>岗位名称:</span>
          团队长
        </p>
        <p>
          <span>机构名称:</span>
          总行
        </p>
        <p>
          <span>手机号码:</span>
          15007877240
        </p>
        <p>
          <span>审批意见:</span>
          我
        </p>
      </div>
    </van-cell-group>

    <van-cell-group class="section-card">
      <van-cell title="卫旗" class="section-title">
        <template #right-icon>
          <van-tag class="action-text" type="primary" size="small">审批中</van-tag>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="approval-item">
        <p>
          <span>岗位名称:</span>
          团队长
        </p>
        <p>
          <span>机构名称:</span>
          大连分部
        </p>
        <p>
          <span>手机号码:</span>
          18505341488
        </p>
        <p><span>审批意见:</span></p>
      </div>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for static display based on screenshot
</script>

<style lang="scss" scoped>
.apply-opinion-container {
  padding: 10px;
  padding-bottom: 124px;
  background-color: #f7f8fa;
}

.section-card {
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.05);

  .section-title {
    padding-top: 10px 0 10px 15px;
    font-size: 12px;
    .action-text {
      padding: 2px 6px;
      margin-right: 5px;
      font-weight: normal;
      color: #409eff;
      background: #ebf5ff;
      border-radius: 4px;
    }
  }

  .approval-header {
    .van-cell__value {
      color: #969799;
    }
  }

  .approval-item {
    padding: 0 16px 10px 16px;
    font-size: 12px;
    line-height: 1.5;
    color: #323233;

    p {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        margin-right: 5px;
        color: #969799;
      }
    }
  }
}
</style>
