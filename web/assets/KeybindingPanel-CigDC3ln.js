var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createVNode, withCtx, createTextVNode, toDisplayString, unref, createCommentVNode, ref, watchEffect, resolveDirective, createBlock, createBaseVNode, withModifiers, withDirectives } from "./vendor-vue-B7YUw5vA.js";
import { script$25 as script, FilterMatchMode, useToast, script$38 as script$1, script$2, script$37 as script$3, script$6 as script$4, script$3 as script$5, script as script$6 } from "./vendor-primevue-CBB09Bln.js";
import { useI18n } from "./vendor-vue-i18n-CdFxvEOa.js";
import { useKeybindingStore, useCommandStore, normalizeI18nKey, SearchBox, _sfc_main$2, KeyComboImpl, KeybindingImpl, _export_sfc } from "./index-Co5rVbXs.js";
import { useKeybindingService } from "./keybindingService-DtUZUEQU.js";
const _hoisted_1$1 = {
  key: 0,
  class: "px-2"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KeyComboDisplay",
  props: {
    keyCombo: {},
    isModified: { type: Boolean, default: false }
  },
  setup(__props) {
    const keySequences = computed(() => __props.keyCombo.getKeySequences());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(keySequences.value, (sequence, index) => {
          return openBlock(), createElementBlock(Fragment, { key: index }, [
            createVNode(unref(script), {
              severity: _ctx.isModified ? "info" : "secondary"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(sequence), 1)
              ]),
              _: 2
            }, 1032, ["severity"]),
            index < keySequences.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1$1, "+")) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1 = { class: "actions invisible flex flex-row" };
const _hoisted_2 = ["title"];
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "overflow-hidden text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KeybindingPanel",
  setup(__props) {
    const filters = ref({
      global: { value: "", matchMode: FilterMatchMode.CONTAINS }
    });
    const keybindingStore = useKeybindingStore();
    const keybindingService = useKeybindingService();
    const commandStore = useCommandStore();
    const { t } = useI18n();
    const commandsData = computed(() => {
      return Object.values(commandStore.commands).map((command) => ({
        id: command.id,
        label: t(
          `commands.${normalizeI18nKey(command.id)}.label`,
          command.label ?? ""
        ),
        keybinding: keybindingStore.getKeybindingByCommandId(command.id),
        source: command.source
      }));
    });
    const selectedCommandData = ref(null);
    const editDialogVisible = ref(false);
    const newBindingKeyCombo = ref(null);
    const currentEditingCommand = ref(null);
    const keybindingInput = ref(null);
    const existingKeybindingOnCombo = computed(() => {
      if (!currentEditingCommand.value) {
        return null;
      }
      if (currentEditingCommand.value.keybinding?.combo?.equals(
        newBindingKeyCombo.value
      )) {
        return null;
      }
      if (!newBindingKeyCombo.value) {
        return null;
      }
      return keybindingStore.getKeybinding(newBindingKeyCombo.value);
    });
    function editKeybinding(commandData) {
      currentEditingCommand.value = commandData;
      newBindingKeyCombo.value = commandData.keybinding ? commandData.keybinding.combo : null;
      editDialogVisible.value = true;
    }
    __name(editKeybinding, "editKeybinding");
    watchEffect(() => {
      if (editDialogVisible.value) {
        setTimeout(() => {
          keybindingInput.value?.$el?.focus();
        }, 300);
      }
    });
    async function removeKeybinding(commandData) {
      if (commandData.keybinding) {
        keybindingStore.unsetKeybinding(commandData.keybinding);
        await keybindingService.persistUserKeybindings();
      }
    }
    __name(removeKeybinding, "removeKeybinding");
    async function captureKeybinding(event) {
      if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        switch (event.key) {
          case "Escape":
            cancelEdit();
            return;
          case "Enter":
            await saveKeybinding();
            return;
        }
      }
      const keyCombo = KeyComboImpl.fromEvent(event);
      newBindingKeyCombo.value = keyCombo;
    }
    __name(captureKeybinding, "captureKeybinding");
    function cancelEdit() {
      editDialogVisible.value = false;
      currentEditingCommand.value = null;
      newBindingKeyCombo.value = null;
    }
    __name(cancelEdit, "cancelEdit");
    async function saveKeybinding() {
      if (currentEditingCommand.value && newBindingKeyCombo.value) {
        const updated = keybindingStore.updateKeybindingOnCommand(
          new KeybindingImpl({
            commandId: currentEditingCommand.value.id,
            combo: newBindingKeyCombo.value
          })
        );
        if (updated) {
          await keybindingService.persistUserKeybindings();
        }
      }
      cancelEdit();
    }
    __name(saveKeybinding, "saveKeybinding");
    async function resetKeybinding(commandData) {
      if (keybindingStore.resetKeybindingForCommand(commandData.id)) {
        await keybindingService.persistUserKeybindings();
      } else {
        console.warn(
          `No changes made when resetting keybinding for command: ${commandData.id}`
        );
      }
    }
    __name(resetKeybinding, "resetKeybinding");
    const toast = useToast();
    async function resetAllKeybindings() {
      keybindingStore.resetAllKeybindings();
      await keybindingService.persistUserKeybindings();
      toast.add({
        severity: "info",
        summary: "Info",
        detail: "All keybindings reset",
        life: 3e3
      });
    }
    __name(resetAllKeybindings, "resetAllKeybindings");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_sfc_main$2, {
        value: "Keybinding",
        class: "keybinding-panel"
      }, {
        header: withCtx(() => [
          createVNode(SearchBox, {
            modelValue: filters.value["global"].value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value["global"].value = $event),
            placeholder: _ctx.$t("g.searchKeybindings") + "..."
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        default: withCtx(() => [
          createVNode(unref(script$3), {
            selection: selectedCommandData.value,
            "onUpdate:selection": _cache[1] || (_cache[1] = ($event) => selectedCommandData.value = $event),
            value: commandsData.value,
            "global-filter-fields": ["id", "label"],
            filters: filters.value,
            "selection-mode": "single",
            "striped-rows": "",
            pt: {
              header: "px-0"
            },
            onRowDblclick: _cache[2] || (_cache[2] = ($event) => editKeybinding($event.data))
          }, {
            default: withCtx(() => [
              createVNode(unref(script$1), {
                field: "actions",
                header: ""
              }, {
                body: withCtx((slotProps) => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(unref(script$2), {
                      icon: "pi pi-pencil",
                      class: "p-button-text",
                      onClick: /* @__PURE__ */ __name(($event) => editKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["onClick"]),
                    createVNode(unref(script$2), {
                      icon: "pi pi-replay",
                      class: "p-button-text p-button-warn",
                      disabled: !unref(keybindingStore).isCommandKeybindingModified(slotProps.data.id),
                      onClick: /* @__PURE__ */ __name(($event) => resetKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["disabled", "onClick"]),
                    createVNode(unref(script$2), {
                      icon: "pi pi-trash",
                      class: "p-button-text p-button-danger",
                      disabled: !slotProps.data.keybinding,
                      onClick: /* @__PURE__ */ __name(($event) => removeKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["disabled", "onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(script$1), {
                field: "id",
                header: _ctx.$t("g.command"),
                sortable: "",
                class: "max-w-64 2xl:max-w-full"
              }, {
                body: withCtx((slotProps) => [
                  createBaseVNode("div", {
                    class: "overflow-hidden text-ellipsis whitespace-nowrap",
                    title: slotProps.data.id
                  }, toDisplayString(slotProps.data.label), 9, _hoisted_2)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(unref(script$1), {
                field: "keybinding",
                header: _ctx.$t("g.keybinding")
              }, {
                body: withCtx((slotProps) => [
                  slotProps.data.keybinding ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 0,
                    "key-combo": slotProps.data.keybinding.combo,
                    "is-modified": unref(keybindingStore).isCommandKeybindingModified(slotProps.data.id)
                  }, null, 8, ["key-combo", "is-modified"])) : (openBlock(), createElementBlock("span", _hoisted_3, "-"))
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(unref(script$1), {
                field: "source",
                header: _ctx.$t("g.source")
              }, {
                body: withCtx((slotProps) => [
                  createBaseVNode("span", _hoisted_4, toDisplayString(slotProps.data.source || "-"), 1)
                ]),
                _: 1
              }, 8, ["header"])
            ]),
            _: 1
          }, 8, ["selection", "value", "filters"]),
          createVNode(unref(script$6), {
            visible: editDialogVisible.value,
            "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => editDialogVisible.value = $event),
            class: "min-w-96",
            modal: "",
            header: currentEditingCommand.value?.label,
            onHide: cancelEdit
          }, {
            footer: withCtx(() => [
              createVNode(unref(script$2), {
                label: existingKeybindingOnCombo.value ? "Overwrite" : "Save",
                icon: existingKeybindingOnCombo.value ? "pi pi-pencil" : "pi pi-check",
                severity: existingKeybindingOnCombo.value ? "warn" : void 0,
                autofocus: "",
                onClick: saveKeybinding
              }, null, 8, ["label", "icon", "severity"])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(script$4), {
                  ref_key: "keybindingInput",
                  ref: keybindingInput,
                  class: "mb-2 text-center",
                  "model-value": newBindingKeyCombo.value?.toString() ?? "",
                  placeholder: "Press keys for new binding",
                  autocomplete: "off",
                  fluid: "",
                  onKeydown: withModifiers(captureKeybinding, ["stop", "prevent"])
                }, null, 8, ["model-value"]),
                existingKeybindingOnCombo.value ? (openBlock(), createBlock(unref(script$5), {
                  key: 0,
                  severity: "warn"
                }, {
                  default: withCtx(() => [
                    _cache[4] || (_cache[4] = createTextVNode(" Keybinding already exists on ")),
                    createVNode(unref(script), {
                      severity: "secondary",
                      value: existingKeybindingOnCombo.value.commandId
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["visible", "header"]),
          withDirectives(createVNode(unref(script$2), {
            class: "mt-4",
            label: _ctx.$t("g.resetAll"),
            icon: "pi pi-replay",
            severity: "danger",
            fluid: "",
            text: "",
            onClick: resetAllKeybindings
          }, null, 8, ["label"]), [
            [_directive_tooltip, _ctx.$t("g.resetAllKeybindingsTooltip")]
          ])
        ]),
        _: 1
      });
    };
  }
});
const KeybindingPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d037e081"]]);
export {
  KeybindingPanel as default
};
//# sourceMappingURL=KeybindingPanel-CigDC3ln.js.map
