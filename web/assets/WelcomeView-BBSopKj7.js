var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createBlock, withCtx, createBaseVNode, toDisplayString, createVNode, unref } from "./vendor-vue-B7YUw5vA.js";
import { script$2 as script } from "./vendor-primevue-CBB09Bln.js";
import { useRouter, _export_sfc } from "./index-Co5rVbXs.js";
import { _sfc_main as _sfc_main$1 } from "./BaseViewTemplate-T3J2Na2f.js";
import "./vendor-vue-i18n-CdFxvEOa.js";
const _hoisted_1 = { class: "flex flex-col items-center justify-center gap-8 p-8" };
const _hoisted_2 = { class: "animated-gradient-text text-glow select-none" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WelcomeView",
  setup(__props) {
    const router = useRouter();
    const navigateTo = /* @__PURE__ */ __name(async (path) => {
      await router.push(path);
    }, "navigateTo");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("welcome.title")), 1),
            createVNode(unref(script), {
              label: _ctx.$t("welcome.getStarted"),
              icon: "pi pi-arrow-right",
              "icon-pos": "right",
              size: "large",
              rounded: "",
              class: "p-4 text-lg fade-in-up",
              onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("/install"))
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const WelcomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f018581"]]);
export {
  WelcomeView as default
};
//# sourceMappingURL=WelcomeView-BBSopKj7.js.map
