<template>
  <div class="assets-container">
    <div class="container-header">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="评估委托" left-arrow @click-left="onClickLeft" />
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 申请事项 -->
      <div class="section application-info">
        <div class="section-title">
          <p>关于委托山西尚进和三交通发展股份有限公司对消金客户凤丹等13个客户进行资产评估的申请</p>
          <p class="business-id">业务流水号: PG2023122700002395</p>
        </div>
      </div>

      <div class="section application-details">
        <div class="section-title">
          申请事项
          <span class="detail-link" @click="goDetail">详情 ></span>
        </div>
        <ul>
          <li>(1) 本次拟委托山西尚进和三交通发展股份有限公司评估机构进行评估</li>
          <li>(2) 评估类型: 债权</li>
          <li>(3) 本次拟委托客户如下:</li>
          <li v-if="showMore">(4) 核心资产描述如下:</li>
          <li v-if="showMore">(5) 评估委托方: 平安银行</li>
        </ul>
        <div class="view-more" @click="toggleShowMore">
          {{ showMore ? "收起" : "查看更多" }}
          <van-icon :name="showMore ? 'arrow-up' : 'arrow-down'" />
        </div>
      </div>

      <!-- 审批意见 -->
      <div class="section approval-opinions">
        <div class="section-title">审批意见</div>
        <div class="opinion-item">
          <div class="status-icon approved"></div>
          <div class="opinion-content">
            <p>管理员 2023/12/27 16:25:18</p>
            <p class="opinion-text">发起申请</p>
          </div>
          <div class="action-status">发起申请</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon approved"></div>
          <div class="opinion-content">
            <p>管理员 2024/07/22 18:05:11</p>
            <p class="opinion-text">我</p>
          </div>
          <div class="action-status">转他人处理</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>卫旗</p>
          </div>
          <div class="action-status">审批中</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
        <div class="opinion-item">
          <div class="status-icon pending"></div>
          <div class="opinion-content">
            <p>管理员</p>
          </div>
          <div class="action-status">待审批</div>
        </div>
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.go(-1);
};

const showMore = ref(false);
const approvalOpinion = ref("");

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const goDetail = (row: any) => {
  console.log(row, "【 goDetail 】");
  router.push({
    name: "ApplyDetail",
  });
};
</script>

<style lang="scss" scoped>
.assets-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;

  .container-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 46px;
    background: #409eff;
  }

  .main-content {
    box-sizing: border-box;
    flex: 1;
    padding-top: 46px;
    padding-bottom: 124px;
    overflow-y: auto;
  }

  .section {
    padding: 15px;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 8px;
  }

  .application-info {
    .section-title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .business-id {
      font-size: 14px;
      color: #999;
    }
  }

  .application-details {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    li {
      margin-bottom: 8px;
      font-size: 14px;
      color: #333;
    }
    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .detail-link {
      font-size: 14px;
      color: #409eff;
    }
    .view-more {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      font-size: 14px;
      color: #409eff;
      text-align: center;
      cursor: pointer;
      .van-icon {
        margin-left: 5px;
      }
    }
  }

  .approval-opinions {
    .section-title {
      margin-bottom: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    .opinion-item {
      position: relative;
      display: flex;
      align-items: flex-start;
      padding-left: 20px;
      margin-bottom: 20px;
      &::before {
        position: absolute;
        top: 0;
        bottom: -20px; /* Extend line downwards */
        left: 5px;
        z-index: 1;
        width: 2px;
        content: "";
        background-color: #eee;
      }
      &:last-child::before {
        bottom: 0; /* No line below the last item */
      }
    }
    .status-icon {
      position: absolute;
      top: 2px; /* Adjust vertical position */
      left: 0;
      z-index: 2;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .status-icon.approved {
      background-color: #67c23a;
    }
    .status-icon.pending {
      background-color: #909399;
    }
    .opinion-content {
      flex: 1;
      margin-left: 10px;
      p {
        margin: 0;
        font-size: 14px;
        color: #333;
      }
      .opinion-text {
        margin-top: 2px;
        font-size: 12px;
        color: #666;
      }
    }
    .action-status {
      padding: 3px 8px;
      font-size: 12px;
      color: #67c23a; /* Green for approved, grey for pending */
      background-color: #e6f3e6;
      border-radius: 4px;
    }
    .opinion-item:nth-child(3) .action-status {
      color: #909399;
      background-color: #f2f2f2;
    }
    .opinion-item:not(:nth-child(-n + 2)) .action-status {
      color: #909399; /* Grey for "待审批" */
      background-color: #f2f2f2;
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
}

:deep(.van-field__word-limit) {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
:deep(.van-field__right-icon) {
  display: none;
}
:deep(.van-field__button) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 10px;
}
:deep(.van-field__control) {
  padding-bottom: 20px;
}
</style>
