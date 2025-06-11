import type { RouteRecordRaw } from "vue-router";

const collectWork: RouteRecordRaw = {
  path: "/collectWork",
  name: "collectWork",
  meta: { hidden: true },
  children: [
    {
      path: "/processApproval",
      name: "ProcessApproval",
      meta: { title: "流程审批", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/process-approval/index.vue"),
    },
    {
      path: "/repaymentInquiry",
      name: "RepaymentInquiry",
      meta: { title: "还款查询", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/repayment-inquiry/index.vue"),
    },
    {
      path: "/regularVisitReport",
      name: "RegularVisitReport",
      meta: { title: "定期走访报告", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/regular-visit-report/index.vue"),
    },
    {
      path: "/palmAdjustment",
      name: "PalmAdjustment",
      meta: { title: "掌上尽调", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/palm-adjustment/index.vue"),
    },
    {
      path: "/projectProgress",
      name: "ProjectProgress",
      meta: { title: "项目进展", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/project-progress/index.vue"),
    },
    {
      path: "/approvalDetail",
      name: "ApprovalDetail",
      meta: { title: "审批详情", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/process-approval/approval-detail/index.vue"),
    },
    {
      path: "/applyDetail",
      name: "ApplyDetail",
      meta: { title: "申请详情", icon: "apps-o", keepAlive: true },
      component: () => import("@/views/collectWork/process-approval/apply-detail/index.vue"),
    },
  ],
};

export default collectWork;
