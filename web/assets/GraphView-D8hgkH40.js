var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, watchEffect, computed, resolveDirective, withDirectives, vShow, unref, openBlock, createElementBlock, createVNode, createBaseVNode, normalizeStyle, onMounted, onBeforeUnmount, createBlock, withCtx, renderSlot, createCommentVNode, resolveDynamicComponent, Fragment, renderList, toDisplayString, ref, watch, mergeProps, markRaw, nextTick, normalizeClass, createTextVNode, isRef, toRaw, Teleport, withModifiers, onUnmounted, inject, provide } from "./vendor-vue-B7YUw5vA.js";
import { useWorkspaceStore, useSettingStore, app, showNativeSystemMenu, _export_sfc, useWorkflowStore, useSidebarTabStore, useBottomPanelStore, useWorkflowService, useCanvasStore, whenever, useEventListener, useCanvasPositionConversion, useElementBounding, isDOMWidget, isComponentWidget, useDomWidgetStore, useChainCallback, useCommandStore, LiteGraph, useNodeDefStore, isOverNodeInput, st, normalizeI18nKey, isOverNodeOutput, createBounds, useColorPaletteStore, LGraphCanvas, getItemsColorOption, adjustColor, isColorable, isLGraphNode, useNodeHelpStore, useNodeLibrarySidebarTab, isImageNode, t, useExtensionService, useTitleEditorStore, LGraphGroup, LGraphNode, EditableText, defineStore, useNodeFrequencyStore, useNodeBookmarkStore, highlightQuery, formatNumberWithSuffix, NodeSourceType, NodePreview, NodeSearchFilter, SearchFilterChip, useLitegraphService, storeToRefs, useUserStore, useDialogStore, SettingDialogHeader, SettingDialogContent, useKeybindingStore, usePragmaticDraggable, usePragmaticDroppable, useWorkflowBookmarkStore, useExtensionStore, NodeBadgeMode, BadgePosition, LGraphBadge, _, useModelToNodeStore, ComfyNodeDefImpl, ComfyModelDef, ComfyWorkflow, te, LGraph, LLink, DragAndScale, ContextMenu, CanvasPointer, isVideoNode, isAudioNode, api, getStorageValue, setStorageValue, LinkMarkerShape, useExecutionStore, useToastStore, IS_CONTROL_WIDGET, updateControlWidgetLabel, useColorPaletteService, ChangeTracker, UnauthorizedError, i18n, migrateLegacyRerouteNodes, useQueueSettingsStore, useQueuePendingTaskCountStore, useLocalStorage, useDraggable, watchDebounced, lodashExports, useEventBus, useMenuItemStore, useCurrentUser, useFirebaseAuthActions, useDialogService, _sfc_main as _sfc_main$L, isElectron, electronAPI, _imports_0, isNativeWindow, useTitle, LGraphEventMode, useQueueStore, DEFAULT_DARK_COLOR_PALETTE, DEFAULT_LIGHT_COLOR_PALETTE, useFavicon, useErrorHandling, useModelStore } from "./index-Co5rVbXs.js";
import { script$2 as script, script$48 as script$1, script$49 as script$2, script$33 as script$3, script$34 as script$4, script$26 as script$5, script$50 as script$6, script$51 as script$7, script$40 as script$8, script$5 as script$9, script$35 as script$a, script$25 as script$b, script$15 as script$c, script as script$d, script$52 as script$e, script$1 as script$f, script$42 as script$g, useToast, script$53 as script$h, script$22 as script$i, script$54 as script$j, script$55 as script$k, script$10 as script$l, script$31 as script$m } from "./vendor-primevue-CBB09Bln.js";
import { useI18n } from "./vendor-vue-i18n-CdFxvEOa.js";
import { _sfc_main as _sfc_main$K } from "./UserAvatar-CwpUZ8L2.js";
import { useKeybindingService } from "./keybindingService-DtUZUEQU.js";
import { useServerConfigStore } from "./serverConfigStore-RwQSLxg9.js";
const _hoisted_1$s = { class: "window-actions-spacer" };
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "MenuHamburger",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const exitFocusMode = /* @__PURE__ */ __name(() => {
      workspaceState.focusMode = false;
    }, "exitFocusMode");
    watchEffect(() => {
      if (settingStore.get("Comfy.UseNewMenu") !== "Disabled") {
        return;
      }
      if (workspaceState.focusMode) {
        app.ui.menuContainer.style.display = "none";
      } else {
        app.ui.menuContainer.style.display = "block";
      }
    });
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const positionCSS = computed(
      () => (
        // 'Bottom' menuSetting shows the hamburger button in the bottom right corner
        // 'Disabled', 'Top' menuSetting shows the hamburger button in the top right corner
        menuSetting.value === "Bottom" ? { bottom: "0px", right: "0px" } : { top: "0px", right: "0px" }
      )
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "comfy-menu-hamburger no-drag",
        style: normalizeStyle(positionCSS.value)
      }, [
        withDirectives(createVNode(unref(script), {
          icon: "pi pi-bars",
          severity: "secondary",
          text: "",
          size: "large",
          "aria-label": _ctx.$t("menu.showMenu"),
          "aria-live": "assertive",
          onClick: exitFocusMode,
          onContextmenu: unref(showNativeSystemMenu)
        }, null, 8, ["aria-label", "onContextmenu"]), [
          [_directive_tooltip, { value: _ctx.$t("menu.showMenu"), showDelay: 300 }]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_1$s, null, 512), [
          [vShow, menuSetting.value !== "Bottom"]
        ])
      ], 4)), [
        [vShow, unref(workspaceState).focusMode]
      ]);
    };
  }
});
const MenuHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-0831a976"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "UnloadWindowConfirmDialog",
  setup(__props) {
    const settingStore = useSettingStore();
    const workflowStore = useWorkflowStore();
    const handleBeforeUnload = /* @__PURE__ */ __name((event) => {
      if (settingStore.get("Comfy.Window.UnloadConfirmation") && workflowStore.modifiedWorkflows.length > 0) {
        event.preventDefault();
        return true;
      }
      return void 0;
    }, "handleBeforeUnload");
    onMounted(() => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "LiteGraphCanvasSplitterOverlay",
  setup(__props) {
    const settingStore = useSettingStore();
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const unifiedWidth = computed(
      () => settingStore.get("Comfy.Sidebar.UnifiedWidth")
    );
    const sidebarPanelVisible = computed(
      () => useSidebarTabStore().activeSidebarTab !== null
    );
    const bottomPanelVisible = computed(
      () => useBottomPanelStore().bottomPanelVisible
    );
    const activeSidebarTabId = computed(
      () => useSidebarTabStore().activeSidebarTabId
    );
    const sidebarStateKey = computed(() => {
      return unifiedWidth.value ? "unified-sidebar" : activeSidebarTabId.value ?? "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$2), {
        key: sidebarStateKey.value,
        class: "splitter-overlay-root splitter-overlay",
        "pt:gutter": sidebarPanelVisible.value ? "" : "hidden",
        "state-key": sidebarStateKey.value,
        "state-storage": "local"
      }, {
        default: withCtx(() => [
          sidebarLocation.value === "left" ? withDirectives((openBlock(), createBlock(unref(script$1), {
            key: 0,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true),
          createVNode(unref(script$1), { size: 100 }, {
            default: withCtx(() => [
              createVNode(unref(script$2), {
                class: "splitter-overlay max-w-full",
                layout: "vertical",
                "pt:gutter": bottomPanelVisible.value ? "" : "hidden",
                "state-key": "bottom-panel-splitter",
                "state-storage": "local"
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$1), { class: "graph-canvas-panel relative" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "graph-canvas-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  withDirectives(createVNode(unref(script$1), { class: "bottom-panel" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "bottom-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }, 512), [
                    [vShow, bottomPanelVisible.value]
                  ])
                ]),
                _: 3
              }, 8, ["pt:gutter"])
            ]),
            _: 3
          }),
          sidebarLocation.value === "right" ? withDirectives((openBlock(), createBlock(unref(script$1), {
            key: 1,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["pt:gutter", "state-key"]);
    };
  }
});
const LiteGraphCanvasSplitterOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-480c68de"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "ExtensionSlot",
  props: {
    extension: {}
  },
  setup(__props) {
    const props = __props;
    const mountCustomExtension = /* @__PURE__ */ __name((extension, el) => {
      extension.render(el);
    }, "mountCustomExtension");
    onBeforeUnmount(() => {
      if (props.extension.type === "custom" && props.extension.destroy) {
        props.extension.destroy();
      }
    });
    return (_ctx, _cache) => {
      return _ctx.extension.type === "vue" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.extension.component), { key: 0 })) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: /* @__PURE__ */ __name((el) => {
          if (el)
            mountCustomExtension(
              props.extension,
              el
            );
        }, "ref")
      }, null, 512));
    };
  }
});
const _hoisted_1$r = { class: "flex flex-col h-full" };
const _hoisted_2$a = { class: "w-full flex justify-between" };
const _hoisted_3$8 = { class: "tabs-container" };
const _hoisted_4$5 = { class: "font-bold" };
const _hoisted_5$2 = { class: "flex-grow h-0" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "BottomPanel",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        createVNode(unref(script$5), {
          value: unref(bottomPanelStore).activeBottomPanelTabId,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(bottomPanelStore).activeBottomPanelTabId = $event)
        }, {
          default: withCtx(() => [
            createVNode(unref(script$3), { "pt:tab-list": "border-none" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$a, [
                  createBaseVNode("div", _hoisted_3$8, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(bottomPanelStore).bottomPanelTabs, (tab) => {
                      return openBlock(), createBlock(unref(script$4), {
                        key: tab.id,
                        value: tab.id,
                        class: "p-3 border-none"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_4$5, toDisplayString(tab.title.toUpperCase()), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  createVNode(unref(script), {
                    class: "justify-self-end",
                    icon: "pi pi-times",
                    severity: "secondary",
                    size: "small",
                    text: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(bottomPanelStore).bottomPanelVisible = false)
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        createBaseVNode("div", _hoisted_5$2, [
          unref(bottomPanelStore).bottomPanelVisible && unref(bottomPanelStore).activeBottomPanelTab ? (openBlock(), createBlock(_sfc_main$G, {
            key: 0,
            extension: unref(bottomPanelStore).activeBottomPanelTab
          }, null, 8, ["extension"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$q = {
  key: 0,
  class: "fixed top-[var(--comfy-topbar-height)] left-[var(--sidebar-width)] p-2 subgraph-breadcrumb"
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumb",
  setup(__props) {
    const workflowService = useWorkflowService();
    const workflowStore = useWorkflowStore();
    const workflowName = computed(() => workflowStore.activeWorkflow?.filename);
    const items = computed(() => {
      if (!workflowStore.subgraphNamePath.length) return [];
      return workflowStore.subgraphNamePath.map((name) => ({
        label: name,
        command: /* @__PURE__ */ __name(async () => {
          const workflow = workflowStore.getWorkflowByPath(name);
          if (workflow) await workflowService.openWorkflow(workflow);
        }, "command")
      }));
    });
    const home = computed(() => ({
      label: workflowName.value,
      icon: "pi pi-home",
      command: /* @__PURE__ */ __name(async () => {
        const canvas = useCanvasStore().getCanvas();
        if (!canvas.graph) throw new TypeError("Canvas has no graph");
        canvas.setGraph(canvas.graph.rootGraph);
      }, "command")
    }));
    const handleItemClick = /* @__PURE__ */ __name((event) => {
      event.item.command?.(event);
    }, "handleItemClick");
    whenever(
      () => useCanvasStore().canvas,
      (canvas) => {
        useEventListener(canvas.canvas, "litegraph:set-graph", () => {
          useWorkflowStore().updateActiveGraph();
        });
      }
    );
    return (_ctx, _cache) => {
      return unref(workflowStore).isSubgraphActive ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
        createVNode(unref(script$6), {
          class: "bg-transparent",
          home: home.value,
          model: items.value,
          "aria-label": "Graph navigation",
          onItemClick: handleItemClick
        }, null, 8, ["home", "model"])
      ])) : createCommentVNode("", true);
    };
  }
});
function useAbsolutePosition(options = {}) {
  const { useTransform = false } = options;
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { canvasPosToClientPos } = useCanvasPositionConversion(
    lgCanvas.canvas,
    lgCanvas
  );
  const style = ref({});
  const computeStyle = /* @__PURE__ */ __name((position) => {
    const { pos, size, scale = lgCanvas.ds.scale } = position;
    const [left, top] = canvasPosToClientPos(pos);
    const [width, height] = size;
    return useTransform ? {
      position: "fixed",
      transformOrigin: "0 0",
      transform: `scale(${scale})`,
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    } : {
      position: "fixed",
      left: `${left}px`,
      top: `${top}px`,
      width: `${width * scale}px`,
      height: `${height * scale}px`
    };
  }, "computeStyle");
  const updatePosition = /* @__PURE__ */ __name((config) => {
    style.value = computeStyle(config);
  }, "updatePosition");
  return {
    style,
    updatePosition
  };
}
__name(useAbsolutePosition, "useAbsolutePosition");
function intersect(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  if (x1 >= x2 || y1 >= y2) {
    return null;
  }
  return [x1, y1, x2 - x1, y2 - y1];
}
__name(intersect, "intersect");
const useDomClipping = /* @__PURE__ */ __name((options = {}) => {
  const style = ref({});
  const { margin = 4 } = options;
  const calculateClipPath = /* @__PURE__ */ __name((elementRect, canvasRect, isSelected, selectedArea) => {
    if (!isSelected && selectedArea) {
      const { scale, offset } = selectedArea;
      const intersection = intersect(
        {
          x: elementRect.left - canvasRect.left,
          y: elementRect.top - canvasRect.top,
          width: elementRect.width,
          height: elementRect.height
        },
        {
          x: (selectedArea.x + offset[0] - margin) * scale,
          y: (selectedArea.y + offset[1] - margin) * scale,
          width: (selectedArea.width + 2 * margin) * scale,
          height: (selectedArea.height + 2 * margin) * scale
        }
      );
      if (!intersection) {
        return "";
      }
      const clipX = (intersection[0] - elementRect.left + canvasRect.left) / scale + "px";
      const clipY = (intersection[1] - elementRect.top + canvasRect.top) / scale + "px";
      const clipWidth = intersection[2] / scale + "px";
      const clipHeight = intersection[3] / scale + "px";
      return `polygon(0% 0%, 0% 100%, ${clipX} 100%, ${clipX} ${clipY}, calc(${clipX} + ${clipWidth}) ${clipY}, calc(${clipX} + ${clipWidth}) calc(${clipY} + ${clipHeight}), ${clipX} calc(${clipY} + ${clipHeight}), ${clipX} 100%, 100% 100%, 100% 0%)`;
    }
    return "";
  }, "calculateClipPath");
  const updateClipPath = /* @__PURE__ */ __name((element, canvasElement, isSelected, selectedArea) => {
    const elementRect = element.getBoundingClientRect();
    const canvasRect = canvasElement.getBoundingClientRect();
    const clipPath = calculateClipPath(
      elementRect,
      canvasRect,
      isSelected,
      selectedArea
    );
    style.value = {
      clipPath: clipPath || "none",
      willChange: "clip-path"
    };
  }, "updateClipPath");
  return {
    style,
    updateClipPath
  };
}, "useDomClipping");
const _hoisted_1$p = ["title"];
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "DomWidget",
  props: {
    widgetState: {}
  },
  emits: ["update:widgetValue"],
  setup(__props, { emit: __emit }) {
    const widget = __props.widgetState.widget;
    const emit = __emit;
    const widgetElement = ref();
    const style = ref({});
    const { style: positionStyle, updatePosition } = useAbsolutePosition({
      useTransform: true
    });
    const { style: clippingStyle, updateClipPath } = useDomClipping();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const enableDomClipping = computed(
      () => settingStore.get("Comfy.DOMClippingEnabled")
    );
    const updateDomClipping = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas || !widgetElement.value) return;
      const selectedNode = Object.values(lgCanvas.selected_nodes ?? {})[0];
      if (!selectedNode) return;
      const node = widget.node;
      const isSelected = selectedNode === node;
      const renderArea = selectedNode?.renderArea;
      const offset = lgCanvas.ds.offset;
      const scale = lgCanvas.ds.scale;
      const selectedAreaConfig = renderArea ? {
        x: renderArea[0],
        y: renderArea[1],
        width: renderArea[2],
        height: renderArea[3],
        scale,
        offset: [offset[0], offset[1]]
      } : void 0;
      updateClipPath(
        widgetElement.value,
        lgCanvas.canvas,
        isSelected,
        selectedAreaConfig
      );
    }, "updateDomClipping");
    const { left, top } = useElementBounding(canvasStore.getCanvas().canvas);
    watch(
      [() => __props.widgetState, left, top],
      ([widgetState, _2, __]) => {
        updatePosition(widgetState);
        if (enableDomClipping.value) {
          updateDomClipping();
        }
        style.value = {
          ...positionStyle.value,
          ...enableDomClipping.value ? clippingStyle.value : {},
          zIndex: widgetState.zIndex,
          pointerEvents: widgetState.readonly || widget.computedDisabled ? "none" : "auto",
          opacity: widget.computedDisabled ? 0.5 : 1
        };
      },
      { deep: true }
    );
    watch(
      () => __props.widgetState.visible,
      (newVisible, oldVisible) => {
        if (!newVisible && oldVisible) {
          widget.options.onHide?.(widget);
        }
      }
    );
    if (isDOMWidget(widget)) {
      if (widget.element.blur) {
        useEventListener(document, "mousedown", (event) => {
          if (!widget.element.contains(event.target)) {
            widget.element.blur();
          }
        });
      }
      for (const evt of widget.options.selectOn ?? ["focus", "click"]) {
        useEventListener(widget.element, evt, () => {
          const lgCanvas = canvasStore.canvas;
          lgCanvas?.selectNode(widget.node);
          lgCanvas?.bringToFront(widget.node);
        });
      }
    }
    const inputSpec = widget.node.constructor.nodeData;
    const tooltip = inputSpec?.inputs?.[widget.name]?.tooltip;
    onMounted(() => {
      if (isDOMWidget(widget) && widgetElement.value) {
        widgetElement.value.appendChild(widget.element);
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "widgetElement",
        ref: widgetElement,
        class: "dom-widget",
        title: unref(tooltip),
        style: normalizeStyle(style.value)
      }, [
        unref(isComponentWidget)(unref(widget)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(widget).component), mergeProps({
          key: 0,
          "model-value": unref(widget).value,
          widget: unref(widget)
        }, unref(widget).props, {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:widgetValue", $event))
        }), null, 16, ["model-value", "widget"])) : createCommentVNode("", true)
      ], 12, _hoisted_1$p)), [
        [vShow, _ctx.widgetState.visible]
      ]);
    };
  }
});
const DomWidget = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-2d8b2261"]]);
const _hoisted_1$o = { class: "isolate" };
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "DomWidgets",
  setup(__props) {
    const domWidgetStore = useDomWidgetStore();
    const widgetStates = computed(
      () => Array.from(domWidgetStore.widgetStates.values())
    );
    const updateWidgets = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas) return;
      const lowQuality = lgCanvas.low_quality;
      for (const widgetState of domWidgetStore.widgetStates.values()) {
        const widget = widgetState.widget;
        const node = widget.node;
        const visible = lgCanvas.isNodeVisible(node) && !(widget.options.hideOnZoom && lowQuality) && widget.isVisible();
        widgetState.visible = visible;
        if (visible) {
          const margin = widget.margin;
          widgetState.pos = [node.pos[0] + margin, node.pos[1] + margin + widget.y];
          widgetState.size = [
            (widget.width ?? node.width) - margin * 2,
            (widget.computedHeight ?? 50) - margin * 2
          ];
          widgetState.zIndex = lgCanvas.graph?.nodes.indexOf(node) ?? -1;
          widgetState.readonly = lgCanvas.read_only;
        }
      }
    }, "updateWidgets");
    const canvasStore = useCanvasStore();
    whenever(
      () => canvasStore.canvas,
      (canvas) => canvas.onDrawForeground = useChainCallback(
        canvas.onDrawForeground,
        updateWidgets
      ),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(widgetStates.value, (widgetState) => {
          return openBlock(), createBlock(DomWidget, {
            key: widgetState.widget.id,
            "widget-state": widgetState,
            "onUpdate:widgetValue": /* @__PURE__ */ __name(($event) => widgetState.widget.value = $event, "onUpdate:widgetValue")
          }, null, 8, ["widget-state", "onUpdate:widgetValue"]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$n = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M921.088 103.232L584.832 889.024L465.52 544.512L121.328 440.48zM1004.46.769c-6.096 0-13.52 1.728-22.096 5.36L27.708 411.2c-34.383 14.592-36.56 42.704-4.847 62.464l395.296 123.584l129.36 403.264c9.28 15.184 20.496 22.72 31.263 22.72c11.936 0 23.296-9.152 31.04-27.248l408.272-953.728C1029.148 16.368 1022.86.769 1004.46.769"
    }, null, -1)
  ]));
}
__name(render$8, "render$8");
const __unplugin_components_1$2 = markRaw({ name: "simple-line-icons-cursor", render: render$8 });
const _hoisted_1$m = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M10.05 23q-.75 0-1.4-.337T7.575 21.7L1.2 12.375l.6-.575q.475-.475 1.125-.55t1.175.3L7 13.575V4q0-.425.288-.712T8 3t.713.288T9 4v13.425l-3.7-2.6l3.925 5.725q.125.2.35.325t.475.125H17q.825 0 1.413-.587T19 19V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 1.65-1.175 2.825T17 23zM11 12V2q0-.425.288-.712T12 1t.713.288T13 2v10zm4 0V3q0-.425.288-.712T16 2t.713.288T17 3v9zm-2.85 4.5"
    }, null, -1)
  ]));
}
__name(render$7, "render$7");
const __unplugin_components_0$3 = markRaw({ name: "material-symbols-pan-tool-outline", render: render$7 });
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvasMenu",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const linkHidden = computed(
      () => settingStore.get("Comfy.LinkRenderMode") === LiteGraph.HIDDEN_LINK
    );
    let interval = null;
    const repeat = /* @__PURE__ */ __name(async (command) => {
      if (interval) return;
      const cmd = /* @__PURE__ */ __name(() => commandStore.execute(command), "cmd");
      await cmd();
      interval = window.setInterval(cmd, 100);
    }, "repeat");
    const stopRepeat = /* @__PURE__ */ __name(() => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }, "stopRepeat");
    return (_ctx, _cache) => {
      const _component_i_material_symbols58pan_tool_outline = __unplugin_components_0$3;
      const _component_i_simple_line_icons58cursor = __unplugin_components_1$2;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(unref(script$7), { class: "p-buttongroup-vertical absolute bottom-[10px] right-[10px] z-[1000]" }, {
        default: withCtx(() => [
          withDirectives(createVNode(unref(script), {
            severity: "secondary",
            icon: "pi pi-plus",
            "aria-label": _ctx.$t("graphCanvasMenu.zoomIn"),
            onMousedown: _cache[0] || (_cache[0] = ($event) => repeat("Comfy.Canvas.ZoomIn")),
            onMouseup: stopRepeat
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.zoomIn"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(script), {
            severity: "secondary",
            icon: "pi pi-minus",
            "aria-label": _ctx.$t("graphCanvasMenu.zoomOut"),
            onMousedown: _cache[1] || (_cache[1] = ($event) => repeat("Comfy.Canvas.ZoomOut")),
            onMouseup: stopRepeat
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.zoomOut"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(script), {
            severity: "secondary",
            icon: "pi pi-expand",
            "aria-label": _ctx.$t("graphCanvasMenu.fitView"),
            onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.Canvas.FitView"))
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.fitView"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives((openBlock(), createBlock(unref(script), {
            severity: "secondary",
            "aria-label": unref(t2)(
              "graphCanvasMenu." + (unref(canvasStore).canvas?.read_only ? "panMode" : "selectMode")
            ),
            onClick: _cache[3] || (_cache[3] = () => unref(commandStore).execute("Comfy.Canvas.ToggleLock"))
          }, {
            icon: withCtx(() => [
              unref(canvasStore).canvas?.read_only ? (openBlock(), createBlock(_component_i_material_symbols58pan_tool_outline, { key: 0 })) : (openBlock(), createBlock(_component_i_simple_line_icons58cursor, { key: 1 }))
            ]),
            _: 1
          }, 8, ["aria-label"])), [
            [
              _directive_tooltip,
              unref(t2)(
                "graphCanvasMenu." + (unref(canvasStore).canvas?.read_only ? "panMode" : "selectMode")
              ) + " (Space)",
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(script), {
            severity: "secondary",
            icon: linkHidden.value ? "pi pi-eye-slash" : "pi pi-eye",
            "aria-label": _ctx.$t("graphCanvasMenu.toggleLinkVisibility"),
            "data-testid": "toggle-link-visibility-button",
            onClick: _cache[4] || (_cache[4] = () => unref(commandStore).execute("Comfy.Canvas.ToggleLinkVisibility"))
          }, null, 8, ["icon", "aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.toggleLinkVisibility"),
              void 0,
              { left: true }
            ]
          ])
        ]),
        _: 1
      });
    };
  }
});
const GraphCanvasMenu = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-1b5dbe98"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "NodeTooltip",
  setup(__props) {
    let idleTimeout;
    const nodeDefStore = useNodeDefStore();
    const settingStore = useSettingStore();
    const tooltipRef = ref();
    const tooltipText = ref("");
    const left = ref();
    const top = ref();
    const hideTooltip = /* @__PURE__ */ __name(() => tooltipText.value = "", "hideTooltip");
    const showTooltip = /* @__PURE__ */ __name(async (tooltip) => {
      if (!tooltip) return;
      left.value = app.canvas.mouse[0] + "px";
      top.value = app.canvas.mouse[1] + "px";
      tooltipText.value = tooltip;
      await nextTick();
      const rect = tooltipRef.value?.getBoundingClientRect();
      if (!rect) return;
      if (rect.right > window.innerWidth) {
        left.value = app.canvas.mouse[0] - rect.width + "px";
      }
      if (rect.top < 0) {
        top.value = app.canvas.mouse[1] + rect.height + "px";
      }
    }, "showTooltip");
    const onIdle = /* @__PURE__ */ __name(() => {
      const { canvas } = app;
      const node = canvas.node_over;
      if (!node) return;
      const ctor = node.constructor;
      const nodeDef = nodeDefStore.nodeDefsByName[node.type ?? ""];
      if (ctor.title_mode !== LiteGraph.NO_TITLE && canvas.graph_mouse[1] < node.pos[1]) {
        return showTooltip(nodeDef.description);
      }
      if (node.flags?.collapsed) return;
      const inputSlot = isOverNodeInput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (inputSlot !== -1) {
        const inputName = node.inputs[inputSlot].name;
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(inputName)}.tooltip`,
          nodeDef.inputs[inputName]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const outputSlot = isOverNodeOutput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (outputSlot !== -1) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.outputs.${outputSlot}.tooltip`,
          nodeDef.outputs[outputSlot]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const widget = app.canvas.getWidgetAtCursor();
      if (widget && !isDOMWidget(widget)) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(widget.name)}.tooltip`,
          nodeDef.inputs[widget.name]?.tooltip ?? ""
        );
        return showTooltip(widget.tooltip ?? translatedTooltip);
      }
    }, "onIdle");
    const onMouseMove = /* @__PURE__ */ __name((e) => {
      hideTooltip();
      clearTimeout(idleTimeout);
      if (e.target.nodeName !== "CANVAS") return;
      idleTimeout = window.setTimeout(
        onIdle,
        settingStore.get("LiteGraph.Node.TooltipDelay")
      );
    }, "onMouseMove");
    useEventListener(window, "mousemove", onMouseMove);
    useEventListener(window, "click", hideTooltip);
    return (_ctx, _cache) => {
      return tooltipText.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: tooltipRef,
        class: "node-tooltip",
        style: normalizeStyle({ left: left.value, top: top.value })
      }, toDisplayString(tooltipText.value), 5)) : createCommentVNode("", true);
    };
  }
});
const NodeTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-4fa47aaa"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "SelectionOverlay",
  setup(__props) {
    const canvasStore = useCanvasStore();
    const { style, updatePosition } = useAbsolutePosition();
    const visible = ref(false);
    const showBorder = ref(false);
    const positionSelectionOverlay = /* @__PURE__ */ __name(() => {
      const { selectedItems } = canvasStore.getCanvas();
      showBorder.value = selectedItems.size > 1;
      if (!selectedItems.size) {
        visible.value = false;
        return;
      }
      visible.value = true;
      const bounds = createBounds(selectedItems);
      if (bounds) {
        updatePosition({
          pos: [bounds[0], bounds[1]],
          size: [bounds[2], bounds[3]]
        });
      }
    }, "positionSelectionOverlay");
    whenever(
      () => canvasStore.getCanvas().state.selectionChanged,
      () => {
        requestAnimationFrame(() => {
          positionSelectionOverlay();
          canvasStore.getCanvas().state.selectionChanged = false;
        });
      },
      { immediate: true }
    );
    canvasStore.getCanvas().ds.onChanged = positionSelectionOverlay;
    watch(
      () => canvasStore.canvas?.state?.draggingItems,
      (draggingItems) => {
        if (draggingItems === false) {
          requestAnimationFrame(() => {
            visible.value = true;
            positionSelectionOverlay();
          });
        } else {
          requestAnimationFrame(() => {
            visible.value = false;
          });
        }
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["selection-overlay-container pointer-events-none z-40", {
          "show-border": showBorder.value
        }]),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)), [
        [vShow, visible.value]
      ]);
    };
  }
});
const SelectionOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-da1720f2"]]);
const _hoisted_1$l = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M486.945 25.055L347.49 52.945l23.78 23.784L390.544 96l-56.793 56.795c-27.393-22.7-57.978-32.844-86.97-32.06c-33.838.918-64.92 15.95-87.858 38.888c-22.94 22.94-38.084 54.114-39.406 88.178c-1.138 29.306 8.49 60.407 30.742 88.485L19.27 467.27l25.46 25.46l155.48-155.484l-12.476-12.726c-24.72-25.22-33.185-51.125-32.246-75.323s11.9-47.13 28.89-64.12c16.988-16.988 39.66-27.71 63.38-28.352c23.72-.643 49.04 8.152 73.633 33.5l12.727 13.115L416 121.457l43.055 43.053zM256 192a64 64 0 0 0-64 64a64 64 0 0 0 64 64a64 64 0 0 0 64-64a64 64 0 0 0-64-64"
    }, null, -1)
  ]));
}
__name(render$6, "render$6");
const __unplugin_components_0$2 = markRaw({ name: "game-icons-detour", render: render$6 });
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "BypassButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _component_i_game_icons58detour = __unplugin_components_0$2;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "secondary",
        text: "",
        "data-testid": "bypass-button",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelectedNodes.Bypass"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_game_icons58detour)
        ]),
        _: 1
      })), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Bypass.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$k = { class: "relative" };
const _hoisted_2$9 = { class: "flex items-center gap-1" };
const _hoisted_3$7 = {
  key: 0,
  class: "color-picker-container absolute -top-10 left-1/2"
};
const _hoisted_4$4 = ["data-testid"];
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "ColorPickerButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const colorPaletteStore = useColorPaletteStore();
    const workflowStore = useWorkflowStore();
    const isLightTheme = computed(
      () => colorPaletteStore.completedActivePalette.light_theme
    );
    const toLightThemeColor = /* @__PURE__ */ __name((color) => adjustColor(color, { lightness: 0.5 }), "toLightThemeColor");
    const showColorPicker = ref(false);
    const NO_COLOR_OPTION = {
      name: "noColor",
      localizedName: t2("color.noColor"),
      value: {
        dark: LiteGraph.NODE_DEFAULT_BGCOLOR,
        light: toLightThemeColor(LiteGraph.NODE_DEFAULT_BGCOLOR)
      }
    };
    const colorOptions = [
      NO_COLOR_OPTION,
      ...Object.entries(LGraphCanvas.node_colors).map(([name, color]) => ({
        name,
        localizedName: t2(`color.${name}`),
        value: {
          dark: color.bgcolor,
          light: toLightThemeColor(color.bgcolor)
        }
      }))
    ];
    const selectedColorOption = ref(null);
    const applyColor = /* @__PURE__ */ __name((colorOption) => {
      const colorName = colorOption?.name ?? NO_COLOR_OPTION.name;
      const canvasColorOption = colorName === NO_COLOR_OPTION.name ? null : LGraphCanvas.node_colors[colorName];
      for (const item of canvasStore.selectedItems) {
        if (isColorable(item)) {
          item.setColorOption(canvasColorOption);
        }
      }
      canvasStore.canvas?.setDirty(true, true);
      currentColorOption.value = canvasColorOption;
      showColorPicker.value = false;
      workflowStore.activeWorkflow?.changeTracker.checkState();
    }, "applyColor");
    const currentColorOption = ref(null);
    const currentColor = computed(
      () => currentColorOption.value ? isLightTheme.value ? toLightThemeColor(currentColorOption.value?.bgcolor) : currentColorOption.value?.bgcolor : null
    );
    watch(
      () => canvasStore.selectedItems,
      (newSelectedItems) => {
        showColorPicker.value = false;
        selectedColorOption.value = null;
        currentColorOption.value = getItemsColorOption(newSelectedItems);
      }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        withDirectives(createVNode(unref(script), {
          severity: "secondary",
          text: "",
          onClick: _cache[0] || (_cache[0] = () => showColorPicker.value = !showColorPicker.value)
        }, {
          icon: withCtx(() => [
            createBaseVNode("div", _hoisted_2$9, [
              createBaseVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({ color: currentColor.value ?? "" })
              }, null, 4),
              _cache[1] || (_cache[1] = createBaseVNode("i", {
                class: "pi pi-chevron-down",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        }, 512), [
          [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected]
        ]),
        showColorPicker.value ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
          createVNode(unref(script$8), {
            "model-value": selectedColorOption.value,
            options: colorOptions,
            "option-label": "name",
            "data-key": "value",
            "onUpdate:modelValue": applyColor
          }, {
            option: withCtx(({ option }) => [
              withDirectives(createBaseVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({
                  color: isLightTheme.value ? option.value.light : option.value.dark
                }),
                "data-testid": option.name
              }, null, 12, _hoisted_4$4), [
                [
                  _directive_tooltip,
                  option.localizedName,
                  void 0,
                  { top: true }
                ]
              ])
            ]),
            _: 1
          }, 8, ["model-value"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ColorPickerButton = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-ff73ffce"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "DeleteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "danger",
        text: "",
        icon: "pi pi-trash",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.DeleteSelectedItems"))
      }, null, 512)), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_DeleteSelectedItems.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$j = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
__name(render$5, "render$5");
const __unplugin_components_1$1 = markRaw({ name: "lucide-play", render: render$5 });
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "ExecuteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const commandStore = useCommandStore();
    const canvas = canvasStore.getCanvas();
    const buttonHovered = ref(false);
    const selectedOutputNodes = computed(
      () => canvasStore.selectedItems.filter(
        (item) => isLGraphNode(item) && item.constructor.nodeData?.output_node
      )
    );
    const isDisabled = computed(() => selectedOutputNodes.value.length === 0);
    function outputNodeStokeStyle() {
      if (this.selected && this.constructor.nodeData?.output_node && buttonHovered.value) {
        return { color: "orange", lineWidth: 2, padding: 10 };
      }
    }
    __name(outputNodeStokeStyle, "outputNodeStokeStyle");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      buttonHovered.value = true;
      for (const node of selectedOutputNodes.value) {
        node.strokeStyles["outputNode"] = outputNodeStokeStyle;
      }
      canvas.setDirty(true);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      buttonHovered.value = false;
      canvas.setDirty(true);
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.QueueSelectedOutputNodes");
    }, "handleClick");
    return (_ctx, _cache) => {
      const _component_i_lucide58play = __unplugin_components_1$1;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: isDisabled.value ? "secondary" : "success",
        text: "",
        disabled: isDisabled.value,
        onMouseenter: _cache[0] || (_cache[0] = () => handleMouseEnter()),
        onMouseleave: _cache[1] || (_cache[1] = () => handleMouseLeave()),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          createVNode(_component_i_lucide58play)
        ]),
        _: 1
      }, 8, ["severity", "disabled"])), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: isDisabled.value ? unref(t2)("selectionToolbox.executeButton.disabledTooltip") : unref(t2)("selectionToolbox.executeButton.tooltip"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "ExtensionCommandButton",
  props: {
    command: {}
  },
  setup(__props) {
    const commandStore = useCommandStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "secondary",
        text: "",
        icon: typeof _ctx.command.icon === "function" ? _ctx.command.icon() : _ctx.command.icon,
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute(_ctx.command.id))
      }, null, 8, ["icon"])), [
        [
          _directive_tooltip,
          {
            value: unref(st)(`commands.${unref(normalizeI18nKey)(_ctx.command.id)}.label`, "") || void 0,
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "HelpButton",
  setup(__props) {
    const canvasStore = useCanvasStore();
    const nodeDefStore = useNodeDefStore();
    const sidebarTabStore = useSidebarTabStore();
    const nodeHelpStore = useNodeHelpStore();
    const { id: nodeLibraryTabId } = useNodeLibrarySidebarTab();
    const nodeDef = computed(() => {
      if (canvasStore.selectedItems.length !== 1) return null;
      const item = canvasStore.selectedItems[0];
      if (!isLGraphNode(item)) return null;
      return nodeDefStore.fromLGraphNode(item);
    });
    const showHelp = /* @__PURE__ */ __name(() => {
      const def = nodeDef.value;
      if (!def) return;
      if (sidebarTabStore.activeSidebarTabId !== nodeLibraryTabId) {
        sidebarTabStore.toggleSidebarTab(nodeLibraryTabId);
      }
      nodeHelpStore.openHelp(def);
    }, "showHelp");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        class: "help-button",
        text: "",
        icon: "pi pi-question-circle",
        severity: "secondary",
        onClick: showHelp
      }, null, 512)), [
        [vShow, nodeDef.value],
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.help"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "MaskEditorButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isSingleImageNode = computed(() => {
      const nodes = canvasStore.selectedItems.filter(isLGraphNode);
      return nodes.length === 1 && nodes.some(isImageNode);
    });
    const openMaskEditor = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
    }, "openMaskEditor");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        onClick: openMaskEditor
      }, null, 512)), [
        [vShow, isSingleImageNode.value],
        [
          _directive_tooltip,
          {
            value: unref(t)("commands.Comfy_MaskEditor_OpenMaskEditor.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "PinButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "secondary",
        text: "",
        icon: "pi pi-thumbtack",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelected.Pin"))
      }, null, 512)), [
        [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Pin.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const isRefreshableWidget = /* @__PURE__ */ __name((widget) => "refresh" in widget && typeof widget.refresh === "function", "isRefreshableWidget");
const useRefreshableSelection = /* @__PURE__ */ __name(() => {
  const graphStore = useCanvasStore();
  const selectedNodes = ref([]);
  watchEffect(() => {
    selectedNodes.value = graphStore.selectedItems.filter(isLGraphNode);
  });
  const refreshableWidgets = computed(
    () => selectedNodes.value.flatMap(
      (node) => node.widgets?.filter(isRefreshableWidget) ?? []
    )
  );
  const isRefreshable = computed(() => refreshableWidgets.value.length > 0);
  async function refreshSelected() {
    if (!isRefreshable.value) return;
    await Promise.all(refreshableWidgets.value.map((item) => item.refresh()));
  }
  __name(refreshSelected, "refreshSelected");
  return {
    isRefreshable,
    refreshSelected
  };
}, "useRefreshableSelection");
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "RefreshButton",
  setup(__props) {
    const { isRefreshable, refreshSelected } = useRefreshableSelection();
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "info",
        text: "",
        icon: "pi pi-refresh",
        onClick: unref(refreshSelected)
      }, null, 8, ["onClick"])), [
        [vShow, unref(isRefreshable)]
      ]);
    };
  }
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SelectionToolbox",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const extensionService = useExtensionService();
    const extensionToolboxCommands = computed(() => {
      const commandIds = new Set(
        canvasStore.selectedItems.map(
          (item) => extensionService.invokeExtensions("getSelectionToolboxCommands", item).flat()
        ).flat()
      );
      return Array.from(commandIds).map((commandId) => commandStore.getCommand(commandId)).filter((command) => command !== void 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$9), {
        class: "selection-toolbox absolute left-1/2 rounded-lg",
        pt: {
          header: "hidden",
          content: "p-0 flex flex-row"
        }
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$v),
          createVNode(ColorPickerButton),
          createVNode(_sfc_main$y),
          createVNode(_sfc_main$r),
          createVNode(_sfc_main$s),
          createVNode(_sfc_main$w),
          createVNode(_sfc_main$q),
          (openBlock(true), createElementBlock(Fragment, null, renderList(extensionToolboxCommands.value, (command) => {
            return openBlock(), createBlock(_sfc_main$u, {
              key: command.id,
              command
            }, null, 8, ["command"]);
          }), 128)),
          createVNode(_sfc_main$t)
        ]),
        _: 1
      });
    };
  }
});
const SelectionToolbox = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-6285b375"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "TitleEditor",
  setup(__props) {
    const settingStore = useSettingStore();
    const showInput = ref(false);
    const editedTitle = ref("");
    const { style: inputPositionStyle, updatePosition } = useAbsolutePosition();
    const inputFontStyle = ref({});
    const inputStyle = computed(() => ({
      ...inputPositionStyle.value,
      ...inputFontStyle.value
    }));
    const titleEditorStore = useTitleEditorStore();
    const canvasStore = useCanvasStore();
    const previousCanvasDraggable = ref(true);
    const onEdit = /* @__PURE__ */ __name((newValue) => {
      if (titleEditorStore.titleEditorTarget && newValue.trim() !== "") {
        titleEditorStore.titleEditorTarget.title = newValue.trim();
        app.graph.setDirtyCanvas(true, true);
      }
      showInput.value = false;
      titleEditorStore.titleEditorTarget = null;
      canvasStore.canvas.allow_dragcanvas = previousCanvasDraggable.value;
    }, "onEdit");
    watch(
      () => titleEditorStore.titleEditorTarget,
      (target) => {
        if (target === null) {
          return;
        }
        editedTitle.value = target.title;
        showInput.value = true;
        const canvas = canvasStore.canvas;
        previousCanvasDraggable.value = canvas.allow_dragcanvas;
        canvas.allow_dragcanvas = false;
        const scale = canvas.ds.scale;
        if (target instanceof LGraphGroup) {
          const group = target;
          updatePosition({
            pos: group.pos,
            size: [group.size[0], group.titleHeight]
          });
          inputFontStyle.value = { fontSize: `${group.font_size * scale}px` };
        } else if (target instanceof LGraphNode) {
          const node = target;
          const [x, y] = node.getBounding();
          updatePosition({
            pos: [x, y],
            size: [node.width, LiteGraph.NODE_TITLE_HEIGHT]
          });
          inputFontStyle.value = { fontSize: `${12 * scale}px` };
        }
      }
    );
    const canvasEventHandler = /* @__PURE__ */ __name((event) => {
      if (event.detail.subType === "group-double-click") {
        if (!settingStore.get("Comfy.Group.DoubleClickTitleToEdit")) {
          return;
        }
        const group = event.detail.group;
        const [_2, y] = group.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= group.titleHeight) {
          titleEditorStore.titleEditorTarget = group;
        }
      } else if (event.detail.subType === "node-double-click") {
        if (!settingStore.get("Comfy.Node.DoubleClickTitleToEdit")) {
          return;
        }
        const node = event.detail.node;
        const [_2, y] = node.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= 0) {
          titleEditorStore.titleEditorTarget = node;
        }
      }
    }, "canvasEventHandler");
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return showInput.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "group-title-editor node-title-editor",
        style: normalizeStyle(inputStyle.value)
      }, [
        createVNode(EditableText, {
          "is-editing": showInput.value,
          "model-value": editedTitle.value,
          onEdit
        }, null, 8, ["is-editing", "model-value"])
      ], 4)) : createCommentVNode("", true);
    };
  }
});
const TitleEditor = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-15c9b4cb"]]);
const useSearchBoxStore = defineStore("searchBox", () => {
  const visible = ref(false);
  function toggleVisible() {
    visible.value = !visible.value;
  }
  __name(toggleVisible, "toggleVisible");
  return {
    visible,
    toggleVisible
  };
});
var LinkReleaseTriggerMode = /* @__PURE__ */ ((LinkReleaseTriggerMode2) => {
  LinkReleaseTriggerMode2["ALWAYS"] = "always";
  LinkReleaseTriggerMode2["HOLD_SHIFT"] = "hold shift";
  LinkReleaseTriggerMode2["NOT_HOLD_SHIFT"] = "NOT hold shift";
  return LinkReleaseTriggerMode2;
})(LinkReleaseTriggerMode || {});
var LinkReleaseTriggerAction = /* @__PURE__ */ ((LinkReleaseTriggerAction2) => {
  LinkReleaseTriggerAction2["CONTEXT_MENU"] = "context menu";
  LinkReleaseTriggerAction2["SEARCH_BOX"] = "search box";
  LinkReleaseTriggerAction2["NO_ACTION"] = "no action";
  return LinkReleaseTriggerAction2;
})(LinkReleaseTriggerAction || {});
const _sfc_main$n = {
  name: "AutoCompletePlus",
  extends: script$a,
  emits: ["focused-option-changed"],
  data() {
    return {
      // Flag to determine if IME is active
      isComposing: false
    };
  },
  mounted() {
    if (typeof script$a.mounted === "function") {
      script$a.mounted.call(this);
    }
    const inputEl = this.$el.querySelector("input");
    if (inputEl) {
      inputEl.addEventListener("compositionstart", () => {
        this.isComposing = true;
      });
      inputEl.addEventListener("compositionend", () => {
        this.isComposing = false;
      });
    }
    this.$watch(
      () => this.focusedOptionIndex,
      (newVal, oldVal) => {
        this.$emit("focused-option-changed", newVal);
      }
    );
  },
  methods: {
    // Override onKeyDown to block Enter when IME is active
    onKeyDown(event) {
      if (event.key === "Enter" && this.isComposing) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      script$a.methods.onKeyDown.call(this, event);
    }
  }
};
const _hoisted_1$i = { class: "option-container flex justify-between items-center px-2 py-0 cursor-pointer overflow-hidden w-full" };
const _hoisted_2$8 = { class: "option-display-name font-semibold flex flex-col" };
const _hoisted_3$6 = { key: 0 };
const _hoisted_4$3 = ["innerHTML"];
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = {
  key: 0,
  class: "option-category font-light text-sm text-muted overflow-hidden text-ellipsis whitespace-nowrap"
};
const _hoisted_7$1 = { class: "option-badges" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchItem",
  props: {
    nodeDef: {},
    currentQuery: {}
  },
  setup(__props) {
    const settingStore = useSettingStore();
    const showCategory = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowCategory")
    );
    const showIdName = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowIdName")
    );
    const showNodeFrequency = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowNodeFrequency")
    );
    const nodeFrequencyStore = useNodeFrequencyStore();
    const nodeFrequency = computed(
      () => nodeFrequencyStore.getNodeFrequency(props.nodeDef)
    );
    const nodeBookmarkStore = useNodeBookmarkStore();
    const isBookmarked = computed(
      () => nodeBookmarkStore.isBookmarked(props.nodeDef)
    );
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", null, [
            isBookmarked.value ? (openBlock(), createElementBlock("span", _hoisted_3$6, _cache[0] || (_cache[0] = [
              createBaseVNode("i", { class: "pi pi-bookmark-fill text-sm mr-1" }, null, -1)
            ]))) : createCommentVNode("", true),
            createBaseVNode("span", {
              innerHTML: unref(highlightQuery)(_ctx.nodeDef.display_name, _ctx.currentQuery)
            }, null, 8, _hoisted_4$3),
            _cache[1] || (_cache[1] = createBaseVNode("span", null, " ", -1)),
            showIdName.value ? (openBlock(), createBlock(unref(script$b), {
              key: 1,
              severity: "secondary"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  innerHTML: unref(highlightQuery)(_ctx.nodeDef.name, _ctx.currentQuery)
                }, null, 8, _hoisted_5$1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          showCategory.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, toDisplayString(_ctx.nodeDef.category.replaceAll("/", " > ")), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          _ctx.nodeDef.experimental ? (openBlock(), createBlock(unref(script$b), {
            key: 0,
            value: _ctx.$t("g.experimental"),
            severity: "primary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.deprecated ? (openBlock(), createBlock(unref(script$b), {
            key: 1,
            value: _ctx.$t("g.deprecated"),
            severity: "danger"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          showNodeFrequency.value && nodeFrequency.value > 0 ? (openBlock(), createBlock(unref(script$b), {
            key: 2,
            value: unref(formatNumberWithSuffix)(nodeFrequency.value, { roundToInt: true }),
            severity: "secondary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.nodeSource.type !== unref(NodeSourceType).Unknown ? (openBlock(), createBlock(unref(script$c), {
            key: 3,
            class: "text-sm font-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.nodeDef.nodeSource.displayText), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const NodeSearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-2f72abbe"]]);
const _hoisted_1$h = { class: "comfy-vue-node-search-container flex justify-center items-center w-full min-w-96" };
const _hoisted_2$7 = {
  key: 0,
  class: "comfy-vue-node-preview-container absolute left-[-350px] top-[50px]"
};
const _hoisted_3$5 = { class: "_dialog-body" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBox",
  props: {
    filters: {},
    searchLimit: { default: 64 }
  },
  emits: ["addFilter", "removeFilter", "addNode"],
  setup(__props, { emit: __emit }) {
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const enableNodePreview = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.NodePreview")
    );
    const nodeSearchFilterVisible = ref(false);
    const inputId = `comfy-vue-node-search-box-input-${Math.random()}`;
    const suggestions = ref([]);
    const hoveredSuggestion = ref(null);
    const currentQuery = ref("");
    const placeholder = computed(() => {
      return __props.filters.length === 0 ? t2("g.searchNodes") + "..." : "";
    });
    const nodeDefStore = useNodeDefStore();
    const nodeFrequencyStore = useNodeFrequencyStore();
    const search = /* @__PURE__ */ __name((query) => {
      const queryIsEmpty = query === "" && __props.filters.length === 0;
      currentQuery.value = query;
      suggestions.value = queryIsEmpty ? nodeFrequencyStore.topNodeDefs : [
        ...nodeDefStore.nodeSearchService.searchNode(query, __props.filters, {
          limit: __props.searchLimit
        })
      ];
    }, "search");
    const emit = __emit;
    let inputElement = null;
    const reFocusInput = /* @__PURE__ */ __name(async () => {
      inputElement ??= document.getElementById(inputId);
      if (inputElement) {
        inputElement.blur();
        await nextTick(() => inputElement?.focus());
      }
    }, "reFocusInput");
    onMounted(reFocusInput);
    const onAddFilter = /* @__PURE__ */ __name((filterAndValue) => {
      nodeSearchFilterVisible.value = false;
      emit("addFilter", filterAndValue);
    }, "onAddFilter");
    const onRemoveFilter = /* @__PURE__ */ __name(async (event, filterAndValue) => {
      event.stopPropagation();
      event.preventDefault();
      emit("removeFilter", filterAndValue);
      await reFocusInput();
    }, "onRemoveFilter");
    const setHoverSuggestion = /* @__PURE__ */ __name((index) => {
      if (index === -1) {
        hoveredSuggestion.value = null;
        return;
      }
      const value = suggestions.value[index];
      hoveredSuggestion.value = value;
    }, "setHoverSuggestion");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        enableNodePreview.value ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
          hoveredSuggestion.value ? (openBlock(), createBlock(NodePreview, {
            key: hoveredSuggestion.value?.name || "",
            "node-def": hoveredSuggestion.value
          }, null, 8, ["node-def"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(unref(script), {
          icon: "pi pi-filter",
          severity: "secondary",
          class: "filter-button z-10",
          onClick: _cache[0] || (_cache[0] = ($event) => nodeSearchFilterVisible.value = true)
        }),
        createVNode(unref(script$d), {
          visible: nodeSearchFilterVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => nodeSearchFilterVisible.value = $event),
          class: "min-w-96",
          "dismissable-mask": "",
          modal: "",
          onHide: reFocusInput
        }, {
          header: withCtx(() => _cache[5] || (_cache[5] = [
            createBaseVNode("h3", null, "Add node filter condition", -1)
          ])),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$5, [
              createVNode(NodeSearchFilter, { onAddFilter })
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        createVNode(_sfc_main$n, {
          "model-value": _ctx.filters,
          class: "comfy-vue-node-search-box z-10 flex-grow",
          "scroll-height": "40vh",
          placeholder: placeholder.value,
          "input-id": inputId,
          "append-to": "self",
          suggestions: suggestions.value,
          "min-length": 0,
          delay: 100,
          loading: !unref(nodeFrequencyStore).isLoaded,
          "complete-on-focus": "",
          "auto-option-focus": "",
          "force-selection": "",
          multiple: "",
          "option-label": "display_name",
          onComplete: _cache[2] || (_cache[2] = ($event) => search($event.query)),
          onOptionSelect: _cache[3] || (_cache[3] = ($event) => emit("addNode", $event.value)),
          onFocusedOptionChanged: _cache[4] || (_cache[4] = ($event) => setHoverSuggestion($event))
        }, {
          option: withCtx(({ option }) => [
            createVNode(NodeSearchItem, {
              "node-def": option,
              "current-query": currentQuery.value
            }, null, 8, ["node-def", "current-query"])
          ]),
          chip: withCtx(({ value }) => [
            value.filterDef && value.value ? (openBlock(), createBlock(SearchFilterChip, {
              key: `${value.filterDef.id}-${value.value}`,
              text: value.value,
              badge: value.filterDef.invokeSequence.toUpperCase(),
              "badge-class": value.filterDef.invokeSequence + "-badge",
              onRemove: /* @__PURE__ */ __name(($event) => onRemoveFilter(
                $event,
                value
              ), "onRemove")
            }, null, 8, ["text", "badge", "badge-class", "onRemove"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "suggestions", "loading"])
      ]);
    };
  }
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBoxPopover",
  setup(__props) {
    let triggerEvent = null;
    let listenerController = null;
    let disconnectOnReset = false;
    const settingStore = useSettingStore();
    const litegraphService = useLitegraphService();
    const { visible } = storeToRefs(useSearchBoxStore());
    const dismissable = ref(true);
    const getNewNodeLocation = /* @__PURE__ */ __name(() => {
      return triggerEvent ? [triggerEvent.canvasX, triggerEvent.canvasY] : litegraphService.getCanvasCenter();
    }, "getNewNodeLocation");
    const nodeFilters = ref([]);
    const addFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value.push(filter);
    }, "addFilter");
    const removeFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value = nodeFilters.value.filter(
        (f) => toRaw(f) !== toRaw(filter)
      );
    }, "removeFilter");
    const clearFilters = /* @__PURE__ */ __name(() => {
      nodeFilters.value = [];
    }, "clearFilters");
    const closeDialog = /* @__PURE__ */ __name(() => {
      visible.value = false;
    }, "closeDialog");
    const canvasStore = useCanvasStore();
    const addNode = /* @__PURE__ */ __name((nodeDef) => {
      if (!triggerEvent) {
        console.warn("The trigger event was undefined when addNode was called.");
        return;
      }
      disconnectOnReset = false;
      const node = litegraphService.addNodeOnGraph(nodeDef, {
        pos: getNewNodeLocation()
      });
      canvasStore.getCanvas().linkConnector.connectToNode(node, triggerEvent);
      useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
      window.requestAnimationFrame(closeDialog);
    }, "addNode");
    const newSearchBoxEnabled = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl") === "default"
    );
    const showSearchBox = /* @__PURE__ */ __name((e) => {
      if (newSearchBoxEnabled.value) {
        if (e.pointerType === "touch") {
          setTimeout(() => {
            showNewSearchBox(e);
          }, 128);
        } else {
          showNewSearchBox(e);
        }
      } else {
        canvasStore.getCanvas().showSearchBox(e);
      }
    }, "showSearchBox");
    const getFirstLink = /* @__PURE__ */ __name(() => canvasStore.getCanvas().linkConnector.renderLinks.at(0), "getFirstLink");
    const nodeDefStore = useNodeDefStore();
    const showNewSearchBox = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (firstLink) {
        const filter = firstLink.toType === "input" ? nodeDefStore.nodeSearchService.inputTypeFilter : nodeDefStore.nodeSearchService.outputTypeFilter;
        const dataType = firstLink.fromSlot.type?.toString() ?? "";
        addFilter({
          filterDef: filter,
          value: dataType
        });
      }
      visible.value = true;
      triggerEvent = e;
      dismissable.value = false;
      setTimeout(() => {
        dismissable.value = true;
      }, 300);
    }, "showNewSearchBox");
    const showContextMenu = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (!firstLink) return;
      const { node, fromSlot, toType } = firstLink;
      const commonOptions = {
        e,
        allow_searchbox: true,
        showSearchBox: /* @__PURE__ */ __name(() => {
          cancelResetOnContextClose();
          showSearchBox(e);
        }, "showSearchBox")
      };
      const afterRerouteId = firstLink.fromReroute?.id;
      const connectionOptions = toType === "input" ? { nodeFrom: node, slotFrom: fromSlot, afterRerouteId } : { nodeTo: node, slotTo: fromSlot, afterRerouteId };
      const canvas = canvasStore.getCanvas();
      const menu = canvas.showConnectionMenu({
        ...connectionOptions,
        ...commonOptions
      });
      if (!menu) {
        console.warn("No menu was returned from showConnectionMenu");
        return;
      }
      triggerEvent = e;
      listenerController = new AbortController();
      const { signal } = listenerController;
      const options = { once: true, signal };
      useEventListener(
        canvas.canvas,
        "connect-new-default-node",
        (createEvent) => {
          if (!(createEvent instanceof CustomEvent))
            throw new Error("Invalid event");
          const node2 = createEvent.detail?.node;
          if (!(node2 instanceof LGraphNode)) throw new Error("Invalid node");
          disconnectOnReset = false;
          createEvent.preventDefault();
          canvas.linkConnector.connectToNode(node2, e);
        },
        options
      );
      const cancelResetOnContextClose = useEventListener(
        menu.controller.signal,
        "abort",
        reset,
        options
      );
    }, "showContextMenu");
    watchEffect(() => {
      const { canvas } = canvasStore;
      if (!canvas) return;
      LiteGraph.release_link_on_empty_shows_menu = false;
      canvas.allow_searchbox = false;
      useEventListener(
        canvas.linkConnector.events,
        "dropped-on-canvas",
        handleDroppedOnCanvas
      );
    });
    const canvasEventHandler = /* @__PURE__ */ __name((e) => {
      if (e.detail.subType === "empty-double-click") {
        showSearchBox(e.detail.originalEvent);
      } else if (e.detail.subType === "group-double-click") {
        const group = e.detail.group;
        const [_2, y] = group.pos;
        const relativeY = e.detail.originalEvent.canvasY - y;
        if (relativeY > group.titleHeight) {
          showSearchBox(e.detail.originalEvent);
        }
      }
    }, "canvasEventHandler");
    const linkReleaseAction = computed(
      () => settingStore.get("Comfy.LinkRelease.Action")
    );
    const linkReleaseActionShift = computed(
      () => settingStore.get("Comfy.LinkRelease.ActionShift")
    );
    const preventDefault = /* @__PURE__ */ __name((e) => e.preventDefault(), "preventDefault");
    const cancelNextReset = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.state.snapLinksPos = [e.detail.canvasX, e.detail.canvasY];
      useEventListener(canvas.linkConnector.events, "reset", preventDefault, {
        once: true
      });
    }, "cancelNextReset");
    const handleDroppedOnCanvas = /* @__PURE__ */ __name((e) => {
      disconnectOnReset = true;
      const action = e.detail.shiftKey ? linkReleaseActionShift.value : linkReleaseAction.value;
      switch (action) {
        case LinkReleaseTriggerAction.SEARCH_BOX:
          cancelNextReset(e);
          showSearchBox(e.detail);
          break;
        case LinkReleaseTriggerAction.CONTEXT_MENU:
          cancelNextReset(e);
          showContextMenu(e.detail);
          break;
        case LinkReleaseTriggerAction.NO_ACTION:
        default:
          break;
      }
    }, "handleDroppedOnCanvas");
    const reset = /* @__PURE__ */ __name(() => {
      listenerController?.abort();
      listenerController = null;
      triggerEvent = null;
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.events.removeEventListener("reset", preventDefault);
      if (disconnectOnReset) canvas.linkConnector.disconnectLinks();
      canvas.linkConnector.reset();
      canvas.setDirty(true, true);
    }, "reset");
    watch(visible, () => {
      if (!visible.value) reset();
    });
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(script$d), {
          visible: unref(visible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = $event : null),
          modal: "",
          "dismissable-mask": dismissable.value,
          pt: {
            root: {
              class: "invisible-dialog-root",
              role: "search"
            },
            mask: { class: "node-search-box-dialog-mask" },
            transition: {
              enterFromClass: "opacity-0 scale-75",
              // 100ms is the duration of the transition in the dialog component
              enterActiveClass: "transition-all duration-100 ease-out",
              leaveActiveClass: "transition-all duration-100 ease-in",
              leaveToClass: "opacity-0 scale-75"
            }
          },
          onHide: clearFilters
        }, {
          container: withCtx(() => [
            createVNode(_sfc_main$l, {
              filters: nodeFilters.value,
              onAddFilter: addFilter,
              onRemoveFilter: removeFilter,
              onAddNode: addNode
            }, null, 8, ["filters"])
          ]),
          _: 1
        }, 8, ["visible", "dismissable-mask"])
      ]);
    };
  }
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SidebarIcon",
  props: {
    icon: { default: "" },
    selected: { type: Boolean, default: false },
    tooltip: { default: "" },
    iconBadge: { type: [String, Function], default: "" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const overlayValue = computed(
      () => typeof __props.iconBadge === "function" ? __props.iconBadge() ?? "" : __props.iconBadge
    );
    const shouldShowBadge = computed(() => !!overlayValue.value);
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        text: "",
        pt: {
          root: {
            class: `side-bar-button ${_ctx.selected ? "p-button-primary side-bar-button-selected" : "p-button-secondary"}`,
            "aria-label": _ctx.tooltip
          }
        },
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
      }, {
        icon: withCtx(() => [
          shouldShowBadge.value ? (openBlock(), createBlock(unref(script$e), {
            key: 0,
            value: overlayValue.value
          }, {
            default: withCtx(() => [
              createBaseVNode("i", {
                class: normalizeClass(_ctx.icon + " side-bar-button-icon")
              }, null, 2)
            ]),
            _: 1
          }, 8, ["value"])) : (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass(_ctx.icon + " side-bar-button-icon")
          }, null, 2))
        ]),
        _: 1
      }, 8, ["pt"])), [
        [_directive_tooltip, { value: _ctx.tooltip, showDelay: 300, hideDelay: 300 }]
      ]);
    };
  }
});
const SidebarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-74bb79ce"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SidebarLogoutIcon",
  setup(__props) {
    const { t: t2 } = useI18n();
    const userStore = useUserStore();
    const tooltip = computed(
      () => `${t2("sideToolbar.logout")} (${userStore.currentUser?.username})`
    );
    const logout = /* @__PURE__ */ __name(async () => {
      await userStore.logout();
      window.location.reload();
    }, "logout");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "pi pi-sign-out",
        tooltip: tooltip.value,
        onClick: logout
      }, null, 8, ["tooltip"]);
    };
  }
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SidebarSettingsToggleIcon",
  setup(__props) {
    const dialogStore = useDialogStore();
    const showSetting = /* @__PURE__ */ __name(() => {
      dialogStore.showDialog({
        key: "global-settings",
        headerComponent: SettingDialogHeader,
        component: SettingDialogContent
      });
    }, "showSetting");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "pi pi-cog",
        class: "comfy-settings-btn",
        tooltip: _ctx.$t("g.settings"),
        onClick: showSetting
      }, null, 8, ["tooltip"]);
    };
  }
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SidebarThemeToggleIcon",
  setup(__props) {
    const colorPaletteStore = useColorPaletteStore();
    const icon = computed(
      () => colorPaletteStore.completedActivePalette.light_theme ? "pi pi-sun" : "pi pi-moon"
    );
    const commandStore = useCommandStore();
    const toggleTheme = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.ToggleTheme");
    }, "toggleTheme");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: icon.value,
        tooltip: _ctx.$t("sideToolbar.themeToggle"),
        class: "comfy-vue-theme-toggle",
        onClick: toggleTheme
      }, null, 8, ["icon", "tooltip"]);
    };
  }
});
const _hoisted_1$g = { class: "side-tool-bar-end" };
const _hoisted_2$6 = {
  key: 0,
  class: "sidebar-content-container h-full overflow-y-auto overflow-x-hidden"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SideToolbar",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const teleportTarget = computed(
      () => settingStore.get("Comfy.Sidebar.Location") === "left" ? ".comfyui-body-left" : ".comfyui-body-right"
    );
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const tabs = computed(() => workspaceStore.getSidebarTabs());
    const selectedTab = computed(() => workspaceStore.sidebarTab.activeSidebarTab);
    const onTabClick = /* @__PURE__ */ __name((item) => {
      workspaceStore.sidebarTab.toggleSidebarTab(item.id);
    }, "onTabClick");
    const keybindingStore = useKeybindingStore();
    const getTabTooltipSuffix = /* @__PURE__ */ __name((tab) => {
      const keybinding = keybindingStore.getKeybindingByCommandId(
        `Workspace.ToggleSidebarTab.${tab.id}`
      );
      return keybinding ? ` (${keybinding.combo.toString()})` : "";
    }, "getTabTooltipSuffix");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(Teleport, { to: teleportTarget.value }, [
          createBaseVNode("nav", {
            class: normalizeClass(["side-tool-bar-container", { "small-sidebar": isSmall.value }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
              return openBlock(), createBlock(SidebarIcon, {
                key: tab.id,
                icon: tab.icon,
                "icon-badge": tab.iconBadge,
                tooltip: tab.tooltip + getTabTooltipSuffix(tab),
                selected: tab.id === selectedTab.value?.id,
                class: normalizeClass(tab.id + "-tab-button"),
                onClick: /* @__PURE__ */ __name(($event) => onTabClick(tab), "onClick")
              }, null, 8, ["icon", "icon-badge", "tooltip", "selected", "class", "onClick"]);
            }), 128)),
            createBaseVNode("div", _hoisted_1$g, [
              unref(userStore).isMultiUserServer ? (openBlock(), createBlock(_sfc_main$i, { key: 0 })) : createCommentVNode("", true),
              createVNode(_sfc_main$g),
              createVNode(_sfc_main$h)
            ])
          ], 2)
        ], 8, ["to"])),
        selectedTab.value ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
          createVNode(_sfc_main$G, { extension: selectedTab.value }, null, 8, ["extension"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SideToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-44002598"]]);
const _hoisted_1$f = { class: "workflow-label text-sm max-w-[150px] truncate inline-block" };
const _hoisted_2$5 = { class: "relative" };
const _hoisted_3$4 = {
  key: 0,
  class: "status-indicator"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTab",
  props: {
    class: {},
    workflowOption: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const settingStore = useSettingStore();
    const workflowTabRef = ref(null);
    const autoSaveSetting = computed(
      () => settingStore.get("Comfy.Workflow.AutoSave")
    );
    const autoSaveDelay = computed(
      () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
    );
    const shouldShowStatusIndicator = computed(() => {
      if (workspaceStore.shiftDown) {
        return false;
      }
      if (!props.workflowOption.workflow.isPersisted) {
        return true;
      }
      if (props.workflowOption.workflow.isModified) {
        if (autoSaveSetting.value === "off") {
          return true;
        }
        if (autoSaveSetting.value === "after delay" && autoSaveDelay.value > 3e3) {
          return true;
        }
        return false;
      }
      return false;
    });
    const closeWorkflows = /* @__PURE__ */ __name(async (options) => {
      for (const opt of options) {
        if (!await useWorkflowService().closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown,
          hint: t2("sideToolbar.workflowTab.dirtyCloseHint")
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const tabGetter = /* @__PURE__ */ __name(() => workflowTabRef.value, "tabGetter");
    usePragmaticDraggable(tabGetter, {
      getInitialData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getInitialData")
    });
    usePragmaticDroppable(tabGetter, {
      getData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getData"),
      onDrop: /* @__PURE__ */ __name((e) => {
        const fromIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.source.data.workflowKey
        );
        const toIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.location.current.dropTargets[0]?.data.workflowKey
        );
        if (fromIndex !== toIndex) {
          workflowStore.reorderWorkflows(fromIndex, toIndex);
        }
      }, "onDrop")
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "workflowTabRef",
        ref: workflowTabRef,
        class: "flex p-2 gap-2 workflow-tab"
      }, _ctx.$attrs), [
        withDirectives((openBlock(), createElementBlock("span", _hoisted_1$f, [
          createTextVNode(toDisplayString(_ctx.workflowOption.workflow.filename), 1)
        ])), [
          [
            _directive_tooltip,
            _ctx.workflowOption.workflow.key,
            void 0,
            { bottom: true }
          ]
        ]),
        createBaseVNode("div", _hoisted_2$5, [
          shouldShowStatusIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_3$4, "•")) : createCommentVNode("", true),
          createVNode(unref(script), {
            class: "close-button p-0 w-auto",
            icon: "pi pi-times",
            text: "",
            severity: "secondary",
            size: "small",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onCloseWorkflow(_ctx.workflowOption), ["stop"]))
          })
        ])
      ], 16);
    };
  }
});
const WorkflowTab = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-7035c4df"]]);
const _hoisted_1$e = { class: "workflow-tabs-container flex flex-row max-w-full h-full" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabs",
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const workflowService = useWorkflowService();
    const workflowBookmarkStore = useWorkflowBookmarkStore();
    const rightClickedTab = ref();
    const menu = ref();
    const scrollPanelRef = ref();
    const workflowToOption = /* @__PURE__ */ __name((workflow) => ({
      value: workflow.path,
      workflow
    }), "workflowToOption");
    const options = computed(
      () => workflowStore.openWorkflows.map(workflowToOption)
    );
    const selectedWorkflow = computed(
      () => workflowStore.activeWorkflow ? workflowToOption(workflowStore.activeWorkflow) : null
    );
    const onWorkflowChange = /* @__PURE__ */ __name(async (option) => {
      if (!option) {
        return;
      }
      if (selectedWorkflow.value?.value === option.value) {
        return;
      }
      await workflowService.openWorkflow(option.workflow);
    }, "onWorkflowChange");
    const closeWorkflows = /* @__PURE__ */ __name(async (options2) => {
      for (const opt of options2) {
        if (!await workflowService.closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const showContextMenu = /* @__PURE__ */ __name((event, option) => {
      rightClickedTab.value = option;
      menu.value.show(event);
    }, "showContextMenu");
    const contextMenuItems = computed(() => {
      const tab = rightClickedTab.value;
      if (!tab) return [];
      const index = options.value.findIndex((v) => v.workflow === tab.workflow);
      return [
        {
          label: t2("tabMenu.duplicateTab"),
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(tab.workflow);
          }, "command")
        },
        {
          separator: true
        },
        {
          label: t2("tabMenu.closeTab"),
          command: /* @__PURE__ */ __name(() => onCloseWorkflow(tab), "command")
        },
        {
          label: t2("tabMenu.closeTabsToLeft"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(0, index)), "command"),
          disabled: index <= 0
        },
        {
          label: t2("tabMenu.closeTabsToRight"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(index + 1)), "command"),
          disabled: index === options.value.length - 1
        },
        {
          label: t2("tabMenu.closeOtherTabs"),
          command: /* @__PURE__ */ __name(() => closeWorkflows([
            ...options.value.slice(index + 1),
            ...options.value.slice(0, index)
          ]), "command"),
          disabled: options.value.length <= 1
        },
        {
          label: workflowBookmarkStore.isBookmarked(tab.workflow.path) ? t2("tabMenu.removeFromBookmarks") : t2("tabMenu.addToBookmarks"),
          command: /* @__PURE__ */ __name(() => workflowBookmarkStore.toggleBookmarked(tab.workflow.path), "command"),
          disabled: tab.workflow.isTemporary
        }
      ];
    });
    const commandStore = useCommandStore();
    const handleWheel = /* @__PURE__ */ __name((event) => {
      const scrollElement = event.currentTarget;
      const scrollAmount = event.deltaX || event.deltaY;
      scrollElement.scroll({
        left: scrollElement.scrollLeft + scrollAmount
      });
    }, "handleWheel");
    watch(
      () => workflowStore.activeWorkflow,
      async () => {
        if (!selectedWorkflow.value) return;
        await nextTick();
        const activeTabElement = document.querySelector(".p-togglebutton-checked");
        if (!activeTabElement || !scrollPanelRef.value) return;
        const container = scrollPanelRef.value.$el.querySelector(
          ".p-scrollpanel-content"
        );
        if (!container) return;
        const tabRect = activeTabElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetLeft = tabRect.left - containerRect.left;
        const offsetRight = tabRect.right - containerRect.right;
        if (offsetRight > 0) {
          container.scrollBy({ left: offsetRight });
        } else if (offsetLeft < 0) {
          container.scrollBy({ left: offsetLeft });
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createVNode(unref(script$f), {
          ref_key: "scrollPanelRef",
          ref: scrollPanelRef,
          class: "overflow-hidden no-drag",
          "pt:content": {
            class: "p-0 w-full",
            onwheel: handleWheel
          },
          "pt:bar-x": "h-1"
        }, {
          default: withCtx(() => [
            createVNode(unref(script$8), {
              class: normalizeClass(["workflow-tabs bg-transparent", props.class]),
              "model-value": selectedWorkflow.value,
              options: options.value,
              "option-label": "label",
              "data-key": "value",
              "onUpdate:modelValue": onWorkflowChange
            }, {
              option: withCtx(({ option }) => [
                createVNode(WorkflowTab, {
                  "workflow-option": option,
                  onContextmenu: /* @__PURE__ */ __name(($event) => showContextMenu($event, option), "onContextmenu"),
                  onMouseup: withModifiers(($event) => onCloseWorkflow(option), ["middle"])
                }, null, 8, ["workflow-option", "onContextmenu", "onMouseup"])
              ]),
              _: 1
            }, 8, ["class", "model-value", "options"])
          ]),
          _: 1
        }, 8, ["pt:content"]),
        withDirectives(createVNode(unref(script), {
          class: "new-blank-workflow-button flex-shrink-0 no-drag",
          icon: "pi pi-plus",
          text: "",
          severity: "secondary",
          "aria-label": _ctx.$t("sideToolbar.newBlankWorkflow"),
          onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.NewBlankWorkflow"))
        }, null, 8, ["aria-label"]), [
          [_directive_tooltip, { value: _ctx.$t("sideToolbar.newBlankWorkflow"), showDelay: 300 }]
        ]),
        createVNode(unref(script$g), {
          ref_key: "menu",
          ref: menu,
          model: contextMenuItems.value
        }, null, 8, ["model"])
      ]);
    };
  }
});
const WorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-7254c915"]]);
const _hoisted_1$d = { class: "absolute top-0 left-0 w-auto max-w-full" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SecondRowWorkflowTabs",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(WorkflowTabs)
      ]);
    };
  }
});
const SecondRowWorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6ab68035"]]);
const apiNodeCosts = {
  FluxProCannyNode: {
    vendor: "BFL",
    nodeName: "Flux 1: Canny Control Image",
    pricingParams: "-",
    pricePerRunRange: "$0.05",
    displayPrice: "$0.05/Run"
  },
  FluxProDepthNode: {
    vendor: "BFL",
    nodeName: "Flux 1: Depth Control Image",
    pricingParams: "-",
    pricePerRunRange: "$0.05",
    displayPrice: "$0.05/Run"
  },
  FluxProExpandNode: {
    vendor: "BFL",
    nodeName: "Flux 1: Expand Image",
    pricingParams: "-",
    pricePerRunRange: "$0.05",
    rateDocumentationUrl: "https://docs.bfl.ml/pricing/",
    displayPrice: "$0.05/Run"
  },
  FluxProFillNode: {
    vendor: "BFL",
    nodeName: "Flux 1: Fill Image",
    pricingParams: "-",
    pricePerRunRange: "$0.05",
    displayPrice: "$0.05/Run"
  },
  FluxProUltraImageNode: {
    vendor: "BFL",
    nodeName: "Flux 1.1: [pro] Ultra Image",
    pricingParams: "-",
    pricePerRunRange: "$0.06",
    displayPrice: "$0.06/Run"
  },
  IdeogramV1: {
    vendor: "Ideogram",
    nodeName: "Ideogram V1",
    pricingParams: "-",
    pricePerRunRange: "$0.06",
    rateDocumentationUrl: "https://about.ideogram.ai/api-pricing",
    displayPrice: "$0.06/Run"
  },
  IdeogramV2: {
    vendor: "Ideogram",
    nodeName: "Ideogram V2",
    pricingParams: "-",
    pricePerRunRange: "$0.08",
    displayPrice: "$0.08/Run"
  },
  IdeogramV3: {
    vendor: "Ideogram",
    nodeName: "Ideogram V3",
    pricingParams: "rendering_speed",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (low to medium)"
  },
  KlingCameraControlI2VNode: {
    vendor: "Kling",
    nodeName: "Kling Image to Video (Camera Control)",
    pricingParams: "-",
    pricePerRunRange: "$0.49",
    displayPrice: "$0.49/Run"
  },
  KlingCameraControlT2VNode: {
    vendor: "Kling",
    nodeName: "Kling Text to Video (Camera Control)",
    pricingParams: "-",
    pricePerRunRange: "$0.14",
    displayPrice: "$0.14/Run"
  },
  KlingDualCharacterVideoEffectNode: {
    vendor: "Kling",
    nodeName: "Kling Dual Character Video Effects",
    pricingParams: "Priced the same as t2v based on mode, model, and duration.",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  KlingImage2VideoNode: {
    vendor: "Kling",
    nodeName: "Kling Image to Video",
    pricingParams: "Same as Text to Video",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  KlingImageGenerationNode: {
    vendor: "Kling",
    nodeName: "Kling Image Generation",
    pricingParams: "modality | model",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (low)"
  },
  KlingLipSyncAudioToVideoNode: {
    vendor: "Kling",
    nodeName: "Kling Lip Sync Video with Audio",
    pricingParams: "duration of input video",
    pricePerRunRange: "$0.07",
    displayPrice: "$0.07/Run"
  },
  KlingLipSyncTextToVideoNode: {
    vendor: "Kling",
    nodeName: "Kling Lip Sync Video with Text",
    pricingParams: "duration of input video",
    pricePerRunRange: "$0.07",
    displayPrice: "$0.07/Run"
  },
  KlingSingleImageVideoEffectNode: {
    vendor: "Kling",
    nodeName: "Kling Video Effects",
    pricingParams: "effect_scene",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  KlingStartEndFrameNode: {
    vendor: "Kling",
    nodeName: "Kling Start-End Frame to Video",
    pricingParams: "Same as text to video",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  KlingTextToVideoNode: {
    vendor: "Kling",
    nodeName: "Kling Text to Video",
    pricingParams: "model | duration | mode",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium to high)"
  },
  KlingVideoExtendNode: {
    vendor: "Kling",
    nodeName: "Kling Video Extend",
    pricingParams: "-",
    pricePerRunRange: "$0.28",
    displayPrice: "$0.28/Run"
  },
  KlingVirtualTryOnNode: {
    vendor: "Kling",
    nodeName: "Kling Virtual Try On",
    pricingParams: "-",
    pricePerRunRange: "$0.07",
    displayPrice: "$0.07/Run"
  },
  LumaImageToVideoNode: {
    vendor: "Luma",
    nodeName: "Luma Image to Video",
    pricingParams: "Same as Text to Video",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://lumalabs.ai/api/pricing",
    displayPrice: "Variable pricing (medium to high)"
  },
  LumaVideoNode: {
    vendor: "Luma",
    nodeName: "Luma Text to Video",
    pricingParams: "model | resolution | duration",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://lumalabs.ai/api/pricing",
    displayPrice: "Variable pricing (medium to high)"
  },
  MinimaxImageToVideoNode: {
    vendor: "Minimax",
    nodeName: "MiniMax Image to Video",
    pricingParams: "-",
    pricePerRunRange: "$0.43",
    rateDocumentationUrl: "https://www.minimax.io/price",
    displayPrice: "$0.43/Run"
  },
  MinimaxTextToVideoNode: {
    vendor: "Minimax",
    nodeName: "MiniMax Text to Video",
    pricingParams: "-",
    pricePerRunRange: "$0.43",
    rateDocumentationUrl: "https://www.minimax.io/price",
    displayPrice: "$0.43/Run"
  },
  OpenAIDalle2: {
    vendor: "OpenAI",
    nodeName: "dall-e-2",
    pricingParams: "size",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://platform.openai.com/docs/pricing",
    displayPrice: "Variable pricing (low)"
  },
  OpenAIDalle3: {
    vendor: "OpenAI",
    nodeName: "dall-e-3",
    pricingParams: "size | quality",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://platform.openai.com/docs/pricing",
    displayPrice: "Variable pricing (medium)"
  },
  OpenAIGPTImage1: {
    vendor: "OpenAI",
    nodeName: "gpt-image-1",
    pricingParams: "quality",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://platform.openai.com/docs/pricing",
    displayPrice: "Variable pricing (low to high)"
  },
  PikaImageToVideoNode2_2: {
    vendor: "Pika",
    nodeName: "Pika Image to Video",
    pricingParams: "duration | resolution",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  PikaScenesV2_2: {
    vendor: "Pika",
    nodeName: "Pika Scenes (Video Image Composition)",
    pricingParams: "duration | resolution",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  PikaStartEndFrameNode2_2: {
    vendor: "Pika",
    nodeName: "Pika Start and End Frame to Video",
    pricingParams: "duration | resolution",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  PikaTextToVideoNode2_2: {
    vendor: "Pika",
    nodeName: "Pika Text to Video",
    pricingParams: "duration | resolution",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium)"
  },
  Pikadditions: {
    vendor: "Pika",
    nodeName: "Pikadditions (Video Object Insertion)",
    pricingParams: "-",
    pricePerRunRange: "$0.3",
    displayPrice: "$0.3/Run"
  },
  Pikaffects: {
    vendor: "Pika",
    nodeName: "Pikaffects (Video Effects)",
    pricingParams: "-",
    pricePerRunRange: "$0.45",
    displayPrice: "$0.45/Run"
  },
  Pikaswaps: {
    vendor: "Pika",
    nodeName: "Pika Swaps (Video Object Replacement)",
    pricingParams: "-",
    pricePerRunRange: "$0.3",
    displayPrice: "$0.3/Run"
  },
  PixverseImageToVideoNode: {
    vendor: "Pixverse",
    nodeName: "PixVerse Image to Video",
    pricingParams: "same as text to video",
    pricePerRunRange: "$0.9",
    displayPrice: "$0.9/Run"
  },
  PixverseTextToVideoNode: {
    vendor: "Pixverse",
    nodeName: "PixVerse Text to Video",
    pricingParams: "duration | quality | motion_mode",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (medium to high)"
  },
  PixverseTransitionVideoNode: {
    vendor: "Pixverse",
    nodeName: "PixVerse Transition Video",
    pricingParams: "same as text to video",
    pricePerRunRange: "$0.9",
    displayPrice: "$0.9/Run"
  },
  RecraftCreativeUpscaleNode: {
    vendor: "Recraft",
    nodeName: "Recraft Creative Upscale Image",
    pricingParams: "-",
    pricePerRunRange: "$0.25",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.25/Run"
  },
  RecraftCrispUpscaleNode: {
    vendor: "Recraft",
    nodeName: "Recraft Crisp Upscale Image",
    pricingParams: "-",
    pricePerRunRange: "$0.004",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.004/Run"
  },
  RecraftImageInpaintingNode: {
    vendor: "Recraft",
    nodeName: "Recraft Image Inpainting",
    pricingParams: "n",
    pricePerRunRange: "$$0.04 x n",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.04 x n/Run"
  },
  RecraftImageToImageNode: {
    vendor: "Recraft",
    nodeName: "Recraft Image to Image",
    pricingParams: "n",
    pricePerRunRange: "$0.04 x n",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.04 x n/Run"
  },
  RecraftRemoveBackgroundNode: {
    vendor: "Recraft",
    nodeName: "Recraft Remove Background",
    pricingParams: "-",
    pricePerRunRange: "$0.01",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.01/Run"
  },
  RecraftReplaceBackgroundNode: {
    vendor: "Recraft",
    nodeName: "Recraft Replace Background",
    pricingParams: "n",
    pricePerRunRange: "$0.04",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.04/Run"
  },
  RecraftTextToImageNode: {
    vendor: "Recraft",
    nodeName: "Recraft Text to Image",
    pricingParams: "model | n",
    pricePerRunRange: "$0.04 x n",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.04 x n/Run"
  },
  RecraftTextToVectorNode: {
    vendor: "Recraft",
    nodeName: "Recraft Text to Vector",
    pricingParams: "model | n",
    pricePerRunRange: "$0.08 x n",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.08 x n/Run"
  },
  RecraftVectorizeImageNode: {
    vendor: "Recraft",
    nodeName: "Recraft Vectorize Image",
    pricingParams: "-",
    pricePerRunRange: "$0.01",
    rateDocumentationUrl: "https://www.recraft.ai/docs#pricing",
    displayPrice: "$0.01/Run"
  },
  StabilityStableImageSD_3_5Node: {
    vendor: "Stability",
    nodeName: "Stability AI Stable Diffusion 3.5 Image",
    pricingParams: "model",
    pricePerRunRange: "dynamic",
    displayPrice: "Variable pricing (low)"
  },
  StabilityStableImageUltraNode: {
    vendor: "Stability",
    nodeName: "Stability AI Stable Image Ultra",
    pricingParams: "-",
    pricePerRunRange: "$0.08",
    displayPrice: "$0.08/Run"
  },
  StabilityUpscaleConservativeNode: {
    vendor: "Stability",
    nodeName: "Stability AI Upscale Conservative",
    pricingParams: "-",
    pricePerRunRange: "$0.25",
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleCreativeNode: {
    vendor: "Stability",
    nodeName: "Stability AI Upscale Creative",
    pricingParams: "-",
    pricePerRunRange: "$0.25",
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleFastNode: {
    vendor: "Stability",
    nodeName: "Stability AI Upscale Fast",
    pricingParams: "-",
    pricePerRunRange: "$0.01",
    displayPrice: "$0.01/Run"
  },
  VeoVideoGenerationNode: {
    vendor: "Veo",
    nodeName: "Google Veo2 Video Generation",
    pricingParams: "duration_seconds",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    displayPrice: "Variable pricing (high)"
  },
  LumaTextToImageNode: {
    vendor: "Luma",
    nodeName: "Luma Text to Image",
    pricingParams: "model | aspect_ratio",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://lumalabs.ai/api/pricing",
    displayPrice: "Variable pricing (low to medium)"
  },
  LumaImageToImageNode: {
    vendor: "Luma",
    nodeName: "Luma Image to Image",
    pricingParams: "Same as Text to Image",
    pricePerRunRange: "dynamic",
    rateDocumentationUrl: "https://lumalabs.ai/api/pricing",
    displayPrice: "Variable pricing (low to medium)"
  }
};
const useNodePricing = /* @__PURE__ */ __name(() => {
  const getNodePrice = /* @__PURE__ */ __name((nodeName) => apiNodeCosts[nodeName]?.displayPrice || "", "getNodePrice");
  const getNodeDisplayPrice = /* @__PURE__ */ __name((node) => {
    if (!node.constructor.nodeData?.api_node) return "";
    return getNodePrice(node.constructor.nodeData.name);
  }, "getNodeDisplayPrice");
  return {
    getNodeDisplayPrice
  };
}, "useNodePricing");
const useNodeBadge = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const extensionStore = useExtensionStore();
  const colorPaletteStore = useColorPaletteStore();
  const nodeSourceBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeSourceBadgeMode")
  );
  const nodeIdBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeIdBadgeMode")
  );
  const nodeLifeCycleBadgeMode = computed(
    () => settingStore.get(
      "Comfy.NodeBadge.NodeLifeCycleBadgeMode"
    )
  );
  const showApiPricingBadge = computed(
    () => settingStore.get("Comfy.NodeBadge.ShowApiPricing")
  );
  watch(
    [
      nodeSourceBadgeMode,
      nodeIdBadgeMode,
      nodeLifeCycleBadgeMode,
      showApiPricingBadge
    ],
    () => {
      app.graph?.setDirtyCanvas(true, true);
    }
  );
  const nodeDefStore = useNodeDefStore();
  function badgeTextVisible(nodeDef, badgeMode) {
    return !(badgeMode === NodeBadgeMode.None || nodeDef?.isCoreNode && badgeMode === NodeBadgeMode.HideBuiltIn);
  }
  __name(badgeTextVisible, "badgeTextVisible");
  onMounted(() => {
    const nodePricing = useNodePricing();
    extensionStore.registerExtension({
      name: "Comfy.NodeBadge",
      nodeCreated(node) {
        node.badgePosition = BadgePosition.TopRight;
        const badge = computed(() => {
          const nodeDef = nodeDefStore.fromLGraphNode(node);
          return new LGraphBadge({
            text: _.truncate(
              [
                badgeTextVisible(nodeDef, nodeIdBadgeMode.value) ? `#${node.id}` : "",
                badgeTextVisible(nodeDef, nodeLifeCycleBadgeMode.value) ? nodeDef?.nodeLifeCycleBadgeText ?? "" : "",
                badgeTextVisible(nodeDef, nodeSourceBadgeMode.value) ? nodeDef?.nodeSource?.badgeText ?? "" : ""
              ].filter((s) => s.length > 0).join(" "),
              {
                length: 31
              }
            ),
            fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
            bgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_BG_COLOR
          });
        });
        node.badges.push(() => badge.value);
        if (node.constructor.nodeData?.api_node && showApiPricingBadge.value) {
          const price = nodePricing.getNodeDisplayPrice(node);
          const creditsBadge = computed(() => {
            const isLightTheme = colorPaletteStore.completedActivePalette.light_theme;
            return new LGraphBadge({
              text: price,
              iconOptions: {
                unicode: "",
                fontFamily: "PrimeIcons",
                color: isLightTheme ? adjustColor("#FABC25", { lightness: 0.5 }) : "#FABC25",
                bgColor: isLightTheme ? adjustColor("#654020", { lightness: 0.5 }) : "#654020",
                fontSize: 8
              },
              fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
              bgColor: isLightTheme ? adjustColor("#8D6932", { lightness: 0.5 }) : "#8D6932"
            });
          });
          node.badges.push(() => creditsBadge.value);
        }
      }
    });
  });
}, "useNodeBadge");
const useCanvasDrop = /* @__PURE__ */ __name((canvasRef) => {
  const modelToNodeStore = useModelToNodeStore();
  const litegraphService = useLitegraphService();
  const workflowService = useWorkflowService();
  usePragmaticDroppable(() => canvasRef.value, {
    getDropEffect: /* @__PURE__ */ __name((args) => args.source.data.type === "tree-explorer-node" ? "copy" : "move", "getDropEffect"),
    onDrop: /* @__PURE__ */ __name(async (event) => {
      const loc = event.location.current.input;
      const dndData = event.source.data;
      if (dndData.type === "tree-explorer-node") {
        const node = dndData.data;
        if (node.data instanceof ComfyNodeDefImpl) {
          const nodeDef = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
          litegraphService.addNodeOnGraph(nodeDef, { pos });
        } else if (node.data instanceof ComfyModelDef) {
          const model = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          const nodeAtPos = app.graph.getNodeOnPos(pos[0], pos[1]);
          let targetProvider = null;
          let targetGraphNode = null;
          if (nodeAtPos) {
            const providers = modelToNodeStore.getAllNodeProviders(
              model.directory
            );
            for (const provider of providers) {
              if (provider.nodeDef.name === nodeAtPos.comfyClass) {
                targetGraphNode = nodeAtPos;
                targetProvider = provider;
              }
            }
          }
          if (!targetGraphNode) {
            const provider = modelToNodeStore.getNodeProvider(model.directory);
            if (provider) {
              targetGraphNode = litegraphService.addNodeOnGraph(
                provider.nodeDef,
                {
                  pos
                }
              );
              targetProvider = provider;
            }
          }
          if (targetGraphNode) {
            const widget = targetGraphNode.widgets?.find(
              (widget2) => widget2.name === targetProvider?.key
            );
            if (widget) {
              widget.value = model.file_name;
            }
          }
        } else if (node.data instanceof ComfyWorkflow) {
          const workflow = node.data;
          const position = app.clientPosToCanvasPos([
            loc.clientX,
            loc.clientY
          ]);
          await workflowService.insertWorkflow(workflow, { position });
        }
      }
    }, "onDrop")
  });
}, "useCanvasDrop");
const useContextMenuTranslation = /* @__PURE__ */ __name(() => {
  const f = LGraphCanvas.prototype.getCanvasMenuOptions;
  const getCanvasCenterMenuOptions = /* @__PURE__ */ __name(function(...args) {
    const res = f.apply(this, args);
    for (const item of res) {
      if (item?.content) {
        item.content = st(`contextMenu.${item.content}`, item.content);
      }
    }
    return res;
  }, "getCanvasCenterMenuOptions");
  LGraphCanvas.prototype.getCanvasMenuOptions = getCanvasCenterMenuOptions;
  function translateMenus(values, options) {
    if (!values) return;
    const reInput = /Convert (.*) to input/;
    const reWidget = /Convert (.*) to widget/;
    const cvt = st("contextMenu.Convert ", "Convert ");
    const tinp = st("contextMenu. to input", " to input");
    const twgt = st("contextMenu. to widget", " to widget");
    for (const value of values) {
      if (typeof value === "string") continue;
      translateMenus(value?.submenu?.options, options);
      if (!value?.content) {
        continue;
      }
      if (te(`contextMenu.${value.content}`)) {
        value.content = st(`contextMenu.${value.content}`, value.content);
      }
      const extraInfo = options.extra || options.parentMenu?.options?.extra;
      const matchInput = value.content?.match(reInput);
      if (matchInput) {
        let match = matchInput[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + tinp;
        continue;
      }
      const matchWidget = value.content?.match(reWidget);
      if (matchWidget) {
        let match = matchWidget[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + twgt;
        continue;
      }
    }
  }
  __name(translateMenus, "translateMenus");
  const OriginalContextMenu = LiteGraph.ContextMenu;
  function ContextMenu2(values, options) {
    if (options.title) {
      options.title = st(
        `nodeDefs.${normalizeI18nKey(options.title)}.display_name`,
        options.title
      );
    }
    translateMenus(values, options);
    const ctx = new OriginalContextMenu(values, options);
    return ctx;
  }
  __name(ContextMenu2, "ContextMenu");
  LiteGraph.ContextMenu = ContextMenu2;
  LiteGraph.ContextMenu.prototype = OriginalContextMenu.prototype;
}, "useContextMenuTranslation");
const useCopy = /* @__PURE__ */ __name(() => {
  const canvasStore = useCanvasStore();
  useEventListener(document, "copy", (e) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
      return;
    }
    const isTargetInGraph = e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas";
    const canvas = canvasStore.canvas;
    if (isTargetInGraph && canvas?.selectedItems) {
      canvas.copyToClipboard();
      e.clipboardData?.setData("text", " ");
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  });
}, "useCopy");
const useGlobalLitegraph = /* @__PURE__ */ __name(() => {
  window["LiteGraph"] = LiteGraph;
  window["LGraph"] = LGraph;
  window["LLink"] = LLink;
  window["LGraphNode"] = LGraphNode;
  window["LGraphGroup"] = LGraphGroup;
  window["DragAndScale"] = DragAndScale;
  window["LGraphCanvas"] = LGraphCanvas;
  window["ContextMenu"] = ContextMenu;
  window["LGraphBadge"] = LGraphBadge;
}, "useGlobalLitegraph");
const useLitegraphSettings = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const canvasStore = useCanvasStore();
  watchEffect(() => {
    const canvasInfoEnabled = settingStore.get("Comfy.Graph.CanvasInfo");
    if (canvasStore.canvas) {
      canvasStore.canvas.show_info = canvasInfoEnabled;
    }
  });
  watchEffect(() => {
    const zoomSpeed = settingStore.get("Comfy.Graph.ZoomSpeed");
    if (canvasStore.canvas) {
      canvasStore.canvas.zoom_speed = zoomSpeed;
    }
  });
  watchEffect(() => {
    LiteGraph.snaps_for_comfy = settingStore.get(
      "Comfy.Node.AutoSnapLinkToSlot"
    );
  });
  watchEffect(() => {
    LiteGraph.snap_highlights_node = settingStore.get(
      "Comfy.Node.SnapHighlightsNode"
    );
  });
  watchEffect(() => {
    LGraphNode.keepAllLinksOnBypass = settingStore.get(
      "Comfy.Node.BypassAllLinksOnDelete"
    );
  });
  watchEffect(() => {
    LiteGraph.middle_click_slot_add_default_node = settingStore.get(
      "Comfy.Node.MiddleClickRerouteNode"
    );
  });
  watchEffect(() => {
    const linkRenderMode = settingStore.get("Comfy.LinkRenderMode");
    if (canvasStore.canvas) {
      canvasStore.canvas.links_render_mode = linkRenderMode;
      canvasStore.canvas.setDirty(
        /* fg */
        false,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const lowQualityRenderingZoomThreshold = settingStore.get(
      "LiteGraph.Canvas.LowQualityRenderingZoomThreshold"
    );
    if (canvasStore.canvas) {
      canvasStore.canvas.low_quality_zoom_threshold = lowQualityRenderingZoomThreshold;
      canvasStore.canvas.setDirty(
        /* fg */
        true,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const linkMarkerShape = settingStore.get("Comfy.Graph.LinkMarkers");
    const { canvas } = canvasStore;
    if (canvas) {
      canvas.linkMarkerShape = linkMarkerShape;
      canvas.setDirty(false, true);
    }
  });
  watchEffect(() => {
    const maximumFps = settingStore.get("LiteGraph.Canvas.MaximumFps");
    const { canvas } = canvasStore;
    if (canvas) canvas.maximumFps = maximumFps;
  });
  watchEffect(() => {
    const dragZoomEnabled = settingStore.get("Comfy.Graph.CtrlShiftZoom");
    const { canvas } = canvasStore;
    if (canvas) canvas.dragZoomEnabled = dragZoomEnabled;
  });
  watchEffect(() => {
    CanvasPointer.doubleClickTime = settingStore.get(
      "Comfy.Pointer.DoubleClickTime"
    );
  });
  watchEffect(() => {
    CanvasPointer.bufferTime = settingStore.get("Comfy.Pointer.ClickBufferTime");
  });
  watchEffect(() => {
    CanvasPointer.maxClickDrift = settingStore.get("Comfy.Pointer.ClickDrift");
  });
  watchEffect(() => {
    LiteGraph.CANVAS_GRID_SIZE = settingStore.get("Comfy.SnapToGrid.GridSize");
  });
  watchEffect(() => {
    LiteGraph.alwaysSnapToGrid = settingStore.get("pysssss.SnapToGrid");
  });
  watchEffect(() => {
    LiteGraph.context_menu_scaling = settingStore.get(
      "LiteGraph.ContextMenu.Scaling"
    );
  });
  watchEffect(() => {
    LiteGraph.Reroute.maxSplineOffset = settingStore.get(
      "LiteGraph.Reroute.SplineOffset"
    );
  });
  watchEffect(() => {
    LiteGraph.macTrackpadGestures = settingStore.get(
      "LiteGraph.Pointer.TrackpadGestures"
    );
  });
  watchEffect(() => {
    LiteGraph.saveViewportWithGraph = settingStore.get(
      "Comfy.EnableWorkflowViewRestore"
    );
  });
}, "useLitegraphSettings");
const usePaste = /* @__PURE__ */ __name(() => {
  const workspaceStore = useWorkspaceStore();
  const canvasStore = useCanvasStore();
  const pasteItemsOnNode = /* @__PURE__ */ __name((items, node, contentType) => {
    if (!node) return;
    const filteredItems = Array.from(items).filter(
      (item) => item.type.startsWith(contentType)
    );
    const blob = filteredItems[0]?.getAsFile();
    if (!blob) return;
    node.pasteFile?.(blob);
    node.pasteFiles?.(
      Array.from(filteredItems).map((i) => i.getAsFile()).filter((f) => f !== null)
    );
  }, "pasteItemsOnNode");
  useEventListener(document, "paste", async (e) => {
    const isTargetInGraph = e.target instanceof Element && (e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas");
    if (!isTargetInGraph) return;
    if (workspaceStore.shiftDown) return;
    const { canvas } = canvasStore;
    if (!canvas) return;
    const { graph } = canvas;
    let data = e.clipboardData;
    if (!data) throw new Error("No clipboard data on clipboard event");
    const { items } = data;
    const currentNode = canvas.current_node;
    const isNodeSelected = currentNode?.is_selected;
    const isImageNodeSelected = isNodeSelected && isImageNode(currentNode);
    const isVideoNodeSelected = isNodeSelected && isVideoNode(currentNode);
    const isAudioNodeSelected = isNodeSelected && isAudioNode(currentNode);
    let imageNode = isImageNodeSelected ? currentNode : null;
    let audioNode = isAudioNodeSelected ? currentNode : null;
    const videoNode = isVideoNodeSelected ? currentNode : null;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        if (!imageNode) {
          const newNode = LiteGraph.createNode("LoadImage");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            imageNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, imageNode, "image");
        return;
      } else if (item.type.startsWith("video/")) {
        if (!videoNode) {
        } else {
          pasteItemsOnNode(items, videoNode, "video");
          return;
        }
      } else if (item.type.startsWith("audio/")) {
        if (!audioNode) {
          const newNode = LiteGraph.createNode("LoadAudio");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            audioNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, audioNode, "audio");
        return;
      }
    }
    data = data.getData("text/plain");
    let workflow = null;
    try {
      data = data.slice(data.indexOf("{"));
      workflow = JSON.parse(data);
    } catch (err) {
      try {
        data = data.slice(data.indexOf("workflow\n"));
        data = data.slice(data.indexOf("{"));
        workflow = JSON.parse(data);
      } catch (error) {
        workflow = null;
      }
    }
    if (workflow && workflow.version && workflow.nodes && workflow.extra) {
      await app.loadGraphData(workflow);
    } else {
      if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
        return;
      }
      canvas.pasteFromClipboard();
    }
  });
}, "usePaste");
function useWorkflowAutoSave() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowService = useWorkflowService();
  const autoSaveSetting = computed(
    () => settingStore.get("Comfy.Workflow.AutoSave")
  );
  const autoSaveDelay = computed(
    () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
  );
  let autoSaveTimeout = null;
  let isSaving = false;
  let needsAutoSave = false;
  const scheduleAutoSave = /* @__PURE__ */ __name(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    if (autoSaveSetting.value === "after delay") {
      if (isSaving) {
        needsAutoSave = true;
        return;
      }
      const delay = autoSaveDelay.value;
      autoSaveTimeout = setTimeout(async () => {
        const activeWorkflow = workflowStore.activeWorkflow;
        if (activeWorkflow?.isModified && activeWorkflow.isPersisted) {
          try {
            isSaving = true;
            await workflowService.saveWorkflow(activeWorkflow);
          } catch (err) {
            console.error("Auto save failed:", err);
          } finally {
            isSaving = false;
            if (needsAutoSave) {
              needsAutoSave = false;
              scheduleAutoSave();
            }
          }
        }
      }, delay);
    }
  }, "scheduleAutoSave");
  watch(
    autoSaveSetting,
    (newSetting) => {
      if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = null;
      }
      if (newSetting === "after delay" && workflowStore.activeWorkflow?.isModified) {
        scheduleAutoSave();
      }
    },
    { immediate: true }
  );
  const onGraphChanged = /* @__PURE__ */ __name(() => {
    scheduleAutoSave();
  }, "onGraphChanged");
  api.addEventListener("graphChanged", onGraphChanged);
  onUnmounted(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    api.removeEventListener("graphChanged", onGraphChanged);
  });
}
__name(useWorkflowAutoSave, "useWorkflowAutoSave");
function useWorkflowPersistence() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowPersistenceEnabled = computed(
    () => settingStore.get("Comfy.Workflow.Persist")
  );
  const persistCurrentWorkflow = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const workflow = JSON.stringify(app.graph.serialize());
    localStorage.setItem("workflow", workflow);
    if (api.clientId) {
      sessionStorage.setItem(`workflow:${api.clientId}`, workflow);
    }
  }, "persistCurrentWorkflow");
  const loadWorkflowFromStorage = /* @__PURE__ */ __name(async (json, workflowName) => {
    if (!json) return false;
    const workflow = JSON.parse(json);
    await app.loadGraphData(workflow, true, true, workflowName);
    return true;
  }, "loadWorkflowFromStorage");
  const loadPreviousWorkflowFromStorage = /* @__PURE__ */ __name(async () => {
    const workflowName = getStorageValue("Comfy.PreviousWorkflow");
    const clientId = api.initialClientId ?? api.clientId;
    if (clientId) {
      const sessionWorkflow = sessionStorage.getItem(`workflow:${clientId}`);
      if (await loadWorkflowFromStorage(sessionWorkflow, workflowName)) {
        return true;
      }
    }
    const localWorkflow = localStorage.getItem("workflow");
    return await loadWorkflowFromStorage(localWorkflow, workflowName);
  }, "loadPreviousWorkflowFromStorage");
  const loadDefaultWorkflow = /* @__PURE__ */ __name(async () => {
    if (!settingStore.get("Comfy.TutorialCompleted")) {
      await settingStore.set("Comfy.TutorialCompleted", true);
      await useWorkflowService().loadBlankWorkflow();
      await useCommandStore().execute("Comfy.BrowseTemplates");
    } else {
      await app.loadGraphData();
    }
  }, "loadDefaultWorkflow");
  const restorePreviousWorkflow = /* @__PURE__ */ __name(async () => {
    if (!workflowPersistenceEnabled.value) return;
    try {
      const restored = await loadPreviousWorkflowFromStorage();
      if (!restored) {
        await loadDefaultWorkflow();
      }
    } catch (err) {
      console.error("Error loading previous workflow", err);
      await loadDefaultWorkflow();
    }
  }, "restorePreviousWorkflow");
  watch(
    () => workflowStore.activeWorkflow?.key,
    (activeWorkflowKey) => {
      if (!activeWorkflowKey) return;
      setStorageValue("Comfy.PreviousWorkflow", activeWorkflowKey);
      persistCurrentWorkflow();
    }
  );
  api.addEventListener("graphChanged", persistCurrentWorkflow);
  const openWorkflows = computed(() => workflowStore.openWorkflows);
  const activeWorkflow = computed(() => workflowStore.activeWorkflow);
  const restoreState = computed(
    () => {
      if (!openWorkflows.value || !activeWorkflow.value) {
        return { paths: [], activeIndex: -1 };
      }
      const paths = openWorkflows.value.filter((workflow) => workflow?.isPersisted && !workflow.isModified).map((workflow) => workflow.path);
      const activeIndex = openWorkflows.value.findIndex(
        (workflow) => workflow.path === activeWorkflow.value?.path
      );
      return { paths, activeIndex };
    }
  );
  const storedWorkflows = JSON.parse(
    getStorageValue("Comfy.OpenWorkflowsPaths") || "[]"
  );
  const storedActiveIndex = JSON.parse(
    getStorageValue("Comfy.ActiveWorkflowIndex") || "-1"
  );
  watch(restoreState, ({ paths, activeIndex }) => {
    if (workflowPersistenceEnabled.value) {
      setStorageValue("Comfy.OpenWorkflowsPaths", JSON.stringify(paths));
      setStorageValue("Comfy.ActiveWorkflowIndex", JSON.stringify(activeIndex));
    }
  });
  const restoreWorkflowTabsState = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const isRestorable = storedWorkflows?.length > 0 && storedActiveIndex >= 0;
    if (isRestorable) {
      workflowStore.openWorkflowsInBackground({
        left: storedWorkflows.slice(0, storedActiveIndex),
        right: storedWorkflows.slice(storedActiveIndex)
      });
    }
  }, "restoreWorkflowTabsState");
  return {
    restorePreviousWorkflow,
    restoreWorkflowTabsState
  };
}
__name(useWorkflowPersistence, "useWorkflowPersistence");
const CORE_SETTINGS = [
  {
    id: "Comfy.Validation.Workflows",
    name: "Validate workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl",
    category: ["Comfy", "Node Search Box", "Implementation"],
    experimental: true,
    name: "Node search box implementation",
    type: "combo",
    options: ["default", "litegraph (legacy)"],
    defaultValue: "default"
  },
  {
    id: "Comfy.LinkRelease.Action",
    category: ["LiteGraph", "LinkRelease", "Action"],
    name: "Action on link release (No modifier)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.CONTEXT_MENU
  },
  {
    id: "Comfy.LinkRelease.ActionShift",
    category: ["LiteGraph", "LinkRelease", "ActionShift"],
    name: "Action on link release (Shift)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.SEARCH_BOX
  },
  {
    id: "Comfy.NodeSearchBoxImpl.NodePreview",
    category: ["Comfy", "Node Search Box", "NodePreview"],
    name: "Node preview",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowCategory",
    category: ["Comfy", "Node Search Box", "ShowCategory"],
    name: "Show node category in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowIdName",
    category: ["Comfy", "Node Search Box", "ShowIdName"],
    name: "Show node id name in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowNodeFrequency",
    category: ["Comfy", "Node Search Box", "ShowNodeFrequency"],
    name: "Show node frequency in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Sidebar.Location",
    category: ["Appearance", "Sidebar", "Location"],
    name: "Sidebar location",
    type: "combo",
    options: ["left", "right"],
    defaultValue: "left"
  },
  {
    id: "Comfy.Sidebar.Size",
    category: ["Appearance", "Sidebar", "Size"],
    name: "Sidebar size",
    type: "combo",
    options: ["normal", "small"],
    // Default to small if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "small" : "normal", "defaultValue")
  },
  {
    id: "Comfy.Sidebar.UnifiedWidth",
    category: ["Appearance", "Sidebar", "UnifiedWidth"],
    name: "Unified sidebar width",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.18.1"
  },
  {
    id: "Comfy.TextareaWidget.FontSize",
    category: ["Appearance", "Node Widget", "TextareaWidget", "FontSize"],
    name: "Textarea widget font size",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 8,
      max: 24
    }
  },
  {
    id: "Comfy.TextareaWidget.Spellcheck",
    category: ["Comfy", "Node Widget", "TextareaWidget", "Spellcheck"],
    name: "Textarea widget spellcheck",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Workflow.SortNodeIdOnSave",
    name: "Sort node IDs when saving workflow",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Graph.CanvasInfo",
    category: ["LiteGraph", "Canvas", "CanvasInfo"],
    name: "Show canvas info on bottom left corner (fps, etc.)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.ShowDeprecated",
    name: "Show deprecated nodes in search",
    tooltip: "Deprecated nodes are hidden by default in the UI, but remain functional in existing workflows that use them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Node.ShowExperimental",
    name: "Show experimental nodes in search",
    tooltip: "Experimental nodes are marked as such in the UI and may be subject to significant changes or removal in future versions. Use with caution in production workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.Opacity",
    category: ["Appearance", "Node", "Opacity"],
    name: "Node opacity",
    type: "slider",
    defaultValue: 1,
    attrs: {
      min: 0.01,
      max: 1,
      step: 0.01
    }
  },
  {
    id: "Comfy.Workflow.ShowMissingNodesWarning",
    name: "Show missing nodes warning",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Workflow.ShowMissingModelsWarning",
    name: "Show missing models warning",
    type: "boolean",
    defaultValue: true,
    experimental: true
  },
  {
    id: "Comfy.Graph.ZoomSpeed",
    category: ["LiteGraph", "Canvas", "ZoomSpeed"],
    name: "Canvas zoom speed",
    type: "slider",
    defaultValue: 1.1,
    attrs: {
      min: 1.01,
      max: 2.5,
      step: 0.01
    }
  },
  // Bookmarks are stored in the settings store.
  // Bookmarks are in format of category/display_name. e.g. "conditioning/CLIPTextEncode"
  {
    id: "Comfy.NodeLibrary.Bookmarks",
    name: "Node library bookmarks with display name (deprecated)",
    type: "hidden",
    defaultValue: [],
    deprecated: true
  },
  {
    id: "Comfy.NodeLibrary.Bookmarks.V2",
    name: "Node library bookmarks v2 with unique name",
    type: "hidden",
    defaultValue: []
  },
  // Stores mapping from bookmark folder name to its customization.
  {
    id: "Comfy.NodeLibrary.BookmarksCustomization",
    name: "Node library bookmarks customization",
    type: "hidden",
    defaultValue: {}
  },
  // Hidden setting used by the queue for how to fit images
  {
    id: "Comfy.Queue.ImageFit",
    name: "Queue image fit",
    type: "hidden",
    defaultValue: "cover"
  },
  {
    id: "Comfy.GroupSelectedNodes.Padding",
    category: ["LiteGraph", "Group", "Padding"],
    name: "Group selected nodes padding",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 0,
      max: 100
    }
  },
  {
    id: "Comfy.Node.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Node", "DoubleClickTitleToEdit"],
    name: "Double click node title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.AllowImageSizeDraw",
    category: ["LiteGraph", "Node Widget", "AllowImageSizeDraw"],
    name: "Show width × height below the image preview",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Group.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Group", "DoubleClickTitleToEdit"],
    name: "Double click group title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Window.UnloadConfirmation",
    name: "Show confirmation when closing window",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.7.12"
  },
  {
    id: "Comfy.TreeExplorer.ItemPadding",
    category: ["Appearance", "Tree Explorer", "ItemPadding"],
    name: "Tree explorer item padding",
    type: "slider",
    defaultValue: 2,
    attrs: {
      min: 0,
      max: 8,
      step: 1
    }
  },
  {
    id: "Comfy.ModelLibrary.AutoLoadAll",
    name: "Automatically load all model folders",
    tooltip: "If true, all folders will load as soon as you open the model library (this may cause delays while it loads). If false, root level model folders will only load once you click on them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.ModelLibrary.NameFormat",
    name: "What name to display in the model library tree view",
    tooltip: 'Select "filename" to render a simplified view of the raw filename (without directory or ".safetensors" extension) in the model list. Select "title" to display the configurable model metadata title.',
    type: "combo",
    options: ["filename", "title"],
    defaultValue: "title"
  },
  {
    id: "Comfy.Locale",
    name: "Language",
    type: "combo",
    options: [
      { value: "en", text: "English" },
      { value: "zh", text: "中文" },
      { value: "ru", text: "Русский" },
      { value: "ja", text: "日本語" },
      { value: "ko", text: "한국어" },
      { value: "fr", text: "Français" },
      { value: "es", text: "Español" }
    ],
    defaultValue: /* @__PURE__ */ __name(() => navigator.language.split("-")[0] || "en", "defaultValue")
  },
  {
    id: "Comfy.NodeBadge.NodeSourceBadgeMode",
    category: ["LiteGraph", "Node", "NodeSourceBadgeMode"],
    name: "Node source badge mode",
    type: "combo",
    options: Object.values(NodeBadgeMode),
    defaultValue: NodeBadgeMode.HideBuiltIn
  },
  {
    id: "Comfy.NodeBadge.NodeIdBadgeMode",
    category: ["LiteGraph", "Node", "NodeIdBadgeMode"],
    name: "Node ID badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.None
  },
  {
    id: "Comfy.NodeBadge.NodeLifeCycleBadgeMode",
    category: ["LiteGraph", "Node", "NodeLifeCycleBadgeMode"],
    name: "Node life cycle badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.ShowAll
  },
  {
    id: "Comfy.NodeBadge.ShowApiPricing",
    category: ["Comfy", "API Nodes"],
    name: "Show API node pricing badge",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.20.3"
  },
  {
    id: "Comfy.ConfirmClear",
    category: ["Comfy", "Workflow", "ConfirmClear"],
    name: "Require confirmation when clearing workflow",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.PromptFilename",
    category: ["Comfy", "Workflow", "PromptFilename"],
    name: "Prompt for filename when saving workflow",
    type: "boolean",
    defaultValue: true
  },
  /**
   * file format for preview
   *
   * format;quality
   *
   * ex)
   * webp;50 -> webp, quality 50
   * jpeg;80 -> rgb, jpeg, quality 80
   *
   * @type {string}
   */
  {
    id: "Comfy.PreviewFormat",
    category: ["LiteGraph", "Node Widget", "PreviewFormat"],
    name: "Preview image format",
    tooltip: "When displaying a preview in the image widget, convert it to a lightweight image, e.g. webp, jpeg, webp;50, etc.",
    type: "text",
    defaultValue: ""
  },
  {
    id: "Comfy.DisableSliders",
    category: ["LiteGraph", "Node Widget", "DisableSliders"],
    name: "Disable node widget sliders",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.DisableFloatRounding",
    category: ["LiteGraph", "Node Widget", "DisableFloatRounding"],
    name: "Disable default float widget rounding.",
    tooltip: "(requires page reload) Cannot disable round when round is set by the node in the backend.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.FloatRoundingPrecision",
    category: ["LiteGraph", "Node Widget", "FloatRoundingPrecision"],
    name: "Float widget rounding decimal places [0 = auto].",
    tooltip: "(requires page reload)",
    type: "slider",
    attrs: {
      min: 0,
      max: 6,
      step: 1
    },
    defaultValue: 0
  },
  {
    id: "LiteGraph.Node.TooltipDelay",
    name: "Tooltip Delay",
    type: "number",
    attrs: {
      min: 100,
      max: 3e3,
      step: 50
    },
    defaultValue: 500,
    versionAdded: "1.9.0"
  },
  {
    id: "Comfy.EnableTooltips",
    category: ["LiteGraph", "Node", "EnableTooltips"],
    name: "Enable Tooltips",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.DevMode",
    name: "Enable dev mode options (API save, etc.)",
    type: "boolean",
    defaultValue: false,
    onChange: /* @__PURE__ */ __name((value) => {
      const element = document.getElementById("comfy-dev-save-api-button");
      if (element) {
        element.style.display = value ? "flex" : "none";
      }
    }, "onChange")
  },
  {
    id: "Comfy.UseNewMenu",
    category: ["Comfy", "Menu", "UseNewMenu"],
    defaultValue: "Top",
    name: "Use new menu",
    type: "combo",
    options: ["Disabled", "Top", "Bottom"],
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      if (value === "Floating") {
        return "Top";
      }
      return value;
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Workflow.WorkflowTabsPosition",
    name: "Opened workflows position",
    type: "combo",
    options: ["Sidebar", "Topbar", "Topbar (2nd-row)"],
    // Default to topbar (2nd-row) if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "Topbar (2nd-row)" : "Topbar", "defaultValue")
  },
  {
    id: "Comfy.Graph.CanvasMenu",
    category: ["LiteGraph", "Canvas", "CanvasMenu"],
    name: "Show graph canvas menu",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.QueueButton.BatchCountLimit",
    name: "Batch count limit",
    tooltip: "The maximum number of tasks added to the queue at one button click",
    type: "number",
    defaultValue: 100,
    versionAdded: "1.3.5"
  },
  {
    id: "Comfy.Keybinding.UnsetBindings",
    name: "Keybindings unset by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7",
    versionModified: "1.7.3",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      return value.map((keybinding) => {
        if (keybinding["targetSelector"] === "#graph-canvas") {
          keybinding["targetElementId"] = "graph-canvas";
        }
        return keybinding;
      });
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Keybinding.NewBindings",
    name: "Keybindings set by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7"
  },
  {
    id: "Comfy.Extension.Disabled",
    name: "Disabled extension names",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.11"
  },
  {
    id: "Comfy.Validation.NodeDefs",
    name: "Validate node definitions (slow)",
    type: "boolean",
    tooltip: "Recommended for node developers. This will validate all node definitions on startup.",
    defaultValue: false,
    versionAdded: "1.3.14"
  },
  {
    id: "Comfy.LinkRenderMode",
    category: ["LiteGraph", "Graph", "LinkRenderMode"],
    name: "Link Render Mode",
    defaultValue: 2,
    type: "combo",
    options: [
      { value: LiteGraph.STRAIGHT_LINK, text: "Straight" },
      { value: LiteGraph.LINEAR_LINK, text: "Linear" },
      { value: LiteGraph.SPLINE_LINK, text: "Spline" },
      { value: LiteGraph.HIDDEN_LINK, text: "Hidden" }
    ]
  },
  {
    id: "Comfy.Node.AutoSnapLinkToSlot",
    category: ["LiteGraph", "Node", "AutoSnapLinkToSlot"],
    name: "Auto snap link to node slot",
    tooltip: "When dragging a link over a node, the link automatically snap to a viable input slot on the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.SnapHighlightsNode",
    category: ["LiteGraph", "Node", "SnapHighlightsNode"],
    name: "Snap highlights node",
    tooltip: "When dragging a link over a node with viable input slot, highlight the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.BypassAllLinksOnDelete",
    category: ["LiteGraph", "Node", "BypassAllLinksOnDelete"],
    name: "Keep all links when deleting nodes",
    tooltip: "When deleting a node, attempt to reconnect all of its input and output links (bypassing the deleted node)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.40"
  },
  {
    id: "Comfy.Node.MiddleClickRerouteNode",
    category: ["LiteGraph", "Node", "MiddleClickRerouteNode"],
    name: "Middle-click creates a new Reroute node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.Graph.LinkMarkers",
    category: ["LiteGraph", "Link", "LinkMarkers"],
    name: "Link midpoint markers",
    defaultValue: LinkMarkerShape.Circle,
    type: "combo",
    options: [
      { value: LinkMarkerShape.None, text: "None" },
      { value: LinkMarkerShape.Circle, text: "Circle" },
      { value: LinkMarkerShape.Arrow, text: "Arrow" }
    ],
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.DOMClippingEnabled",
    category: ["LiteGraph", "Node", "DOMClippingEnabled"],
    name: "Enable DOM element clipping (enabling may reduce performance)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Graph.CtrlShiftZoom",
    category: ["LiteGraph", "Canvas", "CtrlShiftZoom"],
    name: "Enable fast-zoom shortcut (Ctrl + Shift + Drag)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.4.0"
  },
  {
    id: "Comfy.Pointer.ClickDrift",
    category: ["LiteGraph", "Pointer", "ClickDrift"],
    name: "Pointer click drift (maximum distance)",
    tooltip: "If the pointer moves more than this distance while holding a button down, it is considered dragging (rather than clicking).\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 20,
      step: 1
    },
    defaultValue: 6,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.ClickBufferTime",
    category: ["LiteGraph", "Pointer", "ClickBufferTime"],
    name: "Pointer click drift delay",
    tooltip: "After pressing a pointer button down, this is the maximum time (in milliseconds) that pointer movement can be ignored for.\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 1e3,
      step: 25
    },
    defaultValue: 150,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.DoubleClickTime",
    category: ["LiteGraph", "Pointer", "DoubleClickTime"],
    name: "Double click interval (maximum)",
    tooltip: "The maximum time in milliseconds between the two clicks of a double-click.  Increasing this value may assist if double-clicks are sometimes not registered.",
    type: "slider",
    attrs: {
      min: 100,
      max: 1e3,
      step: 50
    },
    defaultValue: 300,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.SnapToGrid.GridSize",
    category: ["LiteGraph", "Canvas", "GridSize"],
    name: "Snap to grid size",
    type: "slider",
    attrs: {
      min: 1,
      max: 500
    },
    tooltip: "When dragging and resizing nodes while holding shift they will be aligned to the grid, this controls the size of that grid.",
    defaultValue: LiteGraph.CANVAS_GRID_SIZE
  },
  // Keep the 'pysssss.SnapToGrid' setting id so we don't need to migrate setting values.
  // Using a new setting id can cause existing users to lose their existing settings.
  {
    id: "pysssss.SnapToGrid",
    category: ["LiteGraph", "Canvas", "AlwaysSnapToGrid"],
    name: "Always snap to grid",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.3.13"
  },
  {
    id: "Comfy.Server.ServerConfigValues",
    name: "Server config values for frontend display",
    tooltip: "Server config values used for frontend display only",
    type: "hidden",
    // Mapping from server config id to value.
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Server.LaunchArgs",
    name: "Server launch arguments",
    tooltip: "These are the actual arguments that are passed to the server when it is launched.",
    type: "hidden",
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Queue.MaxHistoryItems",
    name: "Queue history size",
    tooltip: "The maximum number of tasks that show in the queue history.",
    type: "slider",
    attrs: {
      min: 2,
      max: 256,
      step: 2
    },
    defaultValue: 64,
    versionAdded: "1.4.12"
  },
  {
    id: "LiteGraph.Canvas.MaximumFps",
    name: "Maximum FPS",
    tooltip: "The maximum frames per second that the canvas is allowed to render. Caps GPU usage at the cost of smoothness. If 0, the screen refresh rate is used. Default: 0",
    type: "slider",
    attrs: {
      min: 0,
      max: 120
    },
    defaultValue: 0,
    versionAdded: "1.5.1"
  },
  {
    id: "Comfy.EnableWorkflowViewRestore",
    category: ["Comfy", "Workflow", "EnableWorkflowViewRestore"],
    name: "Save and restore canvas position and zoom level in workflows",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.5.4"
  },
  {
    id: "Comfy.Workflow.ConfirmDelete",
    name: "Show confirmation when deleting workflows",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.5.6"
  },
  {
    id: "Comfy.ColorPalette",
    name: "The active color palette id",
    type: "hidden",
    defaultValue: "dark",
    versionModified: "1.6.7",
    migrateDeprecatedValue(value) {
      return value.startsWith("custom_") ? value.replace("custom_", "") : value;
    }
  },
  {
    id: "Comfy.CustomColorPalettes",
    name: "Custom color palettes",
    type: "hidden",
    defaultValue: {},
    versionModified: "1.6.7"
  },
  {
    id: "Comfy.WidgetControlMode",
    category: ["Comfy", "Node Widget", "WidgetControlMode"],
    name: "Widget control mode",
    tooltip: "Controls when widget values are updated (randomize/increment/decrement), either before the prompt is queued or after.",
    type: "combo",
    defaultValue: "after",
    options: ["before", "after"],
    versionModified: "1.6.10"
  },
  {
    id: "Comfy.TutorialCompleted",
    name: "Tutorial completed",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.8.7"
  },
  {
    id: "LiteGraph.ContextMenu.Scaling",
    name: "Scale node combo widget menus (lists) when zoomed in",
    defaultValue: false,
    type: "boolean",
    versionAdded: "1.8.8"
  },
  {
    id: "LiteGraph.Canvas.LowQualityRenderingZoomThreshold",
    name: "Low quality rendering zoom threshold",
    tooltip: "Render low quality shapes when zoomed out",
    type: "slider",
    attrs: {
      min: 0.1,
      max: 1,
      step: 0.01
    },
    defaultValue: 0.6,
    versionAdded: "1.9.1"
  },
  {
    id: "Comfy.Canvas.SelectionToolbox",
    category: ["LiteGraph", "Canvas", "SelectionToolbox"],
    name: "Show selection toolbox",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.10.5"
  },
  {
    id: "LiteGraph.Reroute.SplineOffset",
    name: "Reroute spline offset",
    tooltip: "The bezier control point offset from the reroute centre point",
    type: "slider",
    defaultValue: 20,
    attrs: {
      min: 0,
      max: 400
    },
    versionAdded: "1.15.7"
  },
  {
    id: "Comfy.Toast.DisableReconnectingToast",
    name: "Disable toasts when reconnecting or reconnected",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.15.12"
  },
  {
    id: "Comfy.Workflow.AutoSaveDelay",
    name: "Auto Save Delay (ms)",
    defaultValue: 1e3,
    type: "number",
    tooltip: 'Only applies if Auto Save is set to "after delay".',
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.AutoSave",
    name: "Auto Save",
    type: "combo",
    options: ["off", "after delay"],
    // Room for other options like on focus change, tab change, window change
    defaultValue: "off",
    // Popular requst by users (https://github.com/Comfy-Org/ComfyUI_frontend/issues/1584#issuecomment-2536610154)
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.Persist",
    name: "Persist workflow state and restore on page (re)load",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.16.1"
  },
  {
    id: "LiteGraph.Node.DefaultPadding",
    name: "Always shrink new nodes",
    tooltip: "Resize nodes to the smallest possible size when created. When disabled, a newly added node will be widened slightly to show widget values.",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.18.0"
  },
  {
    id: "Comfy.Canvas.BackgroundImage",
    category: ["Appearance", "Canvas", "Background"],
    name: "Canvas background image",
    type: "backgroundImage",
    tooltip: 'Image URL for the canvas background. You can right-click an image in the outputs panel and select "Set as Background" to use it, or upload your own image using the upload button.',
    defaultValue: "",
    versionAdded: "1.20.4",
    versionModified: "1.20.5"
  },
  {
    id: "LiteGraph.Pointer.TrackpadGestures",
    category: ["LiteGraph", "Pointer", "Trackpad Gestures"],
    experimental: true,
    name: "Enable trackpad gestures",
    tooltip: "This setting enables trackpad mode for the canvas, allowing pinch-to-zoom and panning with two fingers.",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.19.1"
  }
];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvas",
  emits: ["ready"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const canvasRef = ref(null);
    const settingStore = useSettingStore();
    const nodeDefStore = useNodeDefStore();
    const workspaceStore = useWorkspaceStore();
    const canvasStore = useCanvasStore();
    const executionStore = useExecutionStore();
    const toastStore = useToastStore();
    const betaMenuEnabled = computed(
      () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const canvasMenuEnabled = computed(
      () => settingStore.get("Comfy.Graph.CanvasMenu")
    );
    const tooltipEnabled = computed(() => settingStore.get("Comfy.EnableTooltips"));
    const selectionToolboxEnabled = computed(
      () => settingStore.get("Comfy.Canvas.SelectionToolbox")
    );
    watchEffect(() => {
      nodeDefStore.showDeprecated = settingStore.get("Comfy.Node.ShowDeprecated");
    });
    watchEffect(() => {
      nodeDefStore.showExperimental = settingStore.get(
        "Comfy.Node.ShowExperimental"
      );
    });
    watchEffect(() => {
      const spellcheckEnabled = settingStore.get("Comfy.TextareaWidget.Spellcheck");
      const textareas = document.querySelectorAll(
        "textarea.comfy-multiline-input"
      );
      textareas.forEach((textarea) => {
        textarea.spellcheck = spellcheckEnabled;
        textarea.focus();
        textarea.blur();
      });
    });
    watch(
      () => settingStore.get("Comfy.WidgetControlMode"),
      () => {
        if (!canvasStore.canvas) return;
        for (const n of app.graph.nodes) {
          if (!n.widgets) continue;
          for (const w of n.widgets) {
            if (w[IS_CONTROL_WIDGET]) {
              updateControlWidgetLabel(w);
              if (w.linkedWidgets) {
                for (const l of w.linkedWidgets) {
                  updateControlWidgetLabel(l);
                }
              }
            }
          }
        }
        app.graph.setDirtyCanvas(true);
      }
    );
    const colorPaletteService = useColorPaletteService();
    const colorPaletteStore = useColorPaletteStore();
    watch(
      [() => canvasStore.canvas, () => settingStore.get("Comfy.ColorPalette")],
      async ([canvas, currentPaletteId]) => {
        if (!canvas) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
      }
    );
    watch(
      () => settingStore.get("Comfy.Canvas.BackgroundImage"),
      async () => {
        if (!canvasStore.canvas) return;
        const currentPaletteId = colorPaletteStore.activePaletteId;
        if (!currentPaletteId) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
        canvasStore.canvas.setDirty(false, true);
      }
    );
    watch(
      () => colorPaletteStore.activePaletteId,
      async (newValue) => {
        await settingStore.set("Comfy.ColorPalette", newValue);
      }
    );
    watch(
      () => [executionStore.executingNodeId, executionStore.executingNodeProgress],
      ([executingNodeId, executingNodeProgress]) => {
        for (const node of app.graph.nodes) {
          if (node.id == executingNodeId) {
            node.progress = executingNodeProgress ?? void 0;
          } else {
            node.progress = void 0;
          }
        }
      }
    );
    watch(
      () => executionStore.lastNodeErrors,
      (lastNodeErrors) => {
        const removeSlotError = /* @__PURE__ */ __name((node) => {
          for (const slot of node.inputs) {
            delete slot.hasErrors;
          }
          for (const slot of node.outputs) {
            delete slot.hasErrors;
          }
        }, "removeSlotError");
        for (const node of app.graph.nodes) {
          removeSlotError(node);
          const nodeErrors = lastNodeErrors?.[node.id];
          if (!nodeErrors) continue;
          for (const error of nodeErrors.errors) {
            if (error.extra_info && error.extra_info.input_name) {
              const inputIndex = node.findInputSlot(error.extra_info.input_name);
              if (inputIndex !== -1) {
                node.inputs[inputIndex].hasErrors = true;
              }
            }
          }
        }
        app.canvas.draw(true, true);
      }
    );
    useEventListener(
      canvasRef,
      "litegraph:no-items-selected",
      () => {
        toastStore.add({
          severity: "warn",
          summary: t("toastMessages.nothingSelected"),
          life: 2e3
        });
      },
      { passive: true }
    );
    const loadCustomNodesI18n = /* @__PURE__ */ __name(async () => {
      try {
        const i18nData = await api.getCustomNodesI18n();
        Object.entries(i18nData).forEach(([locale, message]) => {
          i18n.global.mergeLocaleMessage(locale, message);
        });
      } catch (error) {
        console.error("Failed to load custom nodes i18n", error);
      }
    }, "loadCustomNodesI18n");
    const comfyAppReady = ref(false);
    const workflowPersistence = useWorkflowPersistence();
    useCanvasDrop(canvasRef);
    useLitegraphSettings();
    useNodeBadge();
    onMounted(async () => {
      useGlobalLitegraph();
      useContextMenuTranslation();
      useCopy();
      usePaste();
      useWorkflowAutoSave();
      app.vueAppReady = true;
      workspaceStore.spinner = true;
      ChangeTracker.init();
      await loadCustomNodesI18n();
      try {
        await settingStore.loadSettingValues();
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          console.log(
            "Failed loading user settings, user unauthorized, cleaning local Comfy.userId"
          );
          localStorage.removeItem("Comfy.userId");
          localStorage.removeItem("Comfy.userName");
          window.location.reload();
        } else {
          throw error;
        }
      }
      CORE_SETTINGS.forEach((setting) => {
        settingStore.addSetting(setting);
      });
      await app.setup(canvasRef.value);
      canvasStore.canvas = app.canvas;
      canvasStore.canvas.render_canvas_border = false;
      workspaceStore.spinner = false;
      window.app = app;
      window.graph = app.graph;
      comfyAppReady.value = true;
      app.canvas.onSelectionChange = useChainCallback(
        app.canvas.onSelectionChange,
        () => canvasStore.updateSelectedItems()
      );
      colorPaletteStore.customPalettes = settingStore.get(
        "Comfy.CustomColorPalettes"
      );
      await workflowPersistence.restorePreviousWorkflow();
      workflowPersistence.restoreWorkflowTabsState();
      watch(
        () => settingStore.get("Comfy.Locale"),
        async () => {
          await useCommandStore().execute("Comfy.RefreshNodeDefinitions");
          await useWorkflowService().reloadCurrentWorkflow();
        }
      );
      emit("ready");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        comfyAppReady.value && betaMenuEnabled.value && !unref(workspaceStore).focusMode ? (openBlock(), createBlock(LiteGraphCanvasSplitterOverlay, { key: 0 }, {
          "side-bar-panel": withCtx(() => [
            createVNode(SideToolbar)
          ]),
          "bottom-panel": withCtx(() => [
            createVNode(_sfc_main$F)
          ]),
          "graph-canvas-panel": withCtx(() => [
            workflowTabsPosition.value === "Topbar (2nd-row)" ? (openBlock(), createBlock(SecondRowWorkflowTabs, {
              key: 0,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true),
            canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, {
              key: 1,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        !betaMenuEnabled.value && canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, { key: 1 })) : createCommentVNode("", true),
        createBaseVNode("canvas", {
          id: "graph-canvas",
          ref_key: "canvasRef",
          ref: canvasRef,
          tabindex: "1",
          class: "w-full h-full touch-none"
        }, null, 512),
        tooltipEnabled.value ? (openBlock(), createBlock(NodeTooltip, { key: 2 })) : createCommentVNode("", true),
        createVNode(_sfc_main$k),
        comfyAppReady.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(TitleEditor),
          selectionToolboxEnabled.value ? (openBlock(), createBlock(SelectionOverlay, { key: 0 }, {
            default: withCtx(() => [
              createVNode(SelectionToolbox)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$C)
        ], 64)) : createCommentVNode("", true),
        createVNode(_sfc_main$E)
      ], 64);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "GlobalToast",
  setup(__props) {
    const toast = useToast();
    const toastStore = useToastStore();
    const settingStore = useSettingStore();
    watch(
      () => toastStore.messagesToAdd,
      (newMessages) => {
        if (newMessages.length === 0) {
          return;
        }
        newMessages.forEach((message) => {
          toast.add(message);
        });
        toastStore.messagesToAdd = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.messagesToRemove,
      (messagesToRemove) => {
        if (messagesToRemove.length === 0) {
          return;
        }
        messagesToRemove.forEach((message) => {
          toast.remove(message);
        });
        toastStore.messagesToRemove = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.removeAllRequested,
      (requested) => {
        if (requested) {
          toast.removeAllGroups();
          toastStore.removeAllRequested = false;
        }
      }
    );
    function updateToastPosition() {
      const styleElement = document.getElementById("dynamic-toast-style") || createStyleElement();
      const rect = document.querySelector(".graph-canvas-container")?.getBoundingClientRect();
      if (!rect) return;
      styleElement.textContent = `
    .p-toast.p-component.p-toast-top-right {
      top: ${rect.top + 20}px !important;
      right: ${window.innerWidth - (rect.left + rect.width) + 20}px !important;
    }
  `;
    }
    __name(updateToastPosition, "updateToastPosition");
    function createStyleElement() {
      const style = document.createElement("style");
      style.id = "dynamic-toast-style";
      document.head.appendChild(style);
      return style;
    }
    __name(createStyleElement, "createStyleElement");
    watch(
      () => settingStore.get("Comfy.UseNewMenu"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    watch(
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$h));
    };
  }
});
const _hoisted_1$c = { class: "flex flex-col items-start flex-auto" };
const _hoisted_2$4 = { class: "font-medium text-lg my-4" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RerouteMigrationToast",
  setup(__props) {
    const { t: t2 } = useI18n();
    const toast = useToast();
    const workflowStore = useWorkflowStore();
    const migrateToLitegraphReroute = /* @__PURE__ */ __name(async () => {
      const workflowJSON = app.graph.serialize();
      const migratedWorkflowJSON = migrateLegacyRerouteNodes(workflowJSON);
      await app.loadGraphData(
        migratedWorkflowJSON,
        false,
        false,
        workflowStore.activeWorkflow
      );
      toast.removeGroup("reroute-migration");
    }, "migrateToLitegraphReroute");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$h), { group: "reroute-migration" }, {
        message: withCtx(() => [
          createBaseVNode("div", _hoisted_1$c, [
            createBaseVNode("div", _hoisted_2$4, toDisplayString(unref(t2)("toastMessages.migrateToLitegraphReroute")), 1),
            createVNode(unref(script), {
              class: "self-end",
              size: "small",
              label: unref(t2)("g.migrate"),
              severity: "warn",
              onClick: migrateToLitegraphReroute
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 4v16m4-16l10 8l-10 8z"
    }, null, -1)
  ]));
}
__name(render$4, "render$4");
const __unplugin_components_3 = markRaw({ name: "lucide-step-forward", render: render$4 });
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m13 19l9-7l-9-7zM2 19l9-7l-9-7z"
    }, null, -1)
  ]));
}
__name(render$3, "render$3");
const __unplugin_components_2 = markRaw({ name: "lucide-fast-forward", render: render$3 });
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createBaseVNode("path", { d: "M16 12H3m13 6H3m7-12H3m18 12V8a2 2 0 0 0-2-2h-5" }),
      createBaseVNode("path", { d: "m16 8l-2-2l2-2" })
    ], -1)
  ]));
}
__name(render$2, "render$2");
const __unplugin_components_0$1 = markRaw({ name: "lucide-list-start", render: render$2 });
const _hoisted_1$8 = ["aria-label"];
const minQueueCount = 1;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BatchCountEdit",
  setup(__props) {
    const queueSettingsStore = useQueueSettingsStore();
    const { batchCount } = storeToRefs(queueSettingsStore);
    const settingStore = useSettingStore();
    const maxQueueCount = computed(
      () => settingStore.get("Comfy.QueueButton.BatchCountLimit")
    );
    const handleClick = /* @__PURE__ */ __name((increment) => {
      let newCount;
      if (increment) {
        const originalCount = batchCount.value - 1;
        newCount = Math.min(originalCount * 2, maxQueueCount.value);
      } else {
        const originalCount = batchCount.value + 1;
        newCount = Math.floor(originalCount / 2);
      }
      batchCount.value = newCount;
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "batch-count",
        "aria-label": _ctx.$t("menu.batchCount")
      }, [
        createVNode(unref(script$i), {
          modelValue: unref(batchCount),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(batchCount) ? batchCount.value = $event : null),
          class: "w-14",
          min: minQueueCount,
          max: maxQueueCount.value,
          fluid: "",
          "show-buttons": "",
          pt: {
            incrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(true);
              }, "onmousedown")
            },
            decrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(false);
              }, "onmousedown")
            }
          }
        }, null, 8, ["modelValue", "max", "pt"])
      ], 8, _hoisted_1$8)), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("menu.batchCount"),
            showDelay: 600
          },
          void 0,
          { bottom: true }
        ]
      ]);
    };
  }
});
const BatchCountEdit = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-78201e86"]]);
const _hoisted_1$7 = { class: "queue-button-group flex" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ComfyQueueButton",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const queueCountStore = storeToRefs(useQueuePendingTaskCountStore());
    const { mode: queueMode } = storeToRefs(useQueueSettingsStore());
    const { t: t2 } = useI18n();
    const queueModeMenuItemLookup = computed(() => ({
      disabled: {
        key: "disabled",
        label: t2("menu.run"),
        tooltip: t2("menu.disabledTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "disabled";
        }, "command")
      },
      instant: {
        key: "instant",
        label: `${t2("menu.run")} (${t2("menu.instant")})`,
        tooltip: t2("menu.instantTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "instant";
        }, "command")
      },
      change: {
        key: "change",
        label: `${t2("menu.run")} (${t2("menu.onChange")})`,
        tooltip: t2("menu.onChangeTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "change";
        }, "command")
      }
    }));
    const activeQueueModeMenuItem = computed(
      () => queueModeMenuItemLookup.value[queueMode.value]
    );
    const queueModeMenuItems = computed(
      () => Object.values(queueModeMenuItemLookup.value)
    );
    const executingPrompt = computed(() => !!queueCountStore.count.value);
    const hasPendingTasks = computed(
      () => queueCountStore.count.value > 1 || queueMode.value !== "disabled"
    );
    const commandStore = useCommandStore();
    const queuePrompt = /* @__PURE__ */ __name(async (e) => {
      const commandId = "shiftKey" in e && e.shiftKey ? "Comfy.QueuePromptFront" : "Comfy.QueuePrompt";
      await commandStore.execute(commandId);
    }, "queuePrompt");
    return (_ctx, _cache) => {
      const _component_i_lucide58list_start = __unplugin_components_0$1;
      const _component_i_lucide58play = __unplugin_components_1$1;
      const _component_i_lucide58fast_forward = __unplugin_components_2;
      const _component_i_lucide58step_forward = __unplugin_components_3;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        withDirectives((openBlock(), createBlock(unref(script$j), {
          class: "comfyui-queue-button",
          label: activeQueueModeMenuItem.value.label,
          severity: "primary",
          size: "small",
          model: queueModeMenuItems.value,
          "data-testid": "queue-button",
          onClick: queuePrompt
        }, {
          icon: withCtx(() => [
            unref(workspaceStore).shiftDown ? (openBlock(), createBlock(_component_i_lucide58list_start, { key: 0 })) : unref(queueMode) === "disabled" ? (openBlock(), createBlock(_component_i_lucide58play, { key: 1 })) : unref(queueMode) === "instant" ? (openBlock(), createBlock(_component_i_lucide58fast_forward, { key: 2 })) : unref(queueMode) === "change" ? (openBlock(), createBlock(_component_i_lucide58step_forward, { key: 3 })) : createCommentVNode("", true)
          ]),
          item: withCtx(({ item }) => [
            withDirectives(createVNode(unref(script), {
              label: String(item.label),
              icon: item.icon,
              severity: item.key === unref(queueMode) ? "primary" : "secondary",
              size: "small",
              text: ""
            }, null, 8, ["label", "icon", "severity"]), [
              [_directive_tooltip, {
                value: item.tooltip,
                showDelay: 600
              }]
            ])
          ]),
          _: 1
        }, 8, ["label", "model"])), [
          [
            _directive_tooltip,
            {
              value: unref(workspaceStore).shiftDown ? _ctx.$t("menu.runWorkflowFront") : _ctx.$t("menu.runWorkflow"),
              showDelay: 600
            },
            void 0,
            { bottom: true }
          ]
        ]),
        createVNode(BatchCountEdit),
        createVNode(unref(script$7), { class: "execution-actions flex flex-nowrap" }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(script), {
              icon: "pi pi-times",
              severity: executingPrompt.value ? "danger" : "secondary",
              disabled: !executingPrompt.value,
              text: "",
              "aria-label": _ctx.$t("menu.interrupt"),
              onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Interrupt"))
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("menu.interrupt"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ]),
            withDirectives(createVNode(unref(script), {
              icon: "pi pi-stop",
              severity: hasPendingTasks.value ? "danger" : "secondary",
              disabled: !hasPendingTasks.value,
              text: "",
              "aria-label": _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
              onClick: _cache[1] || (_cache[1] = () => {
                if (unref(queueCountStore).count.value > 1) {
                  unref(commandStore).execute("Comfy.ClearPendingTasks");
                }
                queueMode.value = "disabled";
              })
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ComfyQueueButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-43776fb9"]]);
const overlapThreshold = 20;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ComfyActionbar",
  setup(__props) {
    const settingsStore = useSettingStore();
    const visible = computed(
      () => settingsStore.get("Comfy.UseNewMenu") !== "Disabled"
    );
    const panelRef = ref(null);
    const dragHandleRef = ref(null);
    const isDocked = useLocalStorage("Comfy.MenuPosition.Docked", false);
    const storedPosition = useLocalStorage("Comfy.MenuPosition.Floating", {
      x: 0,
      y: 0
    });
    const {
      x,
      y,
      style,
      isDragging
    } = useDraggable(panelRef, {
      initialValue: { x: 0, y: 0 },
      handle: dragHandleRef,
      containerElement: document.body
    });
    watchDebounced(
      [x, y],
      ([newX, newY]) => {
        storedPosition.value = { x: newX, y: newY };
      },
      { debounce: 300 }
    );
    const setInitialPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        if (menuWidth === 0 || menuHeight === 0) {
          return;
        }
        if (storedPosition.value.x !== 0 || storedPosition.value.y !== 0) {
          x.value = lodashExports.clamp(storedPosition.value.x, 0, screenWidth - menuWidth);
          y.value = lodashExports.clamp(storedPosition.value.y, 0, screenHeight - menuHeight);
          captureLastDragState();
          return;
        }
        if (x.value === 0 && y.value === 0) {
          x.value = lodashExports.clamp((screenWidth - menuWidth) / 2, 0, screenWidth - menuWidth);
          y.value = lodashExports.clamp(
            screenHeight - menuHeight - 10,
            0,
            screenHeight - menuHeight
          );
          captureLastDragState();
        }
      }
    }, "setInitialPosition");
    onMounted(setInitialPosition);
    watch(visible, async (newVisible) => {
      if (newVisible) {
        await nextTick(setInitialPosition);
      }
    });
    const lastDragState = ref({
      x: x.value,
      y: y.value,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    const captureLastDragState = /* @__PURE__ */ __name(() => {
      lastDragState.value = {
        x: x.value,
        y: y.value,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    }, "captureLastDragState");
    watch(
      isDragging,
      (newIsDragging) => {
        if (!newIsDragging) {
          captureLastDragState();
        }
      },
      { immediate: true }
    );
    const adjustMenuPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        const distanceLeft = lastDragState.value.x;
        const distanceRight = lastDragState.value.windowWidth - (lastDragState.value.x + menuWidth);
        const distanceTop = lastDragState.value.y;
        const distanceBottom = lastDragState.value.windowHeight - (lastDragState.value.y + menuHeight);
        const distances = [
          { edge: "left", distance: distanceLeft },
          { edge: "right", distance: distanceRight },
          { edge: "top", distance: distanceTop },
          { edge: "bottom", distance: distanceBottom }
        ];
        const closestEdge = distances.reduce(
          (min, curr) => curr.distance < min.distance ? curr : min
        );
        const verticalRatio = lastDragState.value.y / lastDragState.value.windowHeight;
        const horizontalRatio = lastDragState.value.x / lastDragState.value.windowWidth;
        if (closestEdge.edge === "left") {
          x.value = closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "right") {
          x.value = screenWidth - menuWidth - closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "top") {
          x.value = horizontalRatio * screenWidth;
          y.value = closestEdge.distance;
        } else {
          x.value = horizontalRatio * screenWidth;
          y.value = screenHeight - menuHeight - closestEdge.distance;
        }
        x.value = lodashExports.clamp(x.value, 0, screenWidth - menuWidth);
        y.value = lodashExports.clamp(y.value, 0, screenHeight - menuHeight);
      }
    }, "adjustMenuPosition");
    useEventListener(window, "resize", adjustMenuPosition);
    const topMenuRef = inject("topMenuRef");
    const topMenuBounds = useElementBounding(topMenuRef);
    const isOverlappingWithTopMenu = computed(() => {
      if (!panelRef.value) {
        return false;
      }
      const { height } = panelRef.value.getBoundingClientRect();
      const actionbarBottom = y.value + height;
      const topMenuBottom = topMenuBounds.bottom.value;
      const overlapPixels = Math.min(actionbarBottom, topMenuBottom) - Math.max(y.value, topMenuBounds.top.value);
      return overlapPixels > overlapThreshold;
    });
    watch(isDragging, (newIsDragging) => {
      if (!newIsDragging) {
        isDocked.value = isOverlappingWithTopMenu.value;
      } else {
        isDocked.value = false;
      }
    });
    const eventBus = useEventBus("topMenu");
    watch([isDragging, isOverlappingWithTopMenu], ([dragging, overlapping]) => {
      eventBus.emit("updateHighlight", {
        isDragging: dragging,
        isOverlapping: overlapping
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$9), {
        class: normalizeClass(["actionbar w-fit", { "is-dragging": unref(isDragging), "is-docked": unref(isDocked) }]),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "panelRef",
            ref: panelRef,
            class: "actionbar-content flex items-center select-none"
          }, [
            createBaseVNode("span", {
              ref_key: "dragHandleRef",
              ref: dragHandleRef,
              class: "drag-handle cursor-move mr-2 p-0!"
            }, null, 512),
            createVNode(ComfyQueueButton)
          ], 512)
        ]),
        _: 1
      }, 8, ["style", "class"]);
    };
  }
});
const Actionbar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b84a567c"]]);
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-5v3h14v-3zm0-2h14V5H5zm0 2v3z"
    }, null, -1)
  ]));
}
__name(render$1, "render$1");
const __unplugin_components_1 = markRaw({ name: "material-symbols-dock-to-bottom-outline", render: render$1 });
const _hoisted_1$5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-7h14V5H5z"
    }, null, -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "material-symbols-dock-to-bottom", render });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BottomPanelToggleButton",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    return (_ctx, _cache) => {
      const _component_i_material_symbols58dock_to_bottom = __unplugin_components_0;
      const _component_i_material_symbols58dock_to_bottom_outline = __unplugin_components_1;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(script), {
        severity: "secondary",
        text: "",
        "aria-label": _ctx.$t("menu.toggleBottomPanel"),
        onClick: unref(bottomPanelStore).toggleBottomPanel
      }, {
        icon: withCtx(() => [
          unref(bottomPanelStore).bottomPanelVisible ? (openBlock(), createBlock(_component_i_material_symbols58dock_to_bottom, { key: 0 })) : (openBlock(), createBlock(_component_i_material_symbols58dock_to_bottom_outline, { key: 1 }))
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"])), [
        [vShow, unref(bottomPanelStore).bottomPanelTabs.length > 0],
        [_directive_tooltip, { value: _ctx.$t("menu.toggleBottomPanel"), showDelay: 300 }]
      ]);
    };
  }
});
const _hoisted_1$4 = ["href"];
const _hoisted_2$3 = { class: "p-menubar-item-label" };
const _hoisted_3$3 = {
  key: 1,
  class: "ml-auto border border-surface rounded text-muted text-xs text-nowrap p-1 keybinding-tag"
};
const _hoisted_4$2 = {
  key: 2,
  class: "ml-auto pi pi-angle-right"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CommandMenubar",
  setup(__props) {
    const settingStore = useSettingStore();
    const dropdownDirection = computed(
      () => settingStore.get("Comfy.UseNewMenu") === "Top" ? "down" : "up"
    );
    const menuItemsStore = useMenuItemStore();
    const { t: t2 } = useI18n();
    const translateMenuItem = /* @__PURE__ */ __name((item) => {
      const label = typeof item.label === "function" ? item.label() : item.label;
      const translatedLabel = label ? t2(`menuLabels.${normalizeI18nKey(label)}`, label) : void 0;
      return {
        ...item,
        label: translatedLabel,
        items: item.items?.map(translateMenuItem)
      };
    }, "translateMenuItem");
    const translatedItems = computed(
      () => menuItemsStore.menuItems.map(translateMenuItem)
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script$k), {
        model: translatedItems.value,
        class: "top-menubar border-none p-0 bg-transparent",
        pt: {
          rootList: "gap-0 flex-nowrap w-auto",
          submenu: `dropdown-direction-${dropdownDirection.value}`,
          item: "relative"
        }
      }, {
        item: withCtx(({ item, props, root }) => [
          createBaseVNode("a", mergeProps({ class: "p-menubar-item-link" }, props.action, {
            href: item.url,
            target: "_blank"
          }), [
            item.icon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["p-menubar-item-icon", item.icon])
            }, null, 2)) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_2$3, toDisplayString(item.label), 1),
            item?.comfyCommand?.keybinding ? (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(item.comfyCommand.keybinding.combo.toString()), 1)) : createCommentVNode("", true),
            !root && item.items ? (openBlock(), createElementBlock("i", _hoisted_4$2)) : createCommentVNode("", true)
          ], 16, _hoisted_1$4)
        ]),
        _: 1
      }, 8, ["model", "pt"]);
    };
  }
});
const CommandMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6a9cf415"]]);
const _hoisted_1$3 = { class: "current-user-popover w-72" };
const _hoisted_2$2 = { class: "p-3" };
const _hoisted_3$2 = { class: "flex flex-col items-center" };
const _hoisted_4$1 = { class: "text-lg font-semibold truncate my-0 mb-1" };
const _hoisted_5 = {
  key: 0,
  class: "text-sm text-muted truncate my-0"
};
const _hoisted_6 = { class: "w-full flex flex-col gap-2 p-2" };
const _hoisted_7 = { class: "text-muted text-sm" };
const _hoisted_8 = { class: "flex justify-between items-center" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserPopover",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { userDisplayName, userEmail, userPhotoUrl } = useCurrentUser();
    const authActions = useFirebaseAuthActions();
    const dialogService = useDialogService();
    const handleOpenUserSettings = /* @__PURE__ */ __name(() => {
      dialogService.showSettingsDialog("user");
      emit("close");
    }, "handleOpenUserSettings");
    const handleTopUp = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
      emit("close");
    }, "handleTopUp");
    const handleLogout = /* @__PURE__ */ __name(async () => {
      await authActions.logout();
      emit("close");
    }, "handleLogout");
    const handleOpenApiPricing = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/tutorials/api-nodes/pricing", "_blank");
      emit("close");
    }, "handleOpenApiPricing");
    onMounted(() => {
      void authActions.fetchBalance();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(_sfc_main$K, {
              class: "mb-3",
              "photo-url": unref(userPhotoUrl),
              "pt:icon:class": {
                "!text-2xl": !unref(userPhotoUrl)
              },
              size: "large"
            }, null, 8, ["photo-url", "pt:icon:class"]),
            createBaseVNode("h3", _hoisted_4$1, toDisplayString(unref(userDisplayName) || _ctx.$t("g.user")), 1),
            unref(userEmail) ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(unref(userEmail)), 1)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(unref(script$l), { class: "my-2" }),
        createVNode(unref(script), {
          class: "justify-start",
          label: _ctx.$t("userSettings.title"),
          icon: "pi pi-cog",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenUserSettings
        }, null, 8, ["label"]),
        createVNode(unref(script$l), { class: "my-2" }),
        createVNode(unref(script), {
          class: "justify-start",
          label: _ctx.$t("auth.signOut.signOut"),
          icon: "pi pi-sign-out",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleLogout
        }, null, 8, ["label"]),
        createVNode(unref(script$l), { class: "my-2" }),
        createVNode(unref(script), {
          class: "justify-start",
          label: _ctx.$t("credits.apiPricing"),
          icon: "pi pi-external-link",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenApiPricing
        }, null, 8, ["label"]),
        createVNode(unref(script$l), { class: "my-2" }),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_sfc_main$L, { "text-class": "text-2xl" }),
            createVNode(unref(script), {
              label: _ctx.$t("credits.topUp.topUp"),
              onClick: handleTopUp
            }, null, 8, ["label"])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "flex items-center rounded-full bg-[var(--p-content-background)]" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserButton",
  setup(__props) {
    const { isLoggedIn, userPhotoUrl } = useCurrentUser();
    const popover = ref(null);
    const photoURL = computed(
      () => userPhotoUrl.value ?? void 0
    );
    const closePopover = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "closePopover");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isLoggedIn) ? (openBlock(), createBlock(unref(script), {
          key: 0,
          class: "user-profile-button p-1",
          severity: "secondary",
          text: "",
          "aria-label": "user profile",
          onClick: _cache[0] || (_cache[0] = ($event) => popover.value?.toggle($event))
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$2, [
              createVNode(_sfc_main$K, { "photo-url": photoURL.value }, null, 8, ["photo-url"]),
              _cache[1] || (_cache[1] = createBaseVNode("i", {
                class: "pi pi-chevron-down px-1",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(script$m), {
          ref_key: "popover",
          ref: popover,
          "show-arrow": false
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, { onClose: closePopover })
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "flex-grow min-w-0 app-drag h-full" };
const _hoisted_2$1 = { class: "window-actions-spacer flex-shrink-0" };
const _hoisted_3$1 = { class: "fixed top-0 left-0 app-drag w-full h-[var(--comfy-topbar-height)]" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopMenubar",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const betaMenuEnabled = computed(() => menuSetting.value !== "Disabled");
    const showTopMenu = computed(
      () => betaMenuEnabled.value && !workspaceState.focusMode
    );
    const menuRight = ref(null);
    onMounted(() => {
      if (menuRight.value) {
        menuRight.value.appendChild(app.menu.element);
      }
    });
    const topMenuRef = ref(null);
    provide("topMenuRef", topMenuRef);
    const eventBus = useEventBus("topMenu");
    const isDropZone = ref(false);
    const isDroppable = ref(false);
    eventBus.on((event, payload) => {
      if (event === "updateHighlight") {
        isDropZone.value = payload.isDragging;
        isDroppable.value = payload.isOverlapping && payload.isDragging;
      }
    });
    onMounted(() => {
      if (isElectron()) {
        electronAPI().changeTheme({
          height: topMenuRef.value?.getBoundingClientRect().height ?? 0
        });
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createBaseVNode("div", {
          ref_key: "topMenuRef",
          ref: topMenuRef,
          class: normalizeClass(["comfyui-menu flex items-center", { dropzone: isDropZone.value, "dropzone-active": isDroppable.value }])
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("img", {
            src: _imports_0,
            alt: "ComfyUI Logo",
            class: "comfyui-logo ml-2 app-drag h-6"
          }, null, -1)),
          createVNode(CommandMenubar),
          createBaseVNode("div", _hoisted_1$1, [
            workflowTabsPosition.value === "Topbar" ? (openBlock(), createBlock(WorkflowTabs, { key: 0 })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            ref_key: "menuRight",
            ref: menuRight,
            class: "comfyui-menu-right flex-shrink-0"
          }, null, 512),
          createVNode(Actionbar),
          createVNode(_sfc_main$2, { class: "flex-shrink-0" }),
          createVNode(_sfc_main$5, { class: "flex-shrink-0" }),
          withDirectives(createVNode(unref(script), {
            class: "flex-shrink-0",
            icon: "pi pi-bars",
            severity: "secondary",
            text: "",
            "aria-label": _ctx.$t("menu.hideMenu"),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(workspaceState).focusMode = true),
            onContextmenu: unref(showNativeSystemMenu)
          }, null, 8, ["aria-label", "onContextmenu"]), [
            [_directive_tooltip, { value: _ctx.$t("menu.hideMenu"), showDelay: 300 }]
          ]),
          withDirectives(createBaseVNode("div", _hoisted_2$1, null, 512), [
            [vShow, menuSetting.value !== "Bottom"]
          ])
        ], 2), [
          [vShow, showTopMenu.value]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_3$1, null, 512), [
          [vShow, unref(isNativeWindow)() && !showTopMenu.value]
        ])
      ], 64);
    };
  }
});
const TopMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1545ebd4"]]);
const DEFAULT_TITLE = "ComfyUI";
const TITLE_SUFFIX = " - ComfyUI";
const useBrowserTabTitle = /* @__PURE__ */ __name(() => {
  const executionStore = useExecutionStore();
  const settingStore = useSettingStore();
  const workflowStore = useWorkflowStore();
  const executionText = computed(
    () => executionStore.isIdle ? "" : `[${Math.round(executionStore.executionProgress * 100)}%]`
  );
  const newMenuEnabled = computed(
    () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
  );
  const isUnsavedText = computed(
    () => workflowStore.activeWorkflow?.isModified || !workflowStore.activeWorkflow?.isPersisted ? " *" : ""
  );
  const workflowNameText = computed(() => {
    const workflowName = workflowStore.activeWorkflow?.filename;
    return workflowName ? isUnsavedText.value + workflowName + TITLE_SUFFIX : DEFAULT_TITLE;
  });
  const nodeExecutionTitle = computed(
    () => executionStore.executingNode && executionStore.executingNodeProgress ? `${executionText.value}[${Math.round(executionStore.executingNodeProgress * 100)}%] ${executionStore.executingNode.type}` : ""
  );
  const workflowTitle = computed(
    () => executionText.value + (newMenuEnabled.value ? workflowNameText.value : DEFAULT_TITLE)
  );
  const title = computed(() => nodeExecutionTitle.value || workflowTitle.value);
  useTitle(title);
}, "useBrowserTabTitle");
function useCoreCommands() {
  const workflowService = useWorkflowService();
  const workflowStore = useWorkflowStore();
  const dialogService = useDialogService();
  const colorPaletteStore = useColorPaletteStore();
  const firebaseAuthActions = useFirebaseAuthActions();
  const toastStore = useToastStore();
  const getTracker = /* @__PURE__ */ __name(() => workflowStore.activeWorkflow?.changeTracker, "getTracker");
  const getSelectedNodes = /* @__PURE__ */ __name(() => {
    const selectedNodes = app.canvas.selected_nodes;
    const result = [];
    if (selectedNodes) {
      for (const i in selectedNodes) {
        const node = selectedNodes[i];
        result.push(node);
      }
    }
    return result;
  }, "getSelectedNodes");
  const toggleSelectedNodesMode = /* @__PURE__ */ __name((mode) => {
    getSelectedNodes().forEach((node) => {
      if (node.mode === mode) {
        node.mode = LGraphEventMode.ALWAYS;
      } else {
        node.mode = mode;
      }
    });
  }, "toggleSelectedNodesMode");
  const commands = [
    {
      id: "Comfy.NewBlankWorkflow",
      icon: "pi pi-plus",
      label: "New Blank Workflow",
      menubarLabel: "New",
      function: /* @__PURE__ */ __name(() => workflowService.loadBlankWorkflow(), "function")
    },
    {
      id: "Comfy.OpenWorkflow",
      icon: "pi pi-folder-open",
      label: "Open Workflow",
      menubarLabel: "Open",
      function: /* @__PURE__ */ __name(() => {
        app.ui.loadFile();
      }, "function")
    },
    {
      id: "Comfy.LoadDefaultWorkflow",
      icon: "pi pi-code",
      label: "Load Default Workflow",
      function: /* @__PURE__ */ __name(() => workflowService.loadDefaultWorkflow(), "function")
    },
    {
      id: "Comfy.SaveWorkflow",
      icon: "pi pi-save",
      label: "Save Workflow",
      menubarLabel: "Save",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflow(workflow);
      }, "function")
    },
    {
      id: "Comfy.SaveWorkflowAs",
      icon: "pi pi-save",
      label: "Save Workflow As",
      menubarLabel: "Save As",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflowAs(workflow);
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflow",
      icon: "pi pi-download",
      label: "Export Workflow",
      menubarLabel: "Export",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow", "workflow");
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflowAPI",
      icon: "pi pi-download",
      label: "Export Workflow (API Format)",
      menubarLabel: "Export (API)",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow_api", "output");
      }, "function")
    },
    {
      id: "Comfy.Undo",
      icon: "pi pi-undo",
      label: "Undo",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.undo?.();
      }, "function")
    },
    {
      id: "Comfy.Redo",
      icon: "pi pi-refresh",
      label: "Redo",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.redo?.();
      }, "function")
    },
    {
      id: "Comfy.ClearWorkflow",
      icon: "pi pi-trash",
      label: "Clear Workflow",
      function: /* @__PURE__ */ __name(() => {
        const settingStore = useSettingStore();
        if (!settingStore.get("Comfy.ComfirmClear") || confirm("Clear workflow?")) {
          app.clean();
          app.graph.clear();
          api.dispatchCustomEvent("graphCleared");
        }
      }, "function")
    },
    {
      id: "Comfy.Canvas.ResetView",
      icon: "pi pi-expand",
      label: "Reset View",
      function: /* @__PURE__ */ __name(() => {
        useLitegraphService().resetView();
      }, "function")
    },
    {
      id: "Comfy.OpenClipspace",
      icon: "pi pi-clipboard",
      label: "Clipspace",
      function: /* @__PURE__ */ __name(() => {
        app.openClipspace();
      }, "function")
    },
    {
      id: "Comfy.RefreshNodeDefinitions",
      icon: "pi pi-refresh",
      label: "Refresh Node Definitions",
      function: /* @__PURE__ */ __name(async () => {
        await app.refreshComboInNodes();
      }, "function")
    },
    {
      id: "Comfy.Interrupt",
      icon: "pi pi-stop",
      label: "Interrupt",
      function: /* @__PURE__ */ __name(async () => {
        await api.interrupt();
        toastStore.add({
          severity: "info",
          summary: t("g.interrupted"),
          detail: t("toastMessages.interrupted"),
          life: 1e3
        });
      }, "function")
    },
    {
      id: "Comfy.ClearPendingTasks",
      icon: "pi pi-stop",
      label: "Clear Pending Tasks",
      function: /* @__PURE__ */ __name(async () => {
        await useQueueStore().clear(["queue"]);
        toastStore.add({
          severity: "info",
          summary: t("g.confirmed"),
          detail: t("toastMessages.pendingTasksDeleted"),
          life: 3e3
        });
      }, "function")
    },
    {
      id: "Comfy.BrowseTemplates",
      icon: "pi pi-folder-open",
      label: "Browse Templates",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showTemplateWorkflowsDialog();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomIn",
      icon: "pi pi-plus",
      label: "Zoom In",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale * 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomOut",
      icon: "pi pi-minus",
      label: "Zoom Out",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale / 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.FitView",
      icon: "pi pi-expand",
      label: "Fit view to selected nodes",
      function: /* @__PURE__ */ __name(() => {
        if (app.canvas.empty) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.emptyCanvas"),
            life: 3e3
          });
          return;
        }
        app.canvas.fitViewToSelectionAnimated();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLock",
      icon: "pi pi-lock",
      label: "Canvas Toggle Lock",
      function: /* @__PURE__ */ __name(() => {
        app.canvas["read_only"] = !app.canvas["read_only"];
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLinkVisibility",
      icon: "pi pi-eye",
      label: "Canvas Toggle Link Visibility",
      versionAdded: "1.3.6",
      function: (() => {
        const settingStore = useSettingStore();
        let lastLinksRenderMode = LiteGraph.SPLINE_LINK;
        return async () => {
          const currentMode = settingStore.get("Comfy.LinkRenderMode");
          if (currentMode === LiteGraph.HIDDEN_LINK) {
            await settingStore.set("Comfy.LinkRenderMode", lastLinksRenderMode);
          } else {
            lastLinksRenderMode = currentMode;
            await settingStore.set(
              "Comfy.LinkRenderMode",
              LiteGraph.HIDDEN_LINK
            );
          }
        };
      })()
    },
    {
      id: "Comfy.QueuePrompt",
      icon: "pi pi-play",
      label: "Queue Prompt",
      versionAdded: "1.3.7",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(0, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueuePromptFront",
      icon: "pi pi-play",
      label: "Queue Prompt (Front)",
      versionAdded: "1.3.7",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(-1, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueueSelectedOutputNodes",
      icon: "pi pi-play",
      label: "Queue Selected Output Nodes",
      versionAdded: "1.19.6",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        const queueNodeIds = getSelectedNodes().filter((node) => node.constructor.nodeData?.output_node).map((node) => node.id);
        if (queueNodeIds.length === 0) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.nothingToQueue"),
            detail: t("toastMessages.pleaseSelectOutputNodes"),
            life: 3e3
          });
          return;
        }
        await app.queuePrompt(0, batchCount, queueNodeIds);
      }, "function")
    },
    {
      id: "Comfy.ShowSettingsDialog",
      icon: "pi pi-cog",
      label: "Show Settings Dialog",
      versionAdded: "1.3.7",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog();
      }, "function")
    },
    {
      id: "Comfy.Graph.GroupSelectedNodes",
      icon: "pi pi-sitemap",
      label: "Group Selected Nodes",
      versionAdded: "1.3.7",
      function: /* @__PURE__ */ __name(() => {
        const { canvas } = app;
        if (!canvas.selectedItems?.size) {
          toastStore.add({
            severity: "error",
            summary: t("toastMessages.nothingToGroup"),
            detail: t("toastMessages.pleaseSelectNodesToGroup"),
            life: 3e3
          });
          return;
        }
        const group = new LGraphGroup();
        const padding = useSettingStore().get(
          "Comfy.GroupSelectedNodes.Padding"
        );
        group.resizeTo(canvas.selectedItems, padding);
        canvas.graph?.add(group);
        useTitleEditorStore().titleEditorTarget = group;
      }, "function")
    },
    {
      id: "Workspace.NextOpenedWorkflow",
      icon: "pi pi-step-forward",
      label: "Next Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadNextOpenedWorkflow();
      }, "function")
    },
    {
      id: "Workspace.PreviousOpenedWorkflow",
      icon: "pi pi-step-backward",
      label: "Previous Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadPreviousOpenedWorkflow();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Mute",
      icon: "pi pi-volume-off",
      label: "Mute/Unmute Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.NEVER);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
      icon: "pi pi-shield",
      label: "Bypass/Unbypass Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.BYPASS);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.pin(!node.pinned);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelected.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Items",
      versionAdded: "1.3.33",
      function: /* @__PURE__ */ __name(() => {
        for (const item of app.canvas.selectedItems) {
          if (item instanceof LGraphNode || item instanceof LGraphGroup) {
            item.pin(!item.pinned);
          }
        }
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.Resize",
      icon: "pi pi-minus",
      label: "Resize Selected Nodes",
      versionAdded: "",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          const optimalSize = node.computeSize();
          node.setSize([optimalSize[0], optimalSize[1]]);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
      icon: "pi pi-minus",
      label: "Collapse/Expand Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.collapse();
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.ToggleTheme",
      icon: "pi pi-moon",
      label: "Toggle Theme (Dark/Light)",
      versionAdded: "1.3.12",
      function: (() => {
        let previousDarkTheme = DEFAULT_DARK_COLOR_PALETTE.id;
        let previousLightTheme = DEFAULT_LIGHT_COLOR_PALETTE.id;
        return async () => {
          const settingStore = useSettingStore();
          const theme = colorPaletteStore.completedActivePalette;
          if (theme.light_theme) {
            previousLightTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousDarkTheme);
          } else {
            previousDarkTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousLightTheme);
          }
        };
      })()
    },
    {
      id: "Workspace.ToggleBottomPanel",
      icon: "pi pi-list",
      label: "Toggle Bottom Panel",
      versionAdded: "1.3.22",
      function: /* @__PURE__ */ __name(() => {
        useBottomPanelStore().toggleBottomPanel();
      }, "function")
    },
    {
      id: "Workspace.ToggleFocusMode",
      icon: "pi pi-eye",
      label: "Toggle Focus Mode",
      versionAdded: "1.3.27",
      function: /* @__PURE__ */ __name(() => {
        useWorkspaceStore().toggleFocusMode();
      }, "function")
    },
    {
      id: "Comfy.Graph.FitGroupToContents",
      icon: "pi pi-expand",
      label: "Fit Group To Contents",
      versionAdded: "1.4.9",
      function: /* @__PURE__ */ __name(() => {
        for (const group of app.canvas.selectedItems) {
          if (group instanceof LGraphGroup) {
            group.recomputeInsideNodes();
            const padding = useSettingStore().get(
              "Comfy.GroupSelectedNodes.Padding"
            );
            group.resizeTo(group.children, padding);
            app.graph.change();
          }
        }
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIIssues",
      icon: "pi pi-github",
      label: "Open ComfyUI Issues",
      menubarLabel: "ComfyUI Issues",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open(
          "https://github.com/comfyanonymous/ComfyUI/issues",
          "_blank"
        );
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIDocs",
      icon: "pi pi-info-circle",
      label: "Open ComfyUI Docs",
      menubarLabel: "ComfyUI Docs",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://docs.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyOrgDiscord",
      icon: "pi pi-discord",
      label: "Open Comfy-Org Discord",
      menubarLabel: "Comfy-Org Discord",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://www.comfy.org/discord", "_blank");
      }, "function")
    },
    {
      id: "Workspace.SearchBox.Toggle",
      icon: "pi pi-search",
      label: "Toggle Search Box",
      versionAdded: "1.5.7",
      function: /* @__PURE__ */ __name(() => {
        useSearchBoxStore().toggleVisible();
      }, "function")
    },
    {
      id: "Comfy.Help.AboutComfyUI",
      icon: "pi pi-info-circle",
      label: "Open About ComfyUI",
      menubarLabel: "About ComfyUI",
      versionAdded: "1.6.4",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog("about");
      }, "function")
    },
    {
      id: "Comfy.DuplicateWorkflow",
      icon: "pi pi-clone",
      label: "Duplicate Current Workflow",
      versionAdded: "1.6.15",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Workspace.CloseWorkflow",
      icon: "pi pi-times",
      label: "Close Current Workflow",
      versionAdded: "1.7.3",
      function: /* @__PURE__ */ __name(async () => {
        if (workflowStore.activeWorkflow)
          await workflowService.closeWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Comfy.Feedback",
      icon: "pi pi-megaphone",
      label: "Give Feedback",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t("g.feedback"),
          subtitle: t("issueReport.feedbackTitle"),
          panelProps: {
            errorType: "Feedback",
            defaultFields: ["SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.ContactSupport",
      icon: "pi pi-question",
      label: "Contact Support",
      versionAdded: "1.17.8",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t("issueReport.contactSupportTitle"),
          subtitle: t("issueReport.contactSupportDescription"),
          panelProps: {
            errorType: "ContactSupport",
            defaultFields: ["Workflow", "Logs", "SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIForum",
      icon: "pi pi-comments",
      label: "Open ComfyUI Forum",
      menubarLabel: "ComfyUI Forum",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://forum.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Canvas.DeleteSelectedItems",
      icon: "pi pi-trash",
      label: "Delete Selected Items",
      versionAdded: "1.10.5",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.deleteSelected();
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Manager.CustomNodesManager",
      icon: "pi pi-puzzle",
      label: "Custom Nodes Manager",
      versionAdded: "1.12.10",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showManagerDialog();
      }, "function")
    },
    {
      id: "Comfy.Manager.ToggleManagerProgressDialog",
      icon: "pi pi-spinner",
      label: "Toggle Progress Dialog",
      versionAdded: "1.13.9",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showManagerProgressDialog();
      }, "function")
    },
    {
      id: "Comfy.User.OpenSignInDialog",
      icon: "pi pi-user",
      label: "Open Sign In Dialog",
      versionAdded: "1.17.6",
      function: /* @__PURE__ */ __name(async () => {
        await dialogService.showSignInDialog();
      }, "function")
    },
    {
      id: "Comfy.User.SignOut",
      icon: "pi pi-sign-out",
      label: "Sign Out",
      versionAdded: "1.18.1",
      function: /* @__PURE__ */ __name(async () => {
        await firebaseAuthActions.logout();
      }, "function")
    }
  ];
  return commands.map((command) => ({ ...command, source: "System" }));
}
__name(useCoreCommands, "useCoreCommands");
const useProgressFavicon = /* @__PURE__ */ __name(() => {
  const defaultFavicon = "/assets/images/favicon_progress_16x16/frame_9.png";
  const favicon = useFavicon(defaultFavicon);
  const executionStore = useExecutionStore();
  const totalFrames = 10;
  watch(
    [() => executionStore.executionProgress, () => executionStore.isIdle],
    ([progress, isIdle]) => {
      if (isIdle) {
        favicon.value = defaultFavicon;
      } else {
        const frame = Math.floor(progress * totalFrames);
        favicon.value = `/assets/images/favicon_progress_16x16/frame_${frame}.png`;
      }
    }
  );
}, "useProgressFavicon");
var LatentPreviewMethod = /* @__PURE__ */ ((LatentPreviewMethod2) => {
  LatentPreviewMethod2["NoPreviews"] = "none";
  LatentPreviewMethod2["Auto"] = "auto";
  LatentPreviewMethod2["Latent2RGB"] = "latent2rgb";
  LatentPreviewMethod2["TAESD"] = "taesd";
  return LatentPreviewMethod2;
})(LatentPreviewMethod || {});
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["DEBUG"] = "DEBUG";
  LogLevel2["INFO"] = "INFO";
  LogLevel2["WARNING"] = "WARNING";
  LogLevel2["ERROR"] = "ERROR";
  LogLevel2["CRITICAL"] = "CRITICAL";
  return LogLevel2;
})(LogLevel || {});
var HashFunction = /* @__PURE__ */ ((HashFunction2) => {
  HashFunction2["MD5"] = "md5";
  HashFunction2["SHA1"] = "sha1";
  HashFunction2["SHA256"] = "sha256";
  HashFunction2["SHA512"] = "sha512";
  return HashFunction2;
})(HashFunction || {});
var AutoLaunch = /* @__PURE__ */ ((AutoLaunch2) => {
  AutoLaunch2["Auto"] = "auto";
  AutoLaunch2["Disable"] = "disable";
  AutoLaunch2["Enable"] = "enable";
  return AutoLaunch2;
})(AutoLaunch || {});
var CudaMalloc = /* @__PURE__ */ ((CudaMalloc2) => {
  CudaMalloc2["Auto"] = "auto";
  CudaMalloc2["Disable"] = "disable";
  CudaMalloc2["Enable"] = "enable";
  return CudaMalloc2;
})(CudaMalloc || {});
var FloatingPointPrecision = /* @__PURE__ */ ((FloatingPointPrecision2) => {
  FloatingPointPrecision2["AUTO"] = "auto";
  FloatingPointPrecision2["FP64"] = "fp64";
  FloatingPointPrecision2["FP32"] = "fp32";
  FloatingPointPrecision2["FP16"] = "fp16";
  FloatingPointPrecision2["BF16"] = "bf16";
  FloatingPointPrecision2["FP8E4M3FN"] = "fp8_e4m3fn";
  FloatingPointPrecision2["FP8E5M2"] = "fp8_e5m2";
  return FloatingPointPrecision2;
})(FloatingPointPrecision || {});
var CrossAttentionMethod = /* @__PURE__ */ ((CrossAttentionMethod2) => {
  CrossAttentionMethod2["Auto"] = "auto";
  CrossAttentionMethod2["Split"] = "split";
  CrossAttentionMethod2["Quad"] = "quad";
  CrossAttentionMethod2["Pytorch"] = "pytorch";
  return CrossAttentionMethod2;
})(CrossAttentionMethod || {});
var VramManagement = /* @__PURE__ */ ((VramManagement2) => {
  VramManagement2["Auto"] = "auto";
  VramManagement2["GPUOnly"] = "gpu-only";
  VramManagement2["HighVram"] = "highvram";
  VramManagement2["NormalVram"] = "normalvram";
  VramManagement2["LowVram"] = "lowvram";
  VramManagement2["NoVram"] = "novram";
  VramManagement2["CPU"] = "cpu";
  return VramManagement2;
})(VramManagement || {});
const WEB_ONLY_CONFIG_ITEMS = [
  // Launch behavior
  {
    id: "auto-launch",
    name: "Automatically opens in the browser on startup",
    category: ["Launch"],
    type: "combo",
    options: Object.values(AutoLaunch),
    defaultValue: AutoLaunch.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case AutoLaunch.Auto:
          return {};
        case AutoLaunch.Enable:
          return {
            ["auto-launch"]: true
          };
        case AutoLaunch.Disable:
          return {
            ["disable-auto-launch"]: true
          };
      }
    }, "getValue")
  }
];
const SERVER_CONFIG_ITEMS = [
  // Network settings
  {
    id: "listen",
    name: "Host: The IP address to listen on",
    category: ["Network"],
    type: "text",
    defaultValue: "127.0.0.1"
  },
  {
    id: "port",
    name: "Port: The port to listen on",
    category: ["Network"],
    type: "number",
    // The default launch port for desktop app is 8000 instead of 8188.
    defaultValue: 8e3
  },
  {
    id: "tls-keyfile",
    name: "TLS Key File: Path to TLS key file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "tls-certfile",
    name: "TLS Certificate File: Path to TLS certificate file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "enable-cors-header",
    name: 'Enable CORS header: Use "*" for all origins or specify domain',
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "max-upload-size",
    name: "Maximum upload size (MB)",
    category: ["Network"],
    type: "number",
    defaultValue: 100
  },
  // CUDA settings
  {
    id: "cuda-device",
    name: "CUDA device index to use",
    category: ["CUDA"],
    type: "number",
    defaultValue: null
  },
  {
    id: "cuda-malloc",
    name: "Use CUDA malloc for memory allocation",
    category: ["CUDA"],
    type: "combo",
    options: Object.values(CudaMalloc),
    defaultValue: CudaMalloc.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CudaMalloc.Auto:
          return {};
        case CudaMalloc.Enable:
          return {
            ["cuda-malloc"]: true
          };
        case CudaMalloc.Disable:
          return {
            ["disable-cuda-malloc"]: true
          };
      }
    }, "getValue")
  },
  // Precision settings
  {
    id: "global-precision",
    name: "Global floating point precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Global floating point precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        case FloatingPointPrecision.FP32:
          return {
            ["force-fp32"]: true
          };
        case FloatingPointPrecision.FP16:
          return {
            ["force-fp16"]: true
          };
        default:
          return {};
      }
    }, "getValue")
  },
  // UNET precision
  {
    id: "unet-precision",
    name: "UNET precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP64,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.BF16,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "UNET precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-unet`]: true
          };
      }
    }, "getValue")
  },
  // VAE settings
  {
    id: "vae-precision",
    name: "VAE precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.BF16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "VAE precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-vae`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "cpu-vae",
    name: "Run VAE on CPU",
    category: ["Inference"],
    type: "boolean",
    defaultValue: false
  },
  // Text Encoder settings
  {
    id: "text-encoder-precision",
    name: "Text Encoder precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Text Encoder precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-text-enc`]: true
          };
      }
    }, "getValue")
  },
  // Memory and performance settings
  {
    id: "force-channels-last",
    name: "Force channels-last memory format",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "directml",
    name: "DirectML device index",
    category: ["Memory"],
    type: "number",
    defaultValue: null
  },
  {
    id: "disable-ipex-optimize",
    name: "Disable IPEX optimization",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  // Preview settings
  {
    id: "preview-method",
    name: "Method used for latent previews",
    category: ["Preview"],
    type: "combo",
    options: Object.values(LatentPreviewMethod),
    defaultValue: LatentPreviewMethod.NoPreviews
  },
  {
    id: "preview-size",
    name: "Size of preview images",
    category: ["Preview"],
    type: "slider",
    defaultValue: 512,
    attrs: {
      min: 128,
      max: 2048,
      step: 128
    }
  },
  // Cache settings
  {
    id: "cache-classic",
    name: "Use classic cache system",
    category: ["Cache"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "cache-lru",
    name: "Use LRU caching with a maximum of N node results cached.",
    category: ["Cache"],
    type: "number",
    defaultValue: null,
    tooltip: "May use more RAM/VRAM."
  },
  // Attention settings
  {
    id: "cross-attention-method",
    name: "Cross attention method",
    category: ["Attention"],
    type: "combo",
    options: Object.values(CrossAttentionMethod),
    defaultValue: CrossAttentionMethod.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CrossAttentionMethod.Auto:
          return {};
        default:
          return {
            [`use-${value.toLowerCase()}-cross-attention`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "disable-xformers",
    name: "Disable xFormers optimization",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "force-upcast-attention",
    name: "Force attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-upcast-attention",
    name: "Prevent attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  // VRAM management
  {
    id: "vram-management",
    name: "VRAM management mode",
    category: ["Memory"],
    type: "combo",
    options: Object.values(VramManagement),
    defaultValue: VramManagement.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case VramManagement.Auto:
          return {};
        default:
          return {
            [value]: true
          };
      }
    }, "getValue")
  },
  {
    id: "reserve-vram",
    name: "Reserved VRAM (GB)",
    category: ["Memory"],
    type: "number",
    defaultValue: null,
    tooltip: "Set the amount of vram in GB you want to reserve for use by your OS/other software. By default some amount is reverved depending on your OS."
  },
  // Misc settings
  {
    id: "default-hashing-function",
    name: "Default hashing function for model files",
    type: "combo",
    options: Object.values(HashFunction),
    defaultValue: HashFunction.SHA256
  },
  {
    id: "disable-smart-memory",
    name: "Disable smart memory management",
    tooltip: "Force ComfyUI to aggressively offload to regular ram instead of keeping models in vram when it can.",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "deterministic",
    name: "Make pytorch use slower deterministic algorithms when it can.",
    type: "boolean",
    defaultValue: false,
    tooltip: "Note that this might not make images deterministic in all cases."
  },
  {
    id: "fast",
    name: "Enable some untested and potentially quality deteriorating optimizations.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-print-server",
    name: "Don't print server output to console.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-metadata",
    name: "Disable saving prompt metadata in files.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-all-custom-nodes",
    name: "Disable loading all custom nodes.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "log-level",
    name: "Logging verbosity level",
    type: "combo",
    options: Object.values(LogLevel),
    defaultValue: LogLevel.INFO,
    getValue: /* @__PURE__ */ __name((value) => {
      return {
        verbose: value
      };
    }, "getValue")
  },
  // Directories
  {
    id: "input-directory",
    name: "Input directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "output-directory",
    name: "Output directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  }
];
function setupAutoQueueHandler() {
  const queueCountStore = useQueuePendingTaskCountStore();
  const queueSettingsStore = useQueueSettingsStore();
  let graphHasChanged = false;
  let internalCount = 0;
  api.addEventListener("graphChanged", () => {
    if (queueSettingsStore.mode === "change") {
      if (internalCount) {
        graphHasChanged = true;
      } else {
        graphHasChanged = false;
        void app.queuePrompt(0, queueSettingsStore.batchCount);
        internalCount++;
      }
    }
  });
  queueCountStore.$subscribe(
    async () => {
      internalCount = queueCountStore.count;
      if (!internalCount && !app.lastExecutionError) {
        if (queueSettingsStore.mode === "instant" || queueSettingsStore.mode === "change" && graphHasChanged) {
          graphHasChanged = false;
          await app.queuePrompt(0, queueSettingsStore.batchCount);
        }
      }
    },
    { detached: true }
  );
}
__name(setupAutoQueueHandler, "setupAutoQueueHandler");
const _hoisted_1 = { class: "comfyui-body grid h-full w-full overflow-hidden" };
const _hoisted_2 = {
  id: "comfyui-body-top",
  class: "comfyui-body-top"
};
const _hoisted_3 = {
  id: "comfyui-body-bottom",
  class: "comfyui-body-bottom"
};
const _hoisted_4 = {
  id: "graph-canvas-container",
  class: "graph-canvas-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GraphView",
  setup(__props) {
    setupAutoQueueHandler();
    useProgressFavicon();
    useBrowserTabTitle();
    const { t: t2 } = useI18n();
    const toast = useToast();
    const settingStore = useSettingStore();
    const executionStore = useExecutionStore();
    const colorPaletteStore = useColorPaletteStore();
    const queueStore = useQueueStore();
    watch(
      () => colorPaletteStore.completedActivePalette,
      (newTheme) => {
        const DARK_THEME_CLASS = "dark-theme";
        if (newTheme.light_theme) {
          document.body.classList.remove(DARK_THEME_CLASS);
        } else {
          document.body.classList.add(DARK_THEME_CLASS);
        }
        if (isElectron()) {
          electronAPI().changeTheme({
            color: "rgba(0, 0, 0, 0)",
            symbolColor: newTheme.colors.comfy_base["input-text"]
          });
        }
      },
      { immediate: true }
    );
    if (isElectron()) {
      watch(
        () => queueStore.tasks,
        (newTasks, oldTasks) => {
          const oldRunningTaskIds = new Set(
            oldTasks.filter((task) => task.isRunning).map((task) => task.promptId)
          );
          newTasks.filter(
            (task) => oldRunningTaskIds.has(task.promptId) && task.isHistory
          ).forEach((task) => {
            electronAPI().Events.incrementUserProperty(
              `execution:${task.displayStatus.toLowerCase()}`,
              1
            );
            electronAPI().Events.trackEvent("execution", {
              status: task.displayStatus.toLowerCase()
            });
          });
        },
        { deep: true }
      );
    }
    watchEffect(() => {
      const fontSize = settingStore.get("Comfy.TextareaWidget.FontSize");
      document.documentElement.style.setProperty(
        "--comfy-textarea-font-size",
        `${fontSize}px`
      );
    });
    watchEffect(() => {
      const padding = settingStore.get("Comfy.TreeExplorer.ItemPadding");
      document.documentElement.style.setProperty(
        "--comfy-tree-explorer-item-padding",
        `${padding}px`
      );
    });
    watchEffect(() => {
      const locale = settingStore.get("Comfy.Locale");
      if (locale) {
        i18n.global.locale.value = locale;
      }
    });
    const useNewMenu = computed(() => {
      return settingStore.get("Comfy.UseNewMenu");
    });
    watchEffect(() => {
      if (useNewMenu.value === "Disabled") {
        app.ui.menuContainer.style.setProperty("display", "block");
        app.ui.restoreMenuPosition();
      } else {
        app.ui.menuContainer.style.setProperty("display", "none");
      }
    });
    watchEffect(() => {
      queueStore.maxHistoryItems = settingStore.get("Comfy.Queue.MaxHistoryItems");
    });
    const init = /* @__PURE__ */ __name(() => {
      const coreCommands = useCoreCommands();
      useCommandStore().registerCommands(coreCommands);
      useMenuItemStore().registerCoreMenuCommands();
      useKeybindingService().registerCoreKeybindings();
      useSidebarTabStore().registerCoreSidebarTabs();
      useBottomPanelStore().registerCoreBottomPanelTabs();
      app.extensionManager = useWorkspaceStore();
    }, "init");
    const queuePendingTaskCountStore = useQueuePendingTaskCountStore();
    const onStatus = /* @__PURE__ */ __name(async (e) => {
      queuePendingTaskCountStore.update(e);
      await queueStore.update();
    }, "onStatus");
    const reconnectingMessage = {
      severity: "error",
      summary: t2("g.reconnecting")
    };
    const onReconnecting = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add(reconnectingMessage);
      }
    }, "onReconnecting");
    const onReconnected = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add({
          severity: "success",
          summary: t2("g.reconnected"),
          life: 2e3
        });
      }
    }, "onReconnected");
    onMounted(() => {
      api.addEventListener("status", onStatus);
      api.addEventListener("reconnecting", onReconnecting);
      api.addEventListener("reconnected", onReconnected);
      executionStore.bindExecutionEvents();
      try {
        init();
      } catch (e) {
        console.error("Failed to init ComfyUI frontend", e);
      }
    });
    onBeforeUnmount(() => {
      api.removeEventListener("status", onStatus);
      api.removeEventListener("reconnecting", onReconnecting);
      api.removeEventListener("reconnected", onReconnected);
      executionStore.unbindExecutionEvents();
    });
    useEventListener(window, "keydown", useKeybindingService().keybindHandler);
    const { wrapWithErrorHandling, wrapWithErrorHandlingAsync } = useErrorHandling();
    const onGraphReady = /* @__PURE__ */ __name(() => {
      requestIdleCallback(
        () => {
          wrapWithErrorHandling(useKeybindingService().registerUserKeybindings)();
          wrapWithErrorHandling(useServerConfigStore().loadServerConfig)(
            SERVER_CONFIG_ITEMS,
            settingStore.get("Comfy.Server.ServerConfigValues")
          );
          void wrapWithErrorHandlingAsync(useModelStore().loadModelFolders)();
          void wrapWithErrorHandlingAsync(
            useNodeFrequencyStore().loadNodeFrequencies
          )();
          useNodeDefStore().nodeSearchService.searchNode("");
        },
        { timeout: 1e3 }
      );
    }, "onGraphReady");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            useNewMenu.value === "Top" ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_3, [
            useNewMenu.value === "Bottom" ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", {
            id: "comfyui-body-left",
            class: "comfyui-body-left"
          }, null, -1)),
          _cache[1] || (_cache[1] = createBaseVNode("div", {
            id: "comfyui-body-right",
            class: "comfyui-body-right"
          }, null, -1)),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_sfc_main$b, { onReady: onGraphReady })
          ])
        ]),
        createVNode(_sfc_main$a),
        createVNode(_sfc_main$9),
        !unref(isElectron)() ? (openBlock(), createBlock(_sfc_main$I, { key: 0 })) : createCommentVNode("", true),
        createVNode(MenuHamburger)
      ], 64);
    };
  }
});
const GraphView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e9641c8"]]);
export {
  GraphView as default
};
//# sourceMappingURL=GraphView-D8hgkH40.js.map
