// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-04-10
// @description  try to take over the world!
// @author       You
// @match        https://www.bondageprojects.elementfx.com/R114/BondageClub/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elementfx.com
// @grant        none
// ==/UserScript==
window.SABCM = {DEBUG:true};
import {系统设置ui属性,系统设置,系统设置类} from './系统设置';
import {膀胱系统ui属性,膀胱设置,膀胱类} from "./膀胱";

(function() {
    'use strict';

    // Bondage Club Mod Development Kit (1.2.0)
    // For more info see: https://github.com/Jomshir98/bondage-club-mod-sdk
    /** @type {ModSDKGlobalAPI} */
    var bcModSdk = function() {
        "use strict";
        const o = "1.2.0";

        function e(o) {
            alert("Mod ERROR:\n" + o);
            const e = new Error(o);
            throw console.error(e), e
        }
        const t = new TextEncoder;

        function n(o) {
            return !!o && "object" == typeof o && !Array.isArray(o)
        }

        function r(o) {
            const e = new Set;
            return o.filter((o => !e.has(o) && e.add(o)))
        }
        const i = new Map,
            a = new Set;

        function c(o) {
            a.has(o) || (a.add(o), console.warn(o))
        }

        function s(o) {
            const e = [],
                t = new Map,
                n = new Set;
            for (const r of f.values()) {
                const i = r.patching.get(o.name);
                if (i) {
                    e.push(...i.hooks);
                    for (const [e, a] of i.patches.entries()) t.has(e) && t.get(e) !== a && c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${a}`), t.set(e, a), n.add(r.name)
                }
            }
            e.sort(((o, e) => e.priority - o.priority));
            const r = function(o, e) {
                if (0 === e.size) return o;
                let t = o.toString().replaceAll("\r\n", "\n");
                for (const [n, r] of e.entries()) t.includes(n) || c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`), t = t.replaceAll(n, r);
                return (0, eval)(`(${t})`)
            }(o.original, t);
            let i = function(e) {
                var t, i;
                const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, o.name, n),
                    c = r.apply(this, e);
                return null == a || a(), c
            };
            for (let t = e.length - 1; t >= 0; t--) {
                const n = e[t],
                    r = i;
                i = function(e) {
                    var t, i;
                    const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, o.name, n.mod),
                        c = n.hook.apply(this, [e, o => {
                            if (1 !== arguments.length || !Array.isArray(e)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`);
                            return r.call(this, o)
                        }]);
                    return null == a || a(), c
                }
            }
            return {
                hooks: e,
                patches: t,
                patchesSources: n,
                enter: i,
                final: r
            }
        }

        function l(o, e = !1) {
            let r = i.get(o);
            if (r) e && (r.precomputed = s(r));
            else {
                let e = window;
                const a = o.split(".");
                for (let t = 0; t < a.length - 1; t++)
                    if (e = e[a[t]], !n(e)) throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);
                const c = e[a[a.length - 1]];
                if ("function" != typeof c) throw new Error(`ModSDK: Function ${o} to be patched not found`);
                const l = function(o) {
                        let e = -1;
                        for (const n of t.encode(o)) {
                            let o = 255 & (e ^ n);
                            for (let e = 0; e < 8; e++) o = 1 & o ? -306674912 ^ o >>> 1 : o >>> 1;
                            e = e >>> 8 ^ o
                        }
                        return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase()
                    }(c.toString().replaceAll("\r\n", "\n")),
                    d = {
                        name: o,
                        original: c,
                        originalHash: l
                    };
                r = Object.assign(Object.assign({}, d), {
                    precomputed: s(d),
                    router: () => {},
                    context: e,
                    contextProperty: a[a.length - 1]
                }), r.router = function(o) {
                    return function(...e) {
                        return o.precomputed.enter.apply(this, [e])
                    }
                }(r), i.set(o, r), e[r.contextProperty] = r.router
            }
            return r
        }

        function d() {
            for (const o of i.values()) o.precomputed = s(o)
        }

        function p() {
            const o = new Map;
            for (const [e, t] of i) o.set(e, {
                name: e,
                original: t.original,
                originalHash: t.originalHash,
                sdkEntrypoint: t.router,
                currentEntrypoint: t.context[t.contextProperty],
                hookedByMods: r(t.precomputed.hooks.map((o => o.mod))),
                patchedByMods: Array.from(t.precomputed.patchesSources)
            });
            return o
        }
        const f = new Map;

        function u(o) {
            f.get(o.name) !== o && e(`Failed to unload mod '${o.name}': Not registered`), f.delete(o.name), o.loaded = !1, d()
        }

        function g(o, t) {
            o && "object" == typeof o || e("Failed to register mod: Expected info object, got " + typeof o), "string" == typeof o.name && o.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o.name);
            let r = `'${o.name}'`;
            "string" == typeof o.fullName && o.fullName || e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`), r = `'${o.fullName} (${o.name})'`, "string" != typeof o.version && e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`), o.repository || (o.repository = void 0), void 0 !== o.repository && "string" != typeof o.repository && e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`), null == t && (t = {}), t && "object" == typeof t || e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`);
            const i = !0 === t.allowReplace,
                a = f.get(o.name);
            a && (a.allowReplace && i || e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(a));
            const c = o => {
                    let e = g.patching.get(o.name);
                    return e || (e = {
                        hooks: [],
                        patches: new Map
                    }, g.patching.set(o.name, e)), e
                },
                s = (o, t) => (...n) => {
                    var i, a;
                    const c = null === (a = (i = m.errorReporterHooks).apiEndpointEnter) || void 0 === a ? void 0 : a.call(i, o, g.name);
                    g.loaded || e(`Mod ${r} attempted to call SDK function after being unloaded`);
                    const s = t(...n);
                    return null == c || c(), s
                },
                p = {
                    unload: s("unload", (() => u(g))),
                    hookFunction: s("hookFunction", ((o, t, n) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const i = l(o),
                            a = c(i);
                        "number" != typeof t && e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`), "function" != typeof n && e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`);
                        const s = {
                            mod: g.name,
                            priority: t,
                            hook: n
                        };
                        return a.hooks.push(s), d(), () => {
                            const o = a.hooks.indexOf(s);
                            o >= 0 && (a.hooks.splice(o, 1), d())
                        }
                    })),
                    patchFunction: s("patchFunction", ((o, t) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const i = l(o),
                            a = c(i);
                        n(t) || e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`);
                        for (const [n, i] of Object.entries(t)) "string" == typeof i ? a.patches.set(n, i) : null === i ? a.patches.delete(n) : e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`);
                        d()
                    })),
                    removePatches: s("removePatches", (o => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const t = l(o);
                        c(t).patches.clear(), d()
                    })),
                    callOriginal: s("callOriginal", ((o, t, n) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`);
                        const i = l(o);
                        return Array.isArray(t) || e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`), i.original.apply(null != n ? n : globalThis, t)
                    })),
                    getOriginalHash: s("getOriginalHash", (o => {
                        "string" == typeof o && o || e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`);
                        return l(o).originalHash
                    }))
                },
                g = {
                    name: o.name,
                    fullName: o.fullName,
                    version: o.version,
                    repository: o.repository,
                    allowReplace: i,
                    api: p,
                    loaded: !0,
                    patching: new Map
                };
            return f.set(o.name, g), Object.freeze(p)
        }

        function h() {
            const o = [];
            for (const e of f.values()) o.push({
                name: e.name,
                fullName: e.fullName,
                version: e.version,
                repository: e.repository
            });
            return o
        }
        let m;
        const y = void 0 === window.bcModSdk ? window.bcModSdk = function() {
            const e = {
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
            return m = e, Object.freeze(e)
        }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk);
        return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = y), y
    }();

    // 辅助睡眠函数（需自行实现或使用第三方库）
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 异步等待条件满足（支持无限等待和取消功能）
     * @param {function} 检测函数 - 返回 true 时停止等待
     * @param {object} [配置选项] - 可选参数
     * @param {function} [配置选项.取消函数] - 返回 true 时中断等待
     * @param {number} [配置选项.超时时间] - 毫秒数（-1=无限等待，默认 5000ms）
     * @returns {Promise<boolean>} - true=条件满足，false=被取消/超时
     */
    async function 等待(检测函数, {
        取消函数 = () => false,
        超时时间 = 5000
    } = {}) {
        let 已超时 = false;
        let 超时计时器 = null;
    
        // 只有超时时间 >=0 时才启用超时检测
        if (超时时间 >= 0) {
        超时计时器 = setTimeout(() => {
            已超时 = true;
            console.error(`[异步等待] 超时！${超时时间}ms 后未满足条件：`, 检测函数.toString());
        }, 超时时间);
        }
    
        try {
        while (!检测函数()) {
            if (取消函数() || 已超时) {
            return false;
            }
            await sleep(10); // 10ms 检查间隔
        }
        return true;
        } finally {
        超时计时器 && clearTimeout(超时计时器); // 安全清理计时器
        }
    }

    // mod属性
    const mod信息 = {
        名称:"SABCM",
        完整名称:"Sakurua's Bondage club Mod",
        版本:"0.0.1",
        储存库:"",
        MOD标题:"Sakurua的bcMOD",
    };


    let mod = null;
    // 注册mod
    if (!window.SABCM_版本) {
        mod = bcModSdk.registerMod({
            name: mod信息.名称,
            fullName: mod信息.完整名称,
            version: mod信息.版本,
            repository: mod信息.储存库,
        });
    };


    // 控制帧更新是否同步设置
    let 同步设置 = true;


    // ui数据
    window.modui数据 = {
        系统设置:{...系统设置ui属性},
        膀胱:{...膀胱系统ui属性},
    };


    async function ui管理(ui数据, _系统设置, _膀胱,) {
        // 等待偏好系统加载
        await 等待(() => !!PreferenceSubscreenList);
        let 当前界面 = "主界面";

        // 绘制按钮
        PreferenceRegisterExtensionSetting({
            Identifier: mod信息.名称,
            ButtonText: "SABCM 设置",
            Image: "",
            load: 设置界面初始化,
            click: 设置界面交互逻辑处理,
            run: 设置界面元素渲染,
            exit: 设置界面退出处理,
        });

        function 设置界面初始化() {
            同步设置 = false;
            当前界面 = "主界面";
            _膀胱.初始化子界面();
        }

        function 设置界面交互逻辑处理() {
            switch (当前界面) {
                case "主界面":
                    // 退出按钮处理
                    if (MouseIn(1815, 75, 90, 90)) {
                        退出设置界面();
                    }

                    // 禁用更新按钮功能
                    if (MouseIn(1675, 75, 120, 90)) {
                        if (Player.ExtensionSettings.SABCM.系统设置.模组更新开关) {
                            Player.ExtensionSettings.SABCM.系统设置.模组更新开关 = false;
                        }
                        else {
                            Player.ExtensionSettings.SABCM.系统设置.模组更新开关 = true;
                        }
                    }

                    // 当点击主界面的系统设置时跳转到系统设置子设置界面
                    if (MouseIn(ui数据.系统设置.主界面设置按钮.设置按钮位置[0],
                                ui数据.系统设置.主界面设置按钮.设置按钮位置[1], 
                                ui数据.系统设置.主界面设置按钮.设置按钮大小[0],
                                ui数据.系统设置.主界面设置按钮.设置按钮大小[1],
                             )) {
                        // 设置界面标识符为膀胱子设置界面 
                        当前界面 = "系统设置子界面";
                    }

                    // 当点击主界面的膀胱设置按钮时跳转到膀胱子设置界面
                    if (MouseIn(ui数据.膀胱.主界面设置按钮.设置按钮位置[0],
                                ui数据.膀胱.主界面设置按钮.设置按钮位置[1], 
                                ui数据.膀胱.主界面设置按钮.设置按钮大小[0],
                                ui数据.膀胱.主界面设置按钮.设置按钮大小[1],
                            )) {
                        // 设置界面标识符为膀胱子设置界面 
                        当前界面 = "膀胱设置子界面";
                    }

                    break;

                case "系统设置子界面":
                    _系统设置.子界面交互逻辑处理(ui数据);

                    // 退出按钮处理
                    if (MouseIn(1815, 75, 90, 90)) {
                        _系统设置.退出子界面()
                        当前界面 = "主界面";
                    }
                    break;

                case "膀胱设置子界面":
                    _膀胱.子界面交互逻辑处理(ui数据);

                    // 退出按钮处理
                    if (MouseIn(1815, 75, 90, 90)) {
                        _膀胱.退出子界面();
                        当前界面 = "主界面";
                    }

                    break;
                default:
                    break;
            }
        }

        function 设置界面元素渲染() {
            switch (当前界面) {
                case "主界面":
                    // 渲染退出按钮
                    DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");

                    // 渲染禁用更新按钮
                    if (Player.ExtensionSettings.SABCM.系统设置.模组更新开关) {
                        DrawButton(1675, 75, 120, 90, "禁用模组功能更新", "White","");
                    }
                    else {
                        DrawButton(1675, 75, 120, 90, "启用模组功能更新", "Red","");
                    }

                    // 渲染标题
                    DrawText(mod信息.MOD标题 + mod信息.版本, 1000, 130, "Black");


                    // 开始渲染每个模块的按钮
                    _系统设置.渲染主按钮(ui数据); // 系统设置按钮
                    _膀胱.渲染主按钮(ui数据); // 膀胱设置按钮
                    break;

                case "系统设置子界面":
                    _系统设置.绘制子界面(ui数据);
                    break;

                case "膀胱设置子界面":
                    _膀胱.绘制子界面(ui数据);
                    break;

                default:
                    break;
            }
        }

        function 设置界面退出处理() {
            
        }

        function 退出设置界面() {
            // 保存设置界面所做修改，调试时不启用
            if (!window.SABCM.DEBUG) {
                ServerPlayerExtensionSettingsSync("SABCM");
            }

            // 关闭mod设置界面并返回扩展界面
            PreferenceSubscreenExtensionsClear();
            同步设置 = true;
        }
    }


    初始化().catch((error) => {
        console.log(error);
    });

    // 整个mod的所有设置变量
    window.默认模组设置 = {
        默认设置:{系统设置:{...系统设置},
                 膀胱:{...膀胱设置},},

        系统设置:{...系统设置},
        膀胱:{...膀胱设置},
    };


    // 如果没有mod设置则初始化默认设置
    function 初始化模组设置() {
        if (!window.SABCM.DEBUG) {
            if (!Player.ExtensionSettings.SABCM) {
                Player.ExtensionSettings.SABCM = 默认模组设置;
            }
        }
        else {
            Player.ExtensionSettings.SABCM = 默认模组设置;
        }
    }

    
    function 帧更新(玩家膀胱,) {
        // 离线更新实现
        let 上一次更新时间戳 = 0;
        if (Player.ExtensionSettings.SABCM.系统设置.离线更新状态) {
            if (Player.ExtensionSettings.SABCM.系统设置.模组上次更新时间 == 0){
                上一次更新时间戳 = Date.now();
            } else {
                上一次更新时间戳 = Player.ExtensionSettings.SABCM.系统设置.模组上次更新时间;
            }
        } else {
            Player.ExtensionSettings.SABCM.系统设置.模组上次更新时间 = 0;
        }

        // 帧更新实现
        mod.hookFunction("DrawProcess", 0, (args, next) => {
            // 当掉线或者关闭模组更新时时禁用更新
            if (Player.ExtensionSettings.SABCM.系统设置.模组更新开关){
                if (ServerIsConnected && ServerSocket) {
                    let 当前时间 = Date.now();
                    if (当前时间 - 上一次更新时间戳 >= Player.ExtensionSettings.SABCM.系统设置.模组更新频率) {
                        // 计算每次更新之间实际经过的间隔
                        let 更新间隔 = 0;
                        // 离线更新
                        if (Player.ExtensionSettings.SABCM.系统设置.离线更新状态) {
                            更新间隔 = 当前时间 - 上一次更新时间戳;
                            Player.ExtensionSettings.SABCM.系统设置.模组上次更新时间 = 上一次更新时间戳;
                        } else {
                            更新间隔 = Player.ExtensionSettings.SABCM.系统设置.模组更新频率;
                            Player.ExtensionSettings.SABCM.系统设置.模组上次更新时间 = 0;
                        }
                        // 更新时间戳来准备下一次更新
                        上一次更新时间戳 = 当前时间;
                        // 执行每帧逻辑
                        玩家膀胱.更新(更新间隔);

                        // 同步变量到服务器
                        if (!window.SABCM.DEBUG && 同步设置) {
                            ServerPlayerExtensionSettingsSync("SABCM");
                        }
                    }
                }
            }

            // 继续原函数
            return next(args);
        });
    }


    // 在登录时进行初始化，读取mod设置
    async function 初始化() {
        await 等待(() => ServerIsConnected && ServerSocket, {超时时间: -1});
        await 等待(() => !!!!Player?.AccountName, {超时时间: -1});
        if (!window.SABCM_版本) {
            初始化模组设置();
            
            let 玩家系统设置 = new 系统设置类(Player.ExtensionSettings.SABCM.系统设置, 默认模组设置);
            let 玩家膀胱 = new 膀胱类(Player.ExtensionSettings.SABCM.膀胱);

            // 初始化ui
            ui管理(modui数据,玩家系统设置,玩家膀胱);

            // 注册帧更新事件
            帧更新(玩家膀胱);

            console.log("SABCM " + mod信息.名称 + " 已加载！");
            Player.SABCM_版本 = mod信息.版本;
        } else {
            console.log("SABCM " + " 已加载！");
        }
    }


})();