"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/mac/code/vue3-uni-app/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
