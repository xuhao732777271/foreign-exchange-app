<template>
  <div class="apply-attachment-container">
    <van-cell-group class="section-card">
      <van-cell title="委托协议(司法评估上传法院委托函)" class="section-title">
        <template #right-icon>
          <span class="file-count">共1个</span>
          <van-icon name="arrow-up" />
        </template>
      </van-cell>
      <div class="file-item">
        <!-- <img src="/images/doc.png" alt="doc icon" class="file-icon" /> -->
        <div class="file-info">
          <p class="file-name">lawCaseSchedule案件轮询第一步改造.docx</p>
          <p class="file-date">2023/12/27 16:23:48</p>
        </div>
      </div>
    </van-cell-group>
    <div class="no-more-data">没有更多数据了</div>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for static display based on screenshot
</script>

<style lang="scss" scoped>
.apply-attachment-container {
  padding: 10px;
  background-color: #f7f8fa;
}

.section-card {
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.05);

  .section-title {
    padding-top: 15px;
    padding-bottom: 0px;
    padding-left: 15px;
    font-size: 16px;
    font-weight: bold;
    .file-count {
      margin-right: 5px;
      font-weight: normal;
      color: #969799;
    }
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 10px 16px;

    .file-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .file-info {
      .file-name {
        margin-bottom: 4px;
        font-size: 14px;
        color: #323233;
      }
      .file-date {
        font-size: 12px;
        color: #969799;
      }
    }
  }
}

.no-more-data {
  padding: 20px 0;
  font-size: 14px;
  color: #969799;
  text-align: center;
}
</style>
