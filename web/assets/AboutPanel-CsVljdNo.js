var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createElementBlock, Fragment, renderList, createBaseVNode, toDisplayString, computed, createVNode, unref, createBlock, withCtx, onMounted, normalizeClass, createTextVNode, createCommentVNode } from "./vendor-vue-B7YUw5vA.js";
import { script$10 as script, script$19 as script$1, script$62 as script$2, script$25 as script$3 } from "./vendor-primevue-CBB09Bln.js";
import { formatSize, useSystemStatsStore, useAboutPanelStore, _sfc_main$2 as _sfc_main$3 } from "./index-Co5rVbXs.js";
import "./vendor-vue-i18n-CdFxvEOa.js";
const _hoisted_1$2 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_2$2 = { class: "font-medium" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeviceInfo",
  props: {
    device: {}
  },
  setup(__props) {
    const props = __props;
    const deviceColumns = [
      { field: "name", header: "Name" },
      { field: "type", header: "Type" },
      { field: "vram_total", header: "VRAM Total" },
      { field: "vram_free", header: "VRAM Free" },
      { field: "torch_vram_total", header: "Torch VRAM Total" },
      { field: "torch_vram_free", header: "Torch VRAM Free" }
    ];
    const formatValue = /* @__PURE__ */ __name((value, field) => {
      if (["vram_total", "vram_free", "torch_vram_total", "torch_vram_free"].includes(
        field
      )) {
        return formatSize(value);
      }
      return value;
    }, "formatValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(deviceColumns, (col) => {
          return openBlock(), createElementBlock(Fragment, {
            key: col.field
          }, [
            createBaseVNode("div", _hoisted_2$2, toDisplayString(col.header), 1),
            createBaseVNode("div", null, toDisplayString(formatValue(props.device[col.field], col.field)), 1)
          ], 64);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "system-stats" };
const _hoisted_2$1 = { class: "mb-6" };
const _hoisted_3$1 = { class: "text-2xl font-semibold mb-4" };
const _hoisted_4 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_5 = { class: "font-medium" };
const _hoisted_6 = { class: "text-2xl font-semibold mb-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemStatsPanel",
  props: {
    stats: {}
  },
  setup(__props) {
    const props = __props;
    const systemInfo = computed(() => ({
      ...props.stats.system,
      argv: props.stats.system.argv.join(" ")
    }));
    const systemColumns = [
      { field: "os", header: "OS" },
      { field: "python_version", header: "Python Version" },
      { field: "embedded_python", header: "Embedded Python" },
      { field: "pytorch_version", header: "Pytorch Version" },
      { field: "argv", header: "Arguments" },
      { field: "ram_total", header: "RAM Total" },
      { field: "ram_free", header: "RAM Free" }
    ];
    const formatValue = /* @__PURE__ */ __name((value, field) => {
      if (["ram_total", "ram_free"].includes(field)) {
        return formatSize(value);
      }
      return value;
    }, "formatValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("h2", _hoisted_3$1, toDisplayString(_ctx.$t("g.systemInfo")), 1),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(Fragment, null, renderList(systemColumns, (col) => {
              return openBlock(), createElementBlock(Fragment, {
                key: col.field
              }, [
                createBaseVNode("div", _hoisted_5, toDisplayString(col.header), 1),
                createBaseVNode("div", null, toDisplayString(formatValue(systemInfo.value[col.field], col.field)), 1)
              ], 64);
            }), 64))
          ])
        ]),
        createVNode(unref(script)),
        createBaseVNode("div", null, [
          createBaseVNode("h2", _hoisted_6, toDisplayString(_ctx.$t("g.devices")), 1),
          props.stats.devices.length > 1 ? (openBlock(), createBlock(unref(script$2), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.stats.devices, (device) => {
                return openBlock(), createBlock(unref(script$1), {
                  key: device.index,
                  header: device.name,
                  value: device.index
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, { device }, null, 8, ["device"])
                  ]),
                  _: 2
                }, 1032, ["header", "value"]);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_sfc_main$2, {
            key: 1,
            device: props.stats.devices[0]
          }, null, 8, ["device"]))
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "text-2xl font-bold mb-2" };
const _hoisted_2 = { class: "space-y-2" };
const _hoisted_3 = ["href", "title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AboutPanel",
  setup(__props) {
    const systemStatsStore = useSystemStatsStore();
    const aboutPanelStore = useAboutPanelStore();
    onMounted(async () => {
      if (!systemStatsStore.systemStats) {
        await systemStatsStore.fetchSystemStats();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, {
        value: "About",
        class: "about-container"
      }, {
        default: withCtx(() => [
          createBaseVNode("h2", _hoisted_1, toDisplayString(_ctx.$t("g.about")), 1),
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(aboutPanelStore).badges, (badge) => {
              return openBlock(), createElementBlock("a", {
                key: badge.url,
                href: badge.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "about-badge inline-flex items-center no-underline",
                title: badge.url
              }, [
                createVNode(unref(script$3), { class: "mr-2" }, {
                  icon: withCtx(() => [
                    createBaseVNode("i", {
                      class: normalizeClass([badge.icon, "mr-2 text-xl"])
                    }, null, 2)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(badge.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ], 8, _hoisted_3);
            }), 128))
          ]),
          createVNode(unref(script)),
          unref(systemStatsStore).systemStats ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            stats: unref(systemStatsStore).systemStats
          }, null, 8, ["stats"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=AboutPanel-CsVljdNo.js.map
