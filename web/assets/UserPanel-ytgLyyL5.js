import { defineComponent, resolveDirective, openBlock, createBlock, withCtx, createBaseVNode, toDisplayString, createVNode, unref, createElementBlock, createCommentVNode, normalizeClass, createTextVNode, withDirectives } from "./vendor-vue-B7YUw5vA.js";
import { script$10 as script, script$2 as script$1, script$29 as script$2, script$19 as script$3 } from "./vendor-primevue-CBB09Bln.js";
import { _sfc_main as _sfc_main$1 } from "./UserAvatar-CwpUZ8L2.js";
import { useDialogService, useCurrentUser } from "./index-Co5rVbXs.js";
import "./vendor-vue-i18n-CdFxvEOa.js";
const _hoisted_1 = { class: "flex flex-col h-full" };
const _hoisted_2 = { class: "text-2xl font-bold mb-2" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-col gap-2"
};
const _hoisted_4 = { class: "flex flex-col gap-0.5" };
const _hoisted_5 = { class: "font-medium" };
const _hoisted_6 = { class: "text-muted" };
const _hoisted_7 = { class: "flex flex-col gap-0.5" };
const _hoisted_8 = { class: "font-medium" };
const _hoisted_9 = { class: "text-muted" };
const _hoisted_10 = { class: "flex flex-col gap-0.5" };
const _hoisted_11 = { class: "font-medium" };
const _hoisted_12 = { class: "text-muted flex items-center gap-1" };
const _hoisted_13 = {
  key: 1,
  class: "flex flex-col gap-4"
};
const _hoisted_14 = { class: "text-gray-600" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserPanel",
  setup(__props) {
    const dialogService = useDialogService();
    const {
      loading,
      isLoggedIn,
      isEmailProvider,
      userDisplayName,
      userEmail,
      userPhotoUrl,
      providerName,
      providerIcon,
      handleSignOut,
      handleSignIn
    } = useCurrentUser();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(unref(script$3), {
        value: "User",
        class: "user-settings-container h-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("userSettings.title")), 1),
            createVNode(unref(script), { class: "mb-3" }),
            unref(isLoggedIn) ? (openBlock(), createElementBlock("div", _hoisted_3, [
              unref(userPhotoUrl) ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                "photo-url": unref(userPhotoUrl),
                shape: "circle",
                size: "large"
              }, null, 8, ["photo-url"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("h3", _hoisted_5, toDisplayString(_ctx.$t("userSettings.name")), 1),
                createBaseVNode("div", _hoisted_6, toDisplayString(unref(userDisplayName) || _ctx.$t("userSettings.notSet")), 1)
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("h3", _hoisted_8, toDisplayString(_ctx.$t("userSettings.email")), 1),
                createBaseVNode("span", _hoisted_9, toDisplayString(unref(userEmail)), 1)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("h3", _hoisted_11, toDisplayString(_ctx.$t("userSettings.provider")), 1),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("i", {
                    class: normalizeClass(unref(providerIcon))
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(unref(providerName)) + " ", 1),
                  unref(isEmailProvider) ? withDirectives((openBlock(), createBlock(unref(script$1), {
                    key: 0,
                    icon: "pi pi-pen-to-square",
                    severity: "secondary",
                    text: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(dialogService).showUpdatePasswordDialog())
                  }, null, 512)), [
                    [_directive_tooltip, {
                      value: _ctx.$t("userSettings.updatePassword"),
                      showDelay: 300
                    }]
                  ]) : createCommentVNode("", true)
                ])
              ]),
              unref(loading) ? (openBlock(), createBlock(unref(script$2), {
                key: 1,
                class: "w-8 h-8 mt-4",
                style: { "--pc-spinner-color": "#000" }
              })) : (openBlock(), createBlock(unref(script$1), {
                key: 2,
                class: "mt-4 w-32",
                severity: "secondary",
                label: _ctx.$t("auth.signOut.signOut"),
                icon: "pi pi-sign-out",
                onClick: unref(handleSignOut)
              }, null, 8, ["label", "onClick"]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
              createBaseVNode("p", _hoisted_14, toDisplayString(_ctx.$t("auth.login.title")), 1),
              createVNode(unref(script$1), {
                class: "w-52",
                severity: "primary",
                loading: unref(loading),
                label: _ctx.$t("auth.login.signInOrSignUp"),
                icon: "pi pi-user",
                onClick: unref(handleSignIn)
              }, null, 8, ["loading", "label", "onClick"])
            ]))
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
//# sourceMappingURL=UserPanel-ytgLyyL5.js.map
