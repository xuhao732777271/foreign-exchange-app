<template>
  <div class="apply-summary-container">
    <!-- 申请信息 -->
    <van-cell-group class="section-card">
      <van-cell title="申请信息" class="section-title">
        <template #right-icon>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <van-cell
        title="任务名称"
        value="关于委托山西前进和三交通发展股份有限公司对消金客户凤凰丹等13个客户进行资产评估的申请"
      />
      <van-cell title="申请人" value="管理员" />
      <van-cell title="申请时间" value="2023/12/27 16:25:21" />
    </van-cell-group>

    <!-- 申请事项 -->
    <van-cell-group class="section-card">
      <van-cell title="申请事项" class="section-title">
        <template #right-icon>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="apply-details">
        <p>(1) 本次拟委托山西前进和三交通发展股份有限公司评估机构进行评估</p>
        <p>(2) 评估类型: 债权</p>
        <p>(3) 本次拟委托客户如下:</p>
        <p>(4) 核心资产描述如下:</p>
        <p>(5) 评估委托方: 平安银行</p>
        <p>(6) 采购方式: 询价</p>
        <p>(7) 选聘过程及选聘结果: 给对方。详细过程见招投标项目</p>
        <p>(8) 委托必要性: 对公</p>
      </div>
    </van-cell-group>

    <!-- 审批要点 -->
    <van-cell-group class="section-card">
      <van-cell title="审批要点" class="section-title">
        <template #right-icon>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="apply-details">
        <p>(1) 该评估公司为库内</p>
        <p>(2) 该评估委托为：非司法评估，评估目的是非个贷批转委托估值</p>
        <p>(3) 本次评估费为：1.90元</p>
        <p>(4) 本次为新委托外评机构</p>
        <p>(5) 评估委托方: 平安银行</p>
      </div>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.apply-summary-container {
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
    padding-top: 15px;
    padding-bottom: 0px; // remove default padding bottom
    padding-left: 15px;
    font-size: 16px;
    font-weight: bold;
  }
}

.apply-details {
  padding: 0 16px 10px 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #323233;

  p {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.approval-points {
  padding: 0 16px 10px 16px;
  .van-field {
    padding: 8px 10px;
    background-color: #f7f8fa;
    border-radius: 4px;
  }
  .word-count {
    margin-top: 5px;
    font-size: 12px;
    color: #969799;
    text-align: right;
  }
}
</style>
