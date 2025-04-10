(function () {
    'use strict';

    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    var bcmodsdk = {};

    (function (exports) {
        // Bondage Club Mod Development Kit (1.2.0)
        // For more info see: https://github.com/Jomshir98/bondage-club-mod-sdk
        /** @type {ModSDKGlobalAPI} */
        (function () {
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

            const i = new Map, a = new Set;

            function c(o) {
                a.has(o) || (a.add(o), console.warn(o));
            }

            function s(o) {
                const e = [], t = new Map, n = new Set;
                for (const r of f.values()) {
                    const i = r.patching.get(o.name);
                    if (i) {
                        e.push(...i.hooks);
                        for (const [e, a] of i.patches.entries()) t.has(e) && t.get(e) !== a && c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e) || ""}\nPatch2:\n${a}`), t.set(e, a), n.add(r.name);
                    }
                }
                e.sort(((o, e) => e.priority - o.priority));
                const r = function (o, e) {
                    if (0 === e.size) return o;
                    let t = o.toString().replaceAll("\r\n", "\n");
                    for (const [n, r] of e.entries()) t.includes(n) || c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`), t = t.replaceAll(n, r);
                    return (0, eval)(`(${t})`)
                }(o.original, t);
                let i = function (e) {
                    var t, i;
                    const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, o.name, n),
                        c = r.apply(this, e);
                    return null == a || a(), c
                };
                for (let t = e.length - 1; t >= 0; t--) {
                    const n = e[t], r = i;
                    i = function (e) {
                        var t, i;
                        const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, o.name, n.mod),
                            c = n.hook.apply(this, [e, o => {
                                if (1 !== arguments.length || !Array.isArray(e)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`);
                                return r.call(this, o)
                            }]);
                        return null == a || a(), c
                    };
                }
                return {hooks: e, patches: t, patchesSources: n, enter: i, final: r}
            }

            function l(o, e = !1) {
                let r = i.get(o);
                if (r) e && (r.precomputed = s(r)); else {
                    let e = window;
                    const a = o.split(".");
                    for (let t = 0; t < a.length - 1; t++) if (e = e[a[t]], !n(e)) throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`);
                    const c = e[a[a.length - 1]];
                    if ("function" != typeof c) throw new Error(`ModSDK: Function ${o} to be patched not found`);
                    const l = function (o) {
                        let e = -1;
                        for (const n of t.encode(o)) {
                            let o = 255 & (e ^ n);
                            for (let e = 0; e < 8; e++) o = 1 & o ? -306674912 ^ o >>> 1 : o >>> 1;
                            e = e >>> 8 ^ o;
                        }
                        return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase()
                    }(c.toString().replaceAll("\r\n", "\n")), d = {name: o, original: c, originalHash: l};
                    r = Object.assign(Object.assign({}, d), {
                        precomputed: s(d), router: () => {
                        }, context: e, contextProperty: a[a.length - 1]
                    }), r.router = function (o) {
                        return function (...e) {
                            return o.precomputed.enter.apply(this, [e])
                        }
                    }(r), i.set(o, r), e[r.contextProperty] = r.router;
                }
                return r
            }

            function d() {
                for (const o of i.values()) o.precomputed = s(o);
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
                f.get(o.name) !== o && e(`Failed to unload mod '${o.name}': Not registered`), f.delete(o.name), o.loaded = !1, d();
            }

            function g(o, t) {
                o && "object" == typeof o || e("Failed to register mod: Expected info object, got " + typeof o), "string" == typeof o.name && o.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o.name);
                let r = `'${o.name}'`;
                "string" == typeof o.fullName && o.fullName || e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`), r = `'${o.fullName} (${o.name})'`, "string" != typeof o.version && e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`), o.repository || (o.repository = void 0), void 0 !== o.repository && "string" != typeof o.repository && e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`), null == t && (t = {}), t && "object" == typeof t || e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`);
                const i = !0 === t.allowReplace, a = f.get(o.name);
                a && (a.allowReplace && i || e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(a));
                const c = o => {
                    let e = g.patching.get(o.name);
                    return e || (e = {hooks: [], patches: new Map}, g.patching.set(o.name, e)), e
                }, s = (o, t) => (...n) => {
                    var i, a;
                    const c = null === (a = (i = m.errorReporterHooks).apiEndpointEnter) || void 0 === a ? void 0 : a.call(i, o, g.name);
                    g.loaded || e(`Mod ${r} attempted to call SDK function after being unloaded`);
                    const s = t(...n);
                    return null == c || c(), s
                }, p = {
                    unload: s("unload", (() => u(g))), hookFunction: s("hookFunction", ((o, t, n) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const i = l(o), a = c(i);
                        "number" != typeof t && e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`), "function" != typeof n && e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`);
                        const s = {mod: g.name, priority: t, hook: n};
                        return a.hooks.push(s), d(), () => {
                            const o = a.hooks.indexOf(s);
                            o >= 0 && (a.hooks.splice(o, 1), d());
                        }
                    })), patchFunction: s("patchFunction", ((o, t) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const i = l(o), a = c(i);
                        n(t) || e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`);
                        for (const [n, i] of Object.entries(t)) "string" == typeof i ? a.patches.set(n, i) : null === i ? a.patches.delete(n) : e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`);
                        d();
                    })), removePatches: s("removePatches", (o => {
                        "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);
                        const t = l(o);
                        c(t).patches.clear(), d();
                    })), callOriginal: s("callOriginal", ((o, t, n) => {
                        "string" == typeof o && o || e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`);
                        const i = l(o);
                        return Array.isArray(t) || e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`), i.original.apply(null != n ? n : globalThis, t)
                    })), getOriginalHash: s("getOriginalHash", (o => {
                        "string" == typeof o && o || e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`);
                        return l(o).originalHash
                    }))
                }, g = {
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
            const y = void 0 === window.bcModSdk ? window.bcModSdk = function () {
                const e = {
                    version: o,
                    apiVersion: 1,
                    registerMod: g,
                    getModsInfo: h,
                    getPatchingInfo: p,
                    errorReporterHooks: Object.seal({apiEndpointEnter: null, hookEnter: null, hookChainExit: null})
                };
                return m = e, Object.freeze(e)
            }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk);
            return (Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = y), y
        })();
    }(bcmodsdk));

    var bcModSdk = /*@__PURE__*/getDefaultExportFromCjs(bcmodsdk);

    const constants = {
        //Mod infos
        MOD_NAME: "BCR",
        MOD_FULL_NAME: "Bondage Club Reply Extension",
        MOD_VERSION: "1.0.0",
        MOD_REPOSITORY: "",
        HIDDEN: "Hidden",
        CONTENT: "BCR_INIT",
        INIT_TYPE: "BCR_INIT_MESSAGE",
        INIT_REPLY_TYPE: "BCR_INIT_REPLY_MESSAGE",
        //ReplyContent.isReplyMessage
        IS_REPLY_MESSAGE: "isReplyMessage",
        InputChat_DIV_ID: "InputChat",
        //InputChat placeholder
        TALK_TO_EVERYONE_PLACEHOLDER: "Talk to everyone",
        //close button id
        CHAT_ROOM_REPLY_CLOSE: "chat-room-reply-close",
        //chat container class
        TEXT_AREA_CHAT_LOG: '#TextAreaChatLog',
        //last message div
        CHAT_MESSAGE_CHAT_LAST_OF_TYPE: ".ChatMessageChat:last-of-type"
    };

    let mod = null;
    // @ts-ignore
    if (!window.BCR_VERSION) {
        mod = bcModSdk.registerMod({
            name: constants.MOD_NAME,
            fullName: constants.MOD_FULL_NAME,
            version: constants.MOD_VERSION,
            repository: constants.MOD_REPOSITORY,
        });
    }

    var img$1 = "";

    let customFocusColor = {
        enable: (color) => {
            const chatroomBot = document.getElementById("chat-room-bot");
            if (chatroomBot) {
                chatroomBot.style.outline = "none";
                chatroomBot.style.border = `2px solid ${color}`;
                chatroomBot.style.boxShadow = "0 0 10px #719ECE";
            }
        },
        disable: () => {
            const chatroomBot = document.getElementById("chat-room-bot");
            if (chatroomBot) {
                chatroomBot.style.outline = "";
                chatroomBot.style.border = "";
                chatroomBot.style.boxShadow = "";
            }
        }
    };

    function loadCss() {
        chatReplyButtonCss();
        chatReplyBoxCss();
        chatReplyClose();
        chatReplyFlashCss();
    }

    function chatReplyButtonCss() {
        const style = document.createElement("style");
        style.innerHTML = `
    .ChatReplyButton {
        text-decoration: none;
        font-style: normal;
        cursor: pointer;
        font-size: smaller;
        visibility: hidden;
    }
    `;
        document.head.appendChild(style);
    }

    function chatReplyBoxCss() {
        const style = document.createElement("style");
        style.innerHTML =
            `
            :root {
                --reply-background-color: ${Player.ExtensionSettings.BCR.settings.replyBackgroundColor};
                --reply-text-color: ${Player.ExtensionSettings.BCR.settings.replyTextColor};
            }

            .ChatReplyBox {
                font-size: 0.8em;
                margin-top: 5px;
                background-color: var(--reply-background-color);
                color: var(--reply-text-color);
                padding: 5px;
                border-radius: 4px;
                position: relative;
                padding-left: 0.4em;
             }
        `;
        document.head.appendChild(style);
    }

    function chatReplyClose() {
        const style = document.createElement("style");
        style.innerHTML =
            `
            #chat-room-reply-close::before {
            background-image: url("${img$1}");
            mask-image: url("${img$1}");
            transition: filter 0.3s ease;
        }
        
            #chat-room-reply-close:hover::before {
            filter: brightness(0) saturate(100%) invert(42%) sepia(100%) saturate(2968%) hue-rotate(179deg) brightness(106%) contrast(101%);
        }
        
        `;
        document.head.appendChild(style);
    }

    function chatReplyFlashCss() {
        const style = document.createElement("style");
        style.innerHTML = `
        @keyframes flashBackground {
            0% { background-color: #ff9f9f; }
            25% { background-color: #ffcf9f; }
            50% { background-color: #9fff9f; }
            75% { background-color: #9fcfff; }
            100% { background-color: transparent; }
        }

        .flash-animation {
            animation: flashBackground 2s ease-in-out infinite;
        }
    `;
        document.head.appendChild(style);
    }

    function sleep(ms) {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }

    async function waitFor(func, cancelFunc = () => false) {
        while (!func()) {
            if (cancelFunc()) {
                return false;
            }
            // eslint-disable-next-line no-await-in-loop
            await sleep(10);
        }
        return true;
    }

    function initBCRMessage() {
        const bcrInitMessage = {
            Type: constants.HIDDEN,
            Content: constants.CONTENT,
            Sender: Player.MemberNumber,
            Dictionary: [
                {
                    message: {
                        type: constants.INIT_TYPE,
                        bcrVersion: constants.MOD_VERSION,
                        target: null,
                    },
                },
            ],
        };
        // @ts-ignore
        ServerSend("ChatRoomChat", bcrInitMessage);
    }

    function replyToInitBCRMessage(target) {
        const bcrReplyToInitMessage = {
            Type: constants.HIDDEN,
            Content: constants.CONTENT,
            Sender: Player.MemberNumber,
            Dictionary: [
                {
                    message: {
                        type: constants.INIT_REPLY_TYPE,
                        bcrVersion: constants.MOD_VERSION,
                        target: target,
                    },
                },
            ],
        };
        // @ts-ignore
        ServerSend("ChatRoomChat", bcrReplyToInitMessage);
    }

    const chatArrow = `M1513.827 1278.28c-96.772 0-182.634 43.765-241.415 111.531l-564.2-325.737c11.807-33.498 19.508-69.049 19.508-106.654 0-34.91-7.06-68.022-17.327-99.595l563.815-325.48c58.782 66.482 143.746 109.35 239.619 109.35 177.243 0 320.86-143.618 320.86-320.86 0-177.244-143.617-320.86-320.86-320.86-177.243 0-320.86 143.616-320.86 320.86 0 35.165 7.059 68.407 17.454 99.98l-563.686 325.48C587.953 679.554 502.86 636.56 406.86 636.56 229.617 636.56 86 780.177 86 957.42c0 177.243 143.617 320.86 320.86 320.86 93.434 0 176.601-40.428 235.254-104.215l567.537 327.662c-9.882 30.803-16.684 63.145-16.684 97.413 0 177.243 143.617 320.86 320.86 320.86 177.243 0 320.86-143.617 320.86-320.86 0-177.243-143.617-320.86-320.86-320.86`;

    function drawIcon(ctx, icon, x, y, width, height, baseSize, alpha, lineWidth, fillColor, strokeColor = "black") {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(x, y);
        ctx.scale(width / baseSize, height / baseSize);
        ctx.fillStyle = fillColor;
        if (strokeColor) {
            ctx.strokeStyle = strokeColor;
        }
        ctx.lineWidth = lineWidth;
        const p = new Path2D(icon);
        ctx.fill(p);
        if (strokeColor) {
            ctx.stroke(p);
        }
        ctx.restore();
    }

    function DrawTextWithRectangle(ctx, text, textSize, rectX, rectY, rectWidth, rectHeight, rectColor, textColor) {
        ctx.save();
        ctx.fillStyle = rectColor;
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
        ctx.font = `${textSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = textColor;
        ctx.fillText(text, rectX + rectWidth / 2, rectY + rectHeight / 2);
        ctx.restore();
    }

    let isReplyMode = false;
    let isWaitingForReply = false;
    let isWaitingForAddButton = false;

    function reply() {
        mod.hookFunction("ChatRoomCharacterViewDrawOverlay", 2, (args, next) => {
            next(args);
            const [C, CharX, CharY, Zoom] = args;
            if (C.BCR && ChatRoomHideIconState == 0) {
                drawIcon(MainCanvas, chatArrow, CharX + 330 * Zoom, CharY + 5, 15 * Zoom, 15 * Zoom, 700, 0.7, 4, "#f32a40");
                if (MouseHovering(CharX + 330 * Zoom, CharY + 10 * Zoom, 50 * Zoom, 50 * Zoom)) {
                    if (C.MemberNumber === 35982) {
                        DrawTextWithRectangle(MainCanvas, "Blue haired Mistress", 25 * Zoom, CharX + 150 * Zoom, CharY + 60 * Zoom, 250 * Zoom, 40 * Zoom, "Black", "White");
                    } else {
                        DrawTextWithRectangle(MainCanvas, C.BCR + " version", 25 * Zoom, CharX + 250 * Zoom, CharY + 60 * Zoom, 145 * Zoom, 40 * Zoom, "Black", "White");
                    }
                }
            }
        });
        mod.hookFunction("ChatRoomLoad", 2, (args, next) => {
            next(args);
            initBCRMessage();
        });
        mod.hookFunction("ChatRoomMessage", 1, (args, next) => {
            if (args[0] && args[0].Type && args[0].Type == "Chat") {
                let chatMessage = args[0];
                let replyMessageData = null;
                let bcrID = null;
                let repliedBcrID = null;
                // @ts-ignore
                if (chatMessage.Dictionary) {
                    chatMessage.Dictionary.find(obj => {
                        if (obj['uniqueBcrID']) {
                            bcrID = obj['uniqueBcrID'];
                        }
                        if (obj['repliedBcrID']) {
                            repliedBcrID = obj['repliedBcrID'];
                        }
                    });
                    replyMessageData = chatMessage.Dictionary.find(obj => {
                        if (obj[constants.IS_REPLY_MESSAGE] && obj[constants.IS_REPLY_MESSAGE] == true) {
                            return obj;
                        }
                        return false;
                    });
                }
                if (replyMessageData && replyMessageData.repliedMessage && replyMessageData.repliedMessageAuthor) {
                    isWaitingForReply = true;
                }
                if (chatMessage.Content && chatMessage.Sender) {
                    isWaitingForAddButton = true;
                }
                next(args);
                const chatContainer = document.querySelector(constants.TEXT_AREA_CHAT_LOG);
                let lastMessage = null;
                if (chatContainer) {
                    lastMessage = chatContainer.querySelector(constants.CHAT_MESSAGE_CHAT_LAST_OF_TYPE);
                }
                if (lastMessage && bcrID) {
                    lastMessage.setAttribute("bcrID", bcrID);
                }
                if (chatMessage.Content && chatMessage.Sender) {
                    addButtonToLastMessage(lastMessage, args[0].Content, args[0].Sender, bcrID);
                }
                if (chatMessage.Dictionary && replyMessageData && replyMessageData.repliedMessage && replyMessageData.repliedMessageAuthor) {
                    addReplyBoxToLastMessage(chatContainer, lastMessage, replyMessageData.repliedMessage, replyMessageData.repliedMessageAuthor, repliedBcrID);
                }
            } else {
                next(args);
                if (args[0]) {
                    if (args[0].Type === constants.HIDDEN && args[0].Content === constants.CONTENT) {
                        if (args[0].Dictionary[0].message.type == constants.INIT_TYPE && args[0].Sender != Player.MemberNumber) {
                            replyToInitBCRMessage(args[0].Sender);
                        }
                        const sender = Character.find((a) => a.MemberNumber === args[0].Sender);
                        if (sender && sender.ID != 0 && args[0].Dictionary[0].message.bcrVersion) {
                            // @ts-ignore
                            sender.BCR = args[0].Dictionary[0].message.bcrVersion;
                        }
                    }
                }
            }
        });
        mod.hookFunction("ServerSend", 1, (args, next) => {
            let replyMessageData = {
                isReplyMessage: isReplyMode,
                targetId: repliedMessageAuthorNumber,
                repliedMessage: repliedMessage,
                repliedMessageAuthor: repliedMessageAuthor,
                repliedBcrID: repliedBcrID,
                uniqueBcrID: Date.now()
            };
            if (args[1] && args[1]["Content"] && args[1]["Type"] == "Chat") {
                let dictionary = args[1]["Dictionary"];
                if (isReplyMode) {
                    if (dictionary) {
                        dictionary.push(replyMessageData);
                    }
                } else {
                    if (dictionary) {
                        dictionary.push({uniqueBcrID: Date.now()});
                    }
                }
                next(args);
                isReplyMode = false;
                customFocusColor.disable();
                const chatInput = document.getElementById(constants.InputChat_DIV_ID);
                if (chatInput) {
                    chatInput.placeholder = constants.TALK_TO_EVERYONE_PLACEHOLDER;
                }
                const closeButtonHtml = document.getElementById(constants.CHAT_ROOM_REPLY_CLOSE);
                if (closeButtonHtml) {
                    closeButtonHtml.remove();
                }
            } else {
                next(args);
            }
        });
        mod.hookFunction("ElementScrollToEnd", 1, async (args, next) => {
            if (isWaitingForReply) {
                await waitFor(() => !!addReplyBoxToLastMessage);
                next(args);
            }
            if (isWaitingForAddButton) {
                await waitFor(() => !!addButtonToLastMessage);
                isWaitingForAddButton = false;
                next(args);
            }
            next(args);
        });
    }

    let repliedMessage = "";
    let repliedMessageAuthor;
    let repliedMessageAuthorNumber;
    let repliedBcrID;

    function addButtonToLastMessage(lastMessage, messageText, messageSenderNumber, bcrID) {
        if (lastMessage) {
            const userNameDiv = lastMessage.querySelector('.ChatMessageName');
            const userName = userNameDiv.innerText;
            const span = document.createElement("span");
            span.classList.add("ChatReplyButton");
            lastMessage.onmouseenter = () => {
                span.style.visibility = "visible";
            };
            lastMessage.onmouseleave = () => {
                span.style.visibility = "hidden";
            };
            span.innerHTML = "&nbsp\u21a9\ufe0f";
            span.onclick = () => {
                {
                    const closeButtonHtml = document.getElementById(constants.CHAT_ROOM_REPLY_CLOSE);
                    repliedMessage = messageText;
                    repliedMessageAuthor = userName;
                    repliedMessageAuthorNumber = messageSenderNumber;
                    repliedBcrID = bcrID;
                    const chatInput = document.getElementById(constants.InputChat_DIV_ID);
                    //chatInput.value = `/reply ${sender} ${chatInput.value.replace(/\/reply\s*\d+ ?/u, "")}`;
                    isReplyMode = true;
                    let placeholderText = messageText;
                    if (messageText.length > 10) {
                        placeholderText = placeholderText.slice(0, 10) + "...";
                    }
                    chatInput.placeholder = "Reply to " + repliedMessageAuthor + ": " + placeholderText;
                    if (Player.ExtensionSettings.BCR.settings.enableCustomFocusColor) {
                        customFocusColor.enable(Player.ExtensionSettings.BCR.settings.customFocusColor);
                    }
                    chatInput.focus();
                    if (!closeButtonHtml) {
                        const closeButton = ElementButton.Create(constants.CHAT_ROOM_REPLY_CLOSE, () => {
                                isReplyMode = false;
                                if (Player.ExtensionSettings.BCR.settings.enableCustomFocusColor) {
                                    customFocusColor.disable();
                                }
                                chatInput.placeholder = constants.TALK_TO_EVERYONE_PLACEHOLDER;
                                repliedMessage = "";
                                repliedMessageAuthor = "";
                                repliedMessageAuthorNumber = null;
                                const closeButtonHtmlAfterClick = document.getElementById(constants.CHAT_ROOM_REPLY_CLOSE);
                                closeButtonHtmlAfterClick.remove();
                                collapseButton.setAttribute("aria-expanded", "false");
                                collapseButton.textContent = "<";
                            },
                            // @ts-ignore
                            {noStyling: true}, {button: {classList: ["chat-room-button"]}});
                        const buttonBox = document.getElementById("chat-room-buttons");
                        const collapseButton = document.getElementById("chat-room-buttons-collapse");
                        collapseButton.setAttribute("aria-expanded", "true");
                        collapseButton.textContent = ">";
                        buttonBox.appendChild(closeButton);
                    }
                }
            };
            lastMessage.appendChild(span);
        }
    }

    function addReplyBoxToLastMessage(chatContainer, lastMessage, messageText, messageSender, bcrID) {
        if (messageText && messageSender) {
            const replyDiv = ElementCreateDiv("replyMessageDiv" + new Date().getTime());
            let targetReplyBoxDiv = null;
            if (bcrID) {
                targetReplyBoxDiv = chatContainer.querySelector(`[bcrID="${bcrID}"]`);
                replyDiv.setAttribute("repliedBcrID", bcrID);
            }
            console.log(targetReplyBoxDiv);
            replyDiv.onclick = () => {
                if (chatContainer) {
                    if (targetReplyBoxDiv) {
                        chatContainer.scrollTo({
                            // @ts-ignore
                            top: targetReplyBoxDiv.offsetTop - chatContainer.offsetTop - 200,
                            behavior: 'smooth',
                        });
                        targetReplyBoxDiv.classList.add('flash-animation');
                        setTimeout(() => {
                            targetReplyBoxDiv.classList.remove('flash-animation');
                        }, 2000);
                    } else {
                        console.log("No ReplyBox with that bcrID!");
                    }
                }
            };
            const maxLength = 100;
            if (messageText.length >= maxLength) {
                messageText = messageText.slice(0, maxLength) + "...";
            }
            replyDiv.textContent = messageSender + ": " + messageText;
            replyDiv.classList.add("ChatReplyBox");
            if (lastMessage) {
                if (targetReplyBoxDiv) {
                    replyDiv.style.cursor = 'pointer';
                }
                chatContainer.insertBefore(replyDiv, lastMessage);
            }
            isWaitingForReply = false;
        }
    }

    const defaultSettings = {
        replyBackgroundColor: "#D3D3D3",
        replyTextColor: "#000000",
        enableCustomFocusColor: true,
        customFocusColor: "#FF0000"
    };
    let BCRPlayerInfos = {
        settings: {...defaultSettings},
    };

    function settings() {
        if (!Player.ExtensionSettings.BCR) {
            Player.ExtensionSettings.BCR = BCRPlayerInfos;
        }
        // @ts-ignore
        window.BCR_VERSION = constants.MOD_VERSION;
    }

    var img = "data:image/png;base64,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";

    async function settingsPage() {
        await waitFor(() => !!PreferenceSubscreenList);
        let hideBackGroundColorPicker = true;
        let hideTextColorPicker = true;
        let hideCustomFocusColorPicker = true;
        PreferenceRegisterExtensionSetting({
            Identifier: "BCR",
            ButtonText: "BCR Settings",
            Image: img,
            load: PreferenceSubScreenBCRSettingsLoad,
            click: PreferenceSubScreenBCRSettingsClick,
            run: PreferenceSubScreenBCRSettingsRun,
            exit: PreferenceSubScreenBCRSettingsExit,
        });

        function PreferenceSubScreenBCRSettingsLoad() {
            //ReplyBoxBackgroundColor Input Field
            ElementCreateInput("InputReplyBoxBackgroundColor", "text", Player.ExtensionSettings.BCR.settings.replyBackgroundColor);
            //ReplyTextColor Input Field
            ElementCreateInput("InputReplyTextColor", "text", Player.ExtensionSettings.BCR.settings.replyTextColor);
            //CustomFocusColor Input field
            ElementCreateInput("InputCustomFocusColor", "text", Player.ExtensionSettings.BCR.settings.customFocusColor);
            hideBackGroundColorPicker = true;
            hideTextColorPicker = true;
            hideCustomFocusColorPicker = true;
        }

        function PreferenceSubScreenBCRSettingsClick() {
            if (MouseIn(1815, 75, 90, 90)) { //Exit Icon Click
                PreferenceSubScreenBCRSettingsExit();
            }
            if (MouseIn(1350, 75, 400, 90)) { //Open Source
                window.open("https://github.com/SukiaDemon/reply-extension/tree/gh-pages", "_blank");
            }
            if (MouseIn(1140, 215, 65, 65)) { //ReplyBoxBackgroundColor Icon Click
                hideTextColorPicker = true;
                hideCustomFocusColorPicker = true;
                ColorPickerHide();
                hideBackGroundColorPicker = !hideBackGroundColorPicker;
            }
            if (MouseIn(1140, 315, 65, 65)) { //ReplyTextColor Icon Click
                hideBackGroundColorPicker = true;
                hideCustomFocusColorPicker = true;
                ColorPickerHide();
                hideTextColorPicker = !hideTextColorPicker;
            }
            if (MouseIn(1140, 515, 65, 65)) { //ReplyTextColor Icon Click
                hideBackGroundColorPicker = true;
                hideTextColorPicker = true;
                ColorPickerHide();
                hideCustomFocusColorPicker = !hideCustomFocusColorPicker;
            }
            if (MouseIn(600, 715, 400, 90)) {
                Player.ExtensionSettings.BCR.settings.enableCustomFocusColor = defaultSettings.enableCustomFocusColor;
                ElementValue("InputReplyBoxBackgroundColor", defaultSettings.replyBackgroundColor);
                ElementValue("InputReplyTextColor", defaultSettings.replyTextColor);
                ElementValue("InputCustomFocusColor", defaultSettings.customFocusColor);
            }
            if (MouseIn(1000, 415, 64, 64)) {
                Player.ExtensionSettings.BCR.settings.enableCustomFocusColor = !Player.ExtensionSettings.BCR.settings.enableCustomFocusColor;
            }
        }

        function PreferenceSubScreenBCRSettingsRun() {
            DrawCharacter(Player, 50, 50, 0.9);
            DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png"); //Exit Icon
            DrawText("BC Reply Extension " + constants.MOD_VERSION, 1000, 130, "Black");
            DrawButton(1350, 75, 400, 90, "Open Source", "White"); //Open Source
            DrawText("Reply box background color: ", 630, 250, "Black", "Gray"); //ReplyBoxBackgroundColor Label
            ElementPosition("InputReplyBoxBackgroundColor", 1000, 250, 250); //ReplyBoxBackgroundColor ColorPicker Position
            DrawButton(1140, 215, 65, 65, "", "White", "Icons/Color.png"); //ReplyBoxBackgroundColor Icon Position
            updateInputFieldTextColor("InputReplyBoxBackgroundColor");
            DrawText("Reply text color: ", 730, 350, "Black", "Gray"); //ReplyTextColor Label
            ElementPosition("InputReplyTextColor", 1000, 350, 250); //ReplyTextColor ColorPicker Position
            DrawButton(1140, 315, 65, 65, "", "White", "Icons/Color.png"); //ReplyTextColor Icon Position
            updateInputFieldTextColor("InputReplyTextColor");
            addCheckBox([1000, 415, 64, 64], "Enable custom focus color", Player.ExtensionSettings.BCR.settings.enableCustomFocusColor);
            DrawText("Custom chat focus color: ", 660, 550, "Black", "Gray"); //CustomFocusColor Label
            ElementPosition("InputCustomFocusColor", 1000, 550, 250); //CustomFocusColor ColorPicker Position
            DrawButton(1140, 515, 65, 65, "", "White", "Icons/Color.png"); //CustomFocusColor Icon Position
            updateInputFieldTextColor("InputCustomFocusColor");
            if (!hideBackGroundColorPicker) {
                ColorPickerDraw(1250, 185, 675, 800, document.getElementById("InputReplyBoxBackgroundColor"));
            }
            if (!hideTextColorPicker) {
                ColorPickerDraw(1250, 185, 675, 800, document.getElementById("InputReplyTextColor"));
            }
            if (!hideCustomFocusColorPicker) {
                ColorPickerDraw(1250, 185, 675, 800, document.getElementById("InputCustomFocusColor"));
            }
            DrawButton(600, 715, 400, 90, "Restore to default", "White"); //Restore to default
        }

        function PreferenceSubScreenBCRSettingsExit() {
            const ReplyBoxBackgroundColor = ElementValue("InputReplyBoxBackgroundColor");
            const ReplyTextColor = ElementValue("InputReplyTextColor");
            const customFocusColor$1 = ElementValue("InputCustomFocusColor");
            updateChatReplyBoxColors(ReplyBoxBackgroundColor, ReplyTextColor, customFocusColor$1);
            if (!Player.ExtensionSettings.BCR.settings.enableCustomFocusColor) {
                customFocusColor.disable();
            }
            ElementRemove("InputReplyBoxBackgroundColor");
            ElementRemove("InputReplyTextColor");
            ElementRemove("InputCustomFocusColor");
            ServerPlayerExtensionSettingsSync("BCR");
            PreferenceSubscreenExtensionsClear();
        }
    }

    function updateChatReplyBoxColors(newBackgroundColor, newTextColor, customFocusColor$1) {
        if (CommonIsColor(newBackgroundColor) && CommonIsColor(newTextColor) && CommonIsColor(customFocusColor$1)) {
            document.documentElement.style.setProperty('--reply-background-color', newBackgroundColor);
            Player.ExtensionSettings.BCR.settings.replyBackgroundColor = newBackgroundColor;
            document.documentElement.style.setProperty('--reply-text-color', newTextColor);
            Player.ExtensionSettings.BCR.settings.replyTextColor = newTextColor;
            if (Player.ExtensionSettings.BCR.settings.enableCustomFocusColor) {
                Player.ExtensionSettings.BCR.settings.customFocusColor = customFocusColor$1;
                if (isReplyMode) {
                    customFocusColor.enable(customFocusColor$1);
                }
            }
        }
    }

    function updateInputFieldTextColor(id) {
        let TextColorCSS = "";
        if (CommonIsColor(ElementValue(id)))
            TextColorCSS = ElementValue(id);
        else
            TextColorCSS = Player.LabelColor;
        document.getElementById(id).style.color = TextColorCSS;
        let TextColorHSV = ColorPickerCSSToHSV(TextColorCSS);
        if (TextColorHSV.V > 0.4) {
            document.getElementById(id).style.backgroundColor = "#111111";
        } else {
            document.getElementById(id).style.backgroundColor = "#FFFFFF";
        }
    }

    function addCheckBox(cords, label, enabled) {
        let checkImage = enabled ? "Icons/Checked.png" : "";
        DrawButton(...cords, "", "White", checkImage);
        DrawText(label, cords[0] - 250, cords[1] + 33, "Black", "Gray");
    }

    BCRStart().catch((error) => {
        console.log(error);
    });

    async function BCRStart() {
        // @ts-ignore
        await waitFor(() => ServerIsConnected && ServerSocket);
        await waitFor(() => !!!!Player?.AccountName);
        // @ts-ignore
        if (!window.BCR_VERSION) {
            settings();
            await settingsPage();
            loadCss();
            reply();
            console.log("BCR " + constants.MOD_VERSION + " loaded!");
            // @ts-ignore
            Player.BCR = conPstants.MOD_VERSION;
            initBCRMessage();
        } else {
            console.log("BCR is already loaded!");
        }
    }

})();