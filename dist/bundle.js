(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // 膀胱.js
  var \u8180\u80F1\u7CFB\u7EDF\u8BBE\u7F6E, \u8180\u80F1\u8BBE\u7F6E, \u8180\u80F1\u7C7B;
  var init__ = __esm({
    "\u8180\u80F1.js"() {
      \u8180\u80F1\u7CFB\u7EDF\u8BBE\u7F6E = {
        \u8180\u80F1\u6309\u94AE\u6587\u672C: "\u8180\u80F1\u8BBE\u7F6E",
        \u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E: [500, 300],
        \u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F: [200, 80]
      };
      \u8180\u80F1\u8BBE\u7F6E = {
        \u7CFB\u7EDF\u8BBE\u7F6E: { ...\u8180\u80F1\u7CFB\u7EDF\u8BBE\u7F6E }
      };
      \u8180\u80F1\u7C7B = class {
        constructor(\u8180\u80F1\u8BBE\u7F6E2) {
          this.\u53C2\u6570 = \u8180\u80F1\u8BBE\u7F6E2;
        }
        \u8BFB\u53D6\u8BBE\u7F6E() {
        }
        \u6E32\u67D3\u8BBE\u7F6E() {
          DrawButton(
            this.\u53C2\u6570.\u7CFB\u7EDF\u8BBE\u7F6E.\u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[0],
            this.\u53C2\u6570.\u7CFB\u7EDF\u8BBE\u7F6E.\u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[1],
            this.\u53C2\u6570.\u7CFB\u7EDF\u8BBE\u7F6E.\u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[0],
            this.\u53C2\u6570.\u7CFB\u7EDF\u8BBE\u7F6E.\u8180\u80F1\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[1],
            this.\u53C2\u6570.\u7CFB\u7EDF\u8BBE\u7F6E.\u8180\u80F1\u6309\u94AE\u6587\u672C,
            "White",
            ""
          );
        }
      };
    }
  });

  // sabcm.js
  var require_sabcm = __commonJS({
    "sabcm.js"(exports) {
      init__();
      var DEBUG = true;
      (function() {
        "use strict";
        var bcModSdk = function() {
          "use strict";
          const o = "1.2.0";
          function e(o2) {
            alert("Mod ERROR:\n" + o2);
            const e2 = new Error(o2);
            throw console.error(e2), e2;
          }
          const t = new TextEncoder();
          function n(o2) {
            return !!o2 && "object" == typeof o2 && !Array.isArray(o2);
          }
          function r(o2) {
            const e2 = /* @__PURE__ */ new Set();
            return o2.filter((o3) => !e2.has(o3) && e2.add(o3));
          }
          const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
          function c(o2) {
            a.has(o2) || (a.add(o2), console.warn(o2));
          }
          function s(o2) {
            const e2 = [], t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
            for (const r3 of f.values()) {
              const i3 = r3.patching.get(o2.name);
              if (i3) {
                e2.push(...i3.hooks);
                for (const [e3, a2] of i3.patches.entries()) t2.has(e3) && t2.get(e3) !== a2 && c(`ModSDK: Mod '${r3.name}' is patching function ${o2.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${e3}
Patch1:
${t2.get(e3) || ""}
Patch2:
${a2}`), t2.set(e3, a2), n2.add(r3.name);
              }
            }
            e2.sort((o3, e3) => e3.priority - o3.priority);
            const r2 = function(o3, e3) {
              if (0 === e3.size) return o3;
              let t3 = o3.toString().replaceAll("\r\n", "\n");
              for (const [n3, r3] of e3.entries()) t3.includes(n3) || c(`ModSDK: Patching ${o3.name}: Patch ${n3} not applied`), t3 = t3.replaceAll(n3, r3);
              return (0, eval)(`(${t3})`);
            }(o2.original, t2);
            let i2 = function(e3) {
              var t3, i3;
              const a2 = null === (i3 = (t3 = m.errorReporterHooks).hookChainExit) || void 0 === i3 ? void 0 : i3.call(t3, o2.name, n2), c2 = r2.apply(this, e3);
              return null == a2 || a2(), c2;
            };
            for (let t3 = e2.length - 1; t3 >= 0; t3--) {
              const n3 = e2[t3], r3 = i2;
              i2 = function(e3) {
                var t4, i3;
                const a2 = null === (i3 = (t4 = m.errorReporterHooks).hookEnter) || void 0 === i3 ? void 0 : i3.call(t4, o2.name, n3.mod), c2 = n3.hook.apply(this, [e3, (o3) => {
                  if (1 !== arguments.length || !Array.isArray(e3)) throw new Error(`Mod ${n3.mod} failed to call next hook: Expected args to be array, got ${typeof o3}`);
                  return r3.call(this, o3);
                }]);
                return null == a2 || a2(), c2;
              };
            }
            return {
              hooks: e2,
              patches: t2,
              patchesSources: n2,
              enter: i2,
              final: r2
            };
          }
          function l(o2, e2 = false) {
            let r2 = i.get(o2);
            if (r2) e2 && (r2.precomputed = s(r2));
            else {
              let e3 = window;
              const a2 = o2.split(".");
              for (let t2 = 0; t2 < a2.length - 1; t2++)
                if (e3 = e3[a2[t2]], !n(e3)) throw new Error(`ModSDK: Function ${o2} to be patched not found; ${a2.slice(0, t2 + 1).join(".")} is not object`);
              const c2 = e3[a2[a2.length - 1]];
              if ("function" != typeof c2) throw new Error(`ModSDK: Function ${o2} to be patched not found`);
              const l2 = function(o3) {
                let e4 = -1;
                for (const n2 of t.encode(o3)) {
                  let o4 = 255 & (e4 ^ n2);
                  for (let e5 = 0; e5 < 8; e5++) o4 = 1 & o4 ? -306674912 ^ o4 >>> 1 : o4 >>> 1;
                  e4 = e4 >>> 8 ^ o4;
                }
                return ((-1 ^ e4) >>> 0).toString(16).padStart(8, "0").toUpperCase();
              }(c2.toString().replaceAll("\r\n", "\n")), d2 = {
                name: o2,
                original: c2,
                originalHash: l2
              };
              r2 = Object.assign(Object.assign({}, d2), {
                precomputed: s(d2),
                router: () => {
                },
                context: e3,
                contextProperty: a2[a2.length - 1]
              }), r2.router = /* @__PURE__ */ function(o3) {
                return function(...e4) {
                  return o3.precomputed.enter.apply(this, [e4]);
                };
              }(r2), i.set(o2, r2), e3[r2.contextProperty] = r2.router;
            }
            return r2;
          }
          function d() {
            for (const o2 of i.values()) o2.precomputed = s(o2);
          }
          function p() {
            const o2 = /* @__PURE__ */ new Map();
            for (const [e2, t2] of i) o2.set(e2, {
              name: e2,
              original: t2.original,
              originalHash: t2.originalHash,
              sdkEntrypoint: t2.router,
              currentEntrypoint: t2.context[t2.contextProperty],
              hookedByMods: r(t2.precomputed.hooks.map((o3) => o3.mod)),
              patchedByMods: Array.from(t2.precomputed.patchesSources)
            });
            return o2;
          }
          const f = /* @__PURE__ */ new Map();
          function u(o2) {
            f.get(o2.name) !== o2 && e(`Failed to unload mod '${o2.name}': Not registered`), f.delete(o2.name), o2.loaded = false, d();
          }
          function g(o2, t2) {
            o2 && "object" == typeof o2 || e("Failed to register mod: Expected info object, got " + typeof o2), "string" == typeof o2.name && o2.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o2.name);
            let r2 = `'${o2.name}'`;
            "string" == typeof o2.fullName && o2.fullName || e(`Failed to register mod ${r2}: Expected fullName to be non-empty string, got ${typeof o2.fullName}`), r2 = `'${o2.fullName} (${o2.name})'`, "string" != typeof o2.version && e(`Failed to register mod ${r2}: Expected version to be string, got ${typeof o2.version}`), o2.repository || (o2.repository = void 0), void 0 !== o2.repository && "string" != typeof o2.repository && e(`Failed to register mod ${r2}: Expected repository to be undefined or string, got ${typeof o2.version}`), null == t2 && (t2 = {}), t2 && "object" == typeof t2 || e(`Failed to register mod ${r2}: Expected options to be undefined or object, got ${typeof t2}`);
            const i2 = true === t2.allowReplace, a2 = f.get(o2.name);
            a2 && (a2.allowReplace && i2 || e(`Refusing to load mod ${r2}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`), u(a2));
            const c2 = (o3) => {
              let e2 = g2.patching.get(o3.name);
              return e2 || (e2 = {
                hooks: [],
                patches: /* @__PURE__ */ new Map()
              }, g2.patching.set(o3.name, e2)), e2;
            }, s2 = (o3, t3) => (...n2) => {
              var i3, a3;
              const c3 = null === (a3 = (i3 = m.errorReporterHooks).apiEndpointEnter) || void 0 === a3 ? void 0 : a3.call(i3, o3, g2.name);
              g2.loaded || e(`Mod ${r2} attempted to call SDK function after being unloaded`);
              const s3 = t3(...n2);
              return null == c3 || c3(), s3;
            }, p2 = {
              unload: s2("unload", () => u(g2)),
              hookFunction: s2("hookFunction", (o3, t3, n2) => {
                "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
                const i3 = l(o3), a3 = c2(i3);
                "number" != typeof t3 && e(`Mod ${r2} failed to hook function '${o3}': Expected priority number, got ${typeof t3}`), "function" != typeof n2 && e(`Mod ${r2} failed to hook function '${o3}': Expected hook function, got ${typeof n2}`);
                const s3 = {
                  mod: g2.name,
                  priority: t3,
                  hook: n2
                };
                return a3.hooks.push(s3), d(), () => {
                  const o4 = a3.hooks.indexOf(s3);
                  o4 >= 0 && (a3.hooks.splice(o4, 1), d());
                };
              }),
              patchFunction: s2("patchFunction", (o3, t3) => {
                "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
                const i3 = l(o3), a3 = c2(i3);
                n(t3) || e(`Mod ${r2} failed to patch function '${o3}': Expected patches object, got ${typeof t3}`);
                for (const [n2, i4] of Object.entries(t3)) "string" == typeof i4 ? a3.patches.set(n2, i4) : null === i4 ? a3.patches.delete(n2) : e(`Mod ${r2} failed to patch function '${o3}': Invalid format of patch '${n2}'`);
                d();
              }),
              removePatches: s2("removePatches", (o3) => {
                "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
                const t3 = l(o3);
                c2(t3).patches.clear(), d();
              }),
              callOriginal: s2("callOriginal", (o3, t3, n2) => {
                "string" == typeof o3 && o3 || e(`Mod ${r2} failed to call a function: Expected function name string, got ${typeof o3}`);
                const i3 = l(o3);
                return Array.isArray(t3) || e(`Mod ${r2} failed to call a function: Expected args array, got ${typeof t3}`), i3.original.apply(null != n2 ? n2 : globalThis, t3);
              }),
              getOriginalHash: s2("getOriginalHash", (o3) => {
                "string" == typeof o3 && o3 || e(`Mod ${r2} failed to get hash: Expected function name string, got ${typeof o3}`);
                return l(o3).originalHash;
              })
            }, g2 = {
              name: o2.name,
              fullName: o2.fullName,
              version: o2.version,
              repository: o2.repository,
              allowReplace: i2,
              api: p2,
              loaded: true,
              patching: /* @__PURE__ */ new Map()
            };
            return f.set(o2.name, g2), Object.freeze(p2);
          }
          function h() {
            const o2 = [];
            for (const e2 of f.values()) o2.push({
              name: e2.name,
              fullName: e2.fullName,
              version: e2.version,
              repository: e2.repository
            });
            return o2;
          }
          let m;
          const y = void 0 === window.bcModSdk ? window.bcModSdk = function() {
            const e2 = {
              version: o,
              apiVersion: 1,
              registerMod: g,
              getModsInfo: h,
              getPatchingInfo: p,
              errorReporterHooks: Object.seal({
                apiEndpointEnter: null,
                hookEnter: null,
                hookChainExit: null
              })
            };
            return m = e2, Object.freeze(e2);
          }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk);
          return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", {
            value: true
          }), exports.default = y), y;
        }();
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }
        async function \u7B49\u5F85(\u68C0\u6D4B\u51FD\u6570, {
          \u53D6\u6D88\u51FD\u6570 = () => false,
          \u8D85\u65F6\u65F6\u95F4 = 5e3
        } = {}) {
          let \u5DF2\u8D85\u65F6 = false;
          let \u8D85\u65F6\u8BA1\u65F6\u5668 = null;
          if (\u8D85\u65F6\u65F6\u95F4 >= 0) {
            \u8D85\u65F6\u8BA1\u65F6\u5668 = setTimeout(() => {
              \u5DF2\u8D85\u65F6 = true;
              console.error(`[\u5F02\u6B65\u7B49\u5F85] \u8D85\u65F6\uFF01${\u8D85\u65F6\u65F6\u95F4}ms \u540E\u672A\u6EE1\u8DB3\u6761\u4EF6\uFF1A`, \u68C0\u6D4B\u51FD\u6570.toString());
            }, \u8D85\u65F6\u65F6\u95F4);
          }
          try {
            while (!\u68C0\u6D4B\u51FD\u6570()) {
              if (\u53D6\u6D88\u51FD\u6570() || \u5DF2\u8D85\u65F6) {
                return false;
              }
              await sleep(10);
            }
            return true;
          } finally {
            \u8D85\u65F6\u8BA1\u65F6\u5668 && clearTimeout(\u8D85\u65F6\u8BA1\u65F6\u5668);
          }
        }
        const mod\u4FE1\u606F = {
          \u540D\u79F0: "SABCM",
          \u5B8C\u6574\u540D\u79F0: "Sakurua's Bondage club Mod",
          \u7248\u672C: "0.0.1",
          \u50A8\u5B58\u5E93: "",
          MOD\u6807\u9898: "Sakurua\u7684bcMOD"
        };
        let mod = null;
        if (!window.SABCM_\u7248\u672C) {
          mod = bcModSdk.registerMod({
            name: mod\u4FE1\u606F.\u540D\u79F0,
            fullName: mod\u4FE1\u606F.\u5B8C\u6574\u540D\u79F0,
            version: mod\u4FE1\u606F.\u7248\u672C,
            repository: mod\u4FE1\u606F.\u50A8\u5B58\u5E93
          });
        }
        ;
        async function \u7ED8\u5236\u8BBE\u7F6E\u754C\u9762(\u8180\u80F1\u8BBE\u7F6E2) {
          await \u7B49\u5F85(() => !!PreferenceSubscreenList);
          PreferenceRegisterExtensionSetting({
            Identifier: mod\u4FE1\u606F.\u540D\u79F0,
            ButtonText: "SABCM \u8BBE\u7F6E",
            Image: "",
            load: \u8BBE\u7F6E\u754C\u9762\u521D\u59CB\u5316,
            click: \u8BBE\u7F6E\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406,
            run: \u8BBE\u7F6E\u754C\u9762\u5143\u7D20\u6E32\u67D3,
            exit: \u8BBE\u7F6E\u754C\u9762\u9000\u51FA\u5904\u7406
          });
          function \u8BBE\u7F6E\u754C\u9762\u521D\u59CB\u5316() {
          }
          function \u8BBE\u7F6E\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406() {
            if (MouseIn(1815, 75, 90, 90)) {
              \u9000\u51FA\u8BBE\u7F6E\u754C\u9762();
            }
          }
          function \u8BBE\u7F6E\u754C\u9762\u5143\u7D20\u6E32\u67D3() {
            DrawCharacter(Player, 50, 50, 0.9);
            DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
            DrawText(mod\u4FE1\u606F.MOD\u6807\u9898 + mod\u4FE1\u606F.\u7248\u672C, 1e3, 130, "Black");
            \u8180\u80F1\u8BBE\u7F6E2.\u6E32\u67D3\u8BBE\u7F6E();
          }
          function \u8BBE\u7F6E\u754C\u9762\u9000\u51FA\u5904\u7406() {
          }
          function \u9000\u51FA\u8BBE\u7F6E\u754C\u9762() {
            if (!DEBUG) {
              ServerPlayerExtensionSettingsSync("SABCM");
            }
            PreferenceSubscreenExtensionsClear();
          }
        }
        \u521D\u59CB\u5316().catch((error) => {
          console.log(error);
        });
        const \u6A21\u7EC4\u9ED8\u8BA4\u8BBE\u7F6E = {};
        let \u6A21\u7EC4\u8BBE\u7F6E = {
          \u7CFB\u7EDF\u8BBE\u7F6E: { ...\u6A21\u7EC4\u9ED8\u8BA4\u8BBE\u7F6E },
          \u8180\u80F1: { ...\u8180\u80F1\u8BBE\u7F6E }
        };
        function \u521D\u59CB\u5316\u6A21\u7EC4\u8BBE\u7F6E() {
          if (!DEBUG) {
            if (!Player.ExtensionSettings.SABCM) {
              Player.ExtensionSettings.SABCM = \u6A21\u7EC4\u8BBE\u7F6E;
            }
          } else {
            Player.ExtensionSettings.SABCM = \u6A21\u7EC4\u8BBE\u7F6E;
          }
        }
        async function \u521D\u59CB\u5316() {
          await \u7B49\u5F85(() => ServerIsConnected && ServerSocket, { \u8D85\u65F6\u65F6\u95F4: -1 });
          await \u7B49\u5F85(() => !!!!Player?.AccountName, { \u8D85\u65F6\u65F6\u95F4: -1 });
          if (!window.SABCM_\u7248\u672C) {
            \u521D\u59CB\u5316\u6A21\u7EC4\u8BBE\u7F6E();
            let \u73A9\u5BB6\u8180\u80F1 = new \u8180\u80F1\u7C7B(Player.ExtensionSettings.SABCM.\u8180\u80F1);
            \u7ED8\u5236\u8BBE\u7F6E\u754C\u9762(\u73A9\u5BB6\u8180\u80F1);
            console.log("SABCM " + mod\u4FE1\u606F.\u540D\u79F0 + " \u5DF2\u52A0\u8F7D\uFF01");
            Player.SABCM_\u7248\u672C = mod\u4FE1\u606F.\u7248\u672C;
          } else {
            console.log("SABCM  \u5DF2\u52A0\u8F7D\uFF01");
          }
        }
      })();
    }
  });
  require_sabcm();
})();
