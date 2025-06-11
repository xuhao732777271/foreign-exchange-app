module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      viewportUnit: "vw", // 希望使用的视口单位
      selectorBlackList: [".ignore", ".hairlines"], // 需要忽略的 CSS 选择器
      minPixelValue: 1, // 小于或等于 1px 不转换为视口单位
      mediaQuery: false, // 允许在媒体查询中转换 px
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
    },
    "postcss-viewport-units": {
      filterRule: (rule) =>
        rule.selector.indexOf("::after") === -1 &&
        rule.selector.indexOf("::before") === -1 &&
        rule.selector.indexOf(":after") === -1 &&
        rule.selector.indexOf(":before") === -1,
    },
    "postcss-write-svg": {
      utf8: false,
    },
  },
};
