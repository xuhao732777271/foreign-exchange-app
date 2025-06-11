<template>
  <div class="assets-container">
    <div class="container-header">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="流程审批" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <van-tabs v-model:active="activeTab" @click-tab="onClickTab">
        <van-tab title="待办(3)" name="0"></van-tab>
        <van-tab title="已办(0)" name="1"></van-tab>
      </van-tabs>
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 代办列表 -->
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多数据了"
        @load="onLoad"
      >
        <van-cell-group class="asset-list">
          <van-cell v-for="item in assets" :key="item.id" @click="goDetail(item)">
            <template #title>
              <div class="title-with-tag">
                <span class="title-text">{{ item.title }}</span>
                <van-tag class="title-tag" type="primary" size="small">待审批</van-tag>
              </div>
            </template>
            <template #label>
              <div class="asset-info">
                <div class="info-item-full">{{ item.description }}</div>
                <div class="info-row">
                  <div class="info-item">
                    <span>申请人:</span>
                    <span>{{ item.applicant }}</span>
                  </div>
                  <div class="info-item">
                    <span>机构名称:</span>
                    <span>{{ item.organization }}</span>
                  </div>
                  <div class="info-item">
                    <span>申请时间:</span>
                    <span>{{ item.applicationTime }}</span>
                  </div>
                </div>
              </div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const loading = ref(false);
const finished = ref(false);
const router = useRouter();
const activeTab = ref(0);

const assets = ref([
  {
    id: 1,
    title: "评估委托",
    description:
      "关于委托山西尚进和三交通发展股份有限公司对消金客户卢丹等13个客户进行资产评估的申请",
    applicant: "管理员",
    organization: "特管",
    applicationTime: "2023/12/27 16:25:21",
  },
  {
    id: 2,
    title: "对公律师聘任到期评价",
    description: "关于北京市中伦(南京)律师事务所尹慕轮律师的聘任到期评价",
    applicant: "技股份有限公司",
    organization: "特管",
    applicationTime: "2025/01/03 13:07:48",
  },
  {
    id: 3,
    title: "对公律师聘任到期评价",
    description: "关于北京市中伦(南京)律师事务所尹慕轮律师的聘任到期评价",
    applicant: "技股份有限公司",
    organization: "特管",
    applicationTime: "2025/01/10 00:12:12",
  },
]);
const onLoad = () => {
  setTimeout(() => {
    // 创建符合类型的新数据
    const newItems = Array.from({ length: 2 }, (_, i) => ({
      id: assets.value.length + i + 1,
      title: `新申请 ${assets.value.length + i}`,
      description: "示例描述内容",
      applicant: "新申请人",
      organization: "新机构",
      applicationTime: new Date().toLocaleString(),
    }));

    assets.value.push(...newItems);
    loading.value = false;

    // 根据实际业务需求调整终止条件
    finished.value = assets.value.length >= 10;
  }, 1000);
};

// 切换tab时重置数据
const onClickTab = () => {
  assets.value = [];
  finished.value = false;
  loading.value = true;
  onLoad();
};

const goDetail = (row: any) => {
  console.log(row, "【 goDetail 】");
  router.push({
    name: "ApprovalDetail",
  });
};

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
    overflow-y: auto;
    background-color: #f7f8fa;
  }
}

.asset-list {
  padding: 10px;
  background-color: #f7f8fa;

  .van-cell {
    align-items: flex-start;
    padding: 10px 16px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.05);

    .title-with-tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: bold;

      .title-tag {
        padding: 2px 6px;
        color: #409eff;
        background-color: #ebf5ff;
        border-radius: 4px;
      }
    }

    .asset-info {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      font-size: 13px;
      color: #969799;

      .info-item-full {
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 1.5;
        color: #323233;
      }

      .info-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 20px;
        justify-content: space-between;

        .info-item {
          display: flex;
          gap: 5px;
          white-space: nowrap;
        }
      }
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
      background: #409eff;
    }
    .van-tabs__line {
      background: #fff;
    }
  }
}
</style>
