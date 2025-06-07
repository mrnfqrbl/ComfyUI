var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, computed, ref, openBlock, createBlock, withCtx, createBaseVNode, toDisplayString, createVNode, unref, createElementBlock, createCommentVNode, normalizeClass } from "./vendor-vue-B7YUw5vA.js";
import { script$10 as script, script$30 as script$1, script$2, script$38 as script$3, script$37 as script$4, script$19 as script$5 } from "./vendor-primevue-CBB09Bln.js";
import { useI18n } from "./vendor-vue-i18n-CdFxvEOa.js";
import { useDialogService, useFirebaseAuthStore, useFirebaseAuthActions, _sfc_main as _sfc_main$1, formatMetronomeCurrency } from "./index-Co5rVbXs.js";
const _hoisted_1 = { class: "flex flex-col h-full" };
const _hoisted_2 = { class: "text-2xl font-bold mb-2" };
const _hoisted_3 = { class: "flex flex-col gap-2" };
const _hoisted_4 = { class: "text-sm font-medium text-muted" };
const _hoisted_5 = { class: "flex justify-between items-center" };
const _hoisted_6 = { class: "flex flex-row items-center" };
const _hoisted_7 = {
  key: 1,
  class: "text-xs text-muted"
};
const _hoisted_8 = { class: "flex justify-between items-center mt-8" };
const _hoisted_9 = {
  key: 0,
  class: "flex-grow"
};
const _hoisted_10 = { class: "text-sm font-medium" };
const _hoisted_11 = { class: "text-xs text-muted" };
const _hoisted_12 = { class: "flex flex-row gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreditsPanel",
  setup(__props) {
    const { t } = useI18n();
    const dialogService = useDialogService();
    const authStore = useFirebaseAuthStore();
    const authActions = useFirebaseAuthActions();
    const loading = computed(() => authStore.loading);
    const balanceLoading = computed(() => authStore.isFetchingBalance);
    const formattedLastUpdateTime = computed(
      () => authStore.lastBalanceUpdateTime ? authStore.lastBalanceUpdateTime.toLocaleString() : ""
    );
    const handlePurchaseCreditsClick = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
    }, "handlePurchaseCreditsClick");
    const handleCreditsHistoryClick = /* @__PURE__ */ __name(async () => {
      await authActions.accessBillingPortal();
    }, "handleCreditsHistoryClick");
    const handleMessageSupport = /* @__PURE__ */ __name(() => {
      dialogService.showIssueReportDialog({
        title: t("issueReport.contactSupportTitle"),
        subtitle: t("issueReport.contactSupportDescription"),
        panelProps: {
          errorType: "BillingSupport",
          defaultFields: ["Workflow", "Logs", "SystemStats", "Settings"]
        }
      });
    }, "handleMessageSupport");
    const handleFaqClick = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/tutorials/api-nodes/faq", "_blank");
    }, "handleFaqClick");
    const creditHistory = ref([]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$5), {
        value: "Credits",
        class: "credits-container h-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("credits.credits")), 1),
            createVNode(unref(script)),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("h3", _hoisted_4, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_sfc_main$1, { "text-class": "text-3xl font-bold" }),
                loading.value ? (openBlock(), createBlock(unref(script$1), {
                  key: 0,
                  width: "2rem",
                  height: "2rem"
                })) : (openBlock(), createBlock(unref(script$2), {
                  key: 1,
                  label: _ctx.$t("credits.purchaseCredits"),
                  loading: loading.value,
                  onClick: handlePurchaseCreditsClick
                }, null, 8, ["label", "loading"]))
              ]),
              createBaseVNode("div", _hoisted_6, [
                balanceLoading.value ? (openBlock(), createBlock(unref(script$1), {
                  key: 0,
                  width: "12rem",
                  height: "1rem",
                  class: "text-xs"
                })) : formattedLastUpdateTime.value ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(_ctx.$t("credits.lastUpdated")) + ": " + toDisplayString(formattedLastUpdateTime.value), 1)) : createCommentVNode("", true),
                createVNode(unref(script$2), {
                  icon: "pi pi-refresh",
                  text: "",
                  size: "small",
                  severity: "secondary",
                  onClick: _cache[0] || (_cache[0] = () => unref(authActions).fetchBalance())
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(unref(script$2), {
                label: _ctx.$t("credits.invoiceHistory"),
                text: "",
                severity: "secondary",
                icon: "pi pi-arrow-up-right",
                loading: loading.value,
                onClick: handleCreditsHistoryClick
              }, null, 8, ["label", "loading"])
            ]),
            creditHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createVNode(unref(script$4), {
                value: creditHistory.value,
                "show-headers": false
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$3), {
                    field: "title",
                    header: _ctx.$t("g.name")
                  }, {
                    body: withCtx(({ data }) => [
                      createBaseVNode("div", _hoisted_10, toDisplayString(data.title), 1),
                      createBaseVNode("div", _hoisted_11, toDisplayString(data.timestamp), 1)
                    ]),
                    _: 1
                  }, 8, ["header"]),
                  createVNode(unref(script$3), {
                    field: "amount",
                    header: _ctx.$t("g.amount")
                  }, {
                    body: withCtx(({ data }) => [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "text-base font-medium text-center",
                          data.isPositive ? "text-sky-500" : "text-red-400"
                        ])
                      }, toDisplayString(data.isPositive ? "+" : "-") + "$" + toDisplayString(unref(formatMetronomeCurrency)(data.amount, "usd")), 3)
                    ]),
                    _: 1
                  }, 8, ["header"])
                ]),
                _: 1
              }, 8, ["value"])
            ])) : createCommentVNode("", true),
            createVNode(unref(script)),
            createBaseVNode("div", _hoisted_12, [
              createVNode(unref(script$2), {
                label: _ctx.$t("credits.faqs"),
                text: "",
                severity: "secondary",
                icon: "pi pi-question-circle",
                onClick: handleFaqClick
              }, null, 8, ["label"]),
              createVNode(unref(script$2), {
                label: _ctx.$t("credits.messageSupport"),
                text: "",
                severity: "secondary",
                icon: "pi pi-comments",
                onClick: handleMessageSupport
              }, null, 8, ["label"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CreditsPanel-B1c-Q3ey.js.map
