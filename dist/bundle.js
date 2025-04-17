(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // 功能基类.js
  var \u529F\u80FD\u57FA\u7C7B;
  var init__ = __esm({
    "\u529F\u80FD\u57FA\u7C7B.js"() {
      \u529F\u80FD\u57FA\u7C7B = class {
        \u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(\u6587\u672C, x, y, \u504F\u79FB\u91CF, \u9ED8\u8BA4\u989C\u8272, \u60AC\u505C\u989C\u8272, \u60AC\u505C\u6587\u672C) {
          this.\u6587\u672C\u5BBD\u5EA6 = document.getElementById("MainCanvas").getContext("2d").measureText(\u6587\u672C).width;
          if (true) {
            DrawRect(
              x * 0.7 + \u504F\u79FB\u91CF,
              y - 25,
              this.\u6587\u672C\u5BBD\u5EA6,
              50,
              "Blue"
            );
          }
          if (MouseIn(x * 0.7 + \u504F\u79FB\u91CF, y - 25, this.\u6587\u672C\u5BBD\u5EA6, 50)) {
            DrawText(
              \u6587\u672C,
              x,
              y,
              \u60AC\u505C\u989C\u8272
            );
            DrawTextWrap(
              \u60AC\u505C\u6587\u672C,
              1200,
              100,
              600,
              800,
              "Black",
              "White",
              10,
              23,
              "Top"
            );
          } else {
            DrawText(
              \u6587\u672C,
              x,
              y,
              \u9ED8\u8BA4\u989C\u8272
            );
          }
        }
      };
    }
  });

  // 系统设置.js
  var \u7CFB\u7EDF\u8BBE\u7F6Eui\u5C5E\u6027, \u7CFB\u7EDF\u8BBE\u7F6E, \u7CFB\u7EDF\u8BBE\u7F6E\u7C7B;
  var init__2 = __esm({
    "\u7CFB\u7EDF\u8BBE\u7F6E.js"() {
      init__();
      \u7CFB\u7EDF\u8BBE\u7F6Eui\u5C5E\u6027 = {
        // 在主设置界面的按钮属性
        \u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE: {
          \u6309\u94AE\u6587\u672C: "\u7CFB\u7EDF\u8BBE\u7F6E",
          \u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E: [500, 800],
          \u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F: [200, 80]
        },
        // 子界面设置文本
        \u5B50\u754C\u9762\u6807\u9898: "SABCM\u7CFB\u7EDF\u8BBE\u7F6E",
        \u5B50UI: {
          \u6A21\u7EC4\u66F4\u65B0\u9891\u7387: {
            \u8F93\u5165\u6846\u4E3B\u8BCD: "\u6A21\u7EC4\u66F4\u65B0\u9891\u7387\uFF08\u6BEB\u79D2\uFF09",
            \u8F93\u5165\u6846\u5C5E\u6027\u8BE6\u60C5: "\u63A7\u5236mod\u7684\u6240\u6709\u5185\u5BB9\u7684\u66F4\u65B0\uFF0C\u4E0A\u9650\uFF1A5000\u6BEB\u79D2\uFF0C\u4E0B\u9650\uFF1A0\u6BEB\u79D2\uFF0C\u4E3A0\u65F6\u4EE3\u8868\u6BCF\u4E00\u4E2A\u6E38\u620F\u5E27\u90FD\u66F4\u65B0\u4E00\u6B21\uFF0C\u4E0D\u5EFA\u8BAE\u592A\u4F4E",
            \u8F93\u5165\u6846\u6587\u672C\u4F4D\u7F6E\u5927\u5C0F: [600, 250],
            \u8F93\u5165\u6846\u80CC\u666F\u8272: "",
            \u8F93\u5165\u6846\u4F4D\u7F6E: [300, 250],
            \u8F93\u5165\u6846\u5927\u5C0F: [200, 70]
          },
          \u5F3A\u5236\u91CD\u7F6E: {
            \u6309\u94AE\u6587\u672C: "\u5F3A\u5236\u91CD\u7F6E",
            \u6309\u94AE\u4F4D\u7F6E: [200, 350],
            \u6309\u94AE\u5927\u5C0F: [200, 80],
            \u8F93\u5165\u6846\u4F4D\u7F6E: [120, 390],
            \u8F93\u5165\u6846\u5927\u5C0F: [120, 80],
            \u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E: [600, 390],
            \u6309\u94AE\u4E3B\u8BCD: "\uFF01\uFF01\uFF01\uFF01\u5F3A\u5236\u91CD\u7F6Emod",
            \u6309\u94AE\u8BE6\u7EC6: "\uFF01\uFF01\uFF01\uFF01\u8B66\u544A\uFF0C\u5F3A\u5236\u91CD\u7F6E\u4F1A\u4E22\u5931\u4E00\u5207mod\u6570\u636E\uFF0C\u8BF7\u5728\u6309\u94AE\u524D\u7684\u8F93\u5165\u6846\u5185\u8F93\u5165\u201CYES\u201D\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09\u6765\u786E\u8BA4\u4F7F\u7528\u6309\u94AE"
          },
          \u79BB\u7EBF\u66F4\u65B0: {
            \u590D\u9009\u6846\u4F4D\u7F6E: [200, 500],
            \u590D\u9009\u6846\u5927\u5C0F: [70, 70],
            \u63CF\u8FF0\u4F4D\u7F6E: [400, 535, 50],
            \u4E3B\u8BCD: "\u79BB\u7EBF\u66F4\u65B0",
            \u8BE6\u60C5: "\u52FE\u9009\u65F6\u542F\u52A8\u79BB\u7EBF\u66F4\u65B0,\u5C31\u7B97\u4E0B\u7EBFmod\u4E5F\u4F1A\u6839\u636E\u65F6\u95F4\u66F4\u65B0,\u786C\u6838\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u53D6\u6D88"
          }
        }
      };
      \u7CFB\u7EDF\u8BBE\u7F6E = {
        \u5B50\u754C\u9762\u9875\u7801: 0,
        \u6A21\u7EC4\u66F4\u65B0\u5F00\u5173: true,
        // 控制模组功能更新的开关
        \u6A21\u7EC4\u66F4\u65B0\u9891\u7387: 1e3,
        // 单位：（ms）
        \u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4: 0,
        // 模组上次执行更新逻辑的时间戳
        \u79BB\u7EBF\u66F4\u65B0\u72B6\u6001: true
        // 是否启用mod离线更新功能
      };
      \u7CFB\u7EDF\u8BBE\u7F6E\u7C7B = class extends \u529F\u80FD\u57FA\u7C7B {
        constructor(\u7CFB\u7EDF\u8BBE\u7F6E2, \u9ED8\u8BA4\u8BBE\u7F6E) {
          super();
          this.\u53C2\u6570 = \u7CFB\u7EDF\u8BBE\u7F6E2;
          this.\u9ED8\u8BA4\u53C2\u6570 = \u9ED8\u8BA4\u8BBE\u7F6E;
        }
        // 在主界面渲染按钮
        \u6E32\u67D3\u4E3B\u6309\u94AE(ui\u6570\u636E) {
          DrawButton(
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[1],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u6309\u94AE\u6587\u672C,
            "White",
            ""
          );
        }
        \u521D\u59CB\u5316\u5B50\u754C\u9762() {
          this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 = 0;
        }
        \u7ED8\u5236\u5B50\u754C\u9762(ui\u6570\u636E) {
          DrawText(ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50\u754C\u9762\u6807\u9898, 1e3, 130, "Black");
          DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
          switch (this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801) {
            case 0:
              ElementCreateInput("\u6A21\u7EC4\u66F4\u65B0\u9891\u7387\u8F93\u5165\u6846", "number", this.\u53C2\u6570.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387, 5e3);
              ElementPosition(
                "\u6A21\u7EC4\u66F4\u65B0\u9891\u7387\u8F93\u5165\u6846",
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u4E3B\u8BCD,
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u6587\u672C\u4F4D\u7F6E\u5927\u5C0F[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u6587\u672C\u4F4D\u7F6E\u5927\u5C0F[1],
                0,
                "Black",
                "Red",
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387.\u8F93\u5165\u6846\u5C5E\u6027\u8BE6\u60C5
              );
              ElementCreateInput("\u5F3A\u5236\u91CD\u7F6E\u786E\u8BA4\u6846", "string", "NO", "");
              ElementPosition(
                "\u5F3A\u5236\u91CD\u7F6E\u786E\u8BA4\u6846",
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              DrawButton(
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u6587\u672C,
                "White",
                ""
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u4E3B\u8BCD,
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E[1],
                0,
                "Black",
                "Red",
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u8BE6\u7EC6
              );
              DrawCheckbox(
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u5927\u5C0F[1],
                "",
                this.\u53C2\u6570.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u4E3B\u8BCD,
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u8BE6\u60C5
              );
              break;
            default:
              break;
          }
        }
        \u5B50\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406(ui\u6570\u636E) {
          if (MouseIn(
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u5F3A\u5236\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[1]
          )) {
            if (ElementValue("\u5F3A\u5236\u91CD\u7F6E\u786E\u8BA4\u6846") == "YES") {
              Player.ExtensionSettings.SABCM = this.\u9ED8\u8BA4\u53C2\u6570;
              console.log(Player.ExtensionSettings.SABCM);
              ServerPlayerExtensionSettingsSync("SABCM");
              this.\u6E05\u7406UI();
              PreferenceSubscreenExtensionsClear();
            }
          }
          if (MouseIn(
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u5927\u5C0F[0],
            ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50UI.\u79BB\u7EBF\u66F4\u65B0.\u590D\u9009\u6846\u5927\u5C0F[1]
          )) {
            if (this.\u53C2\u6570.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001) {
              this.\u53C2\u6570.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001 = false;
            } else {
              this.\u53C2\u6570.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001 = true;
            }
          }
        }
        \u6E05\u7406UI() {
          ElementRemove("\u6A21\u7EC4\u66F4\u65B0\u9891\u7387\u8F93\u5165\u6846");
          ElementRemove("\u5F3A\u5236\u91CD\u7F6E\u786E\u8BA4\u6846");
        }
        \u66F4\u65B0\u53C2\u6570() {
          this.\u53C2\u6570.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387 = Math.max(0, Math.min(ElementValue("\u6A21\u7EC4\u66F4\u65B0\u9891\u7387\u8F93\u5165\u6846"), 5e3));
        }
        \u9000\u51FA\u5B50\u754C\u9762() {
          this.\u66F4\u65B0\u53C2\u6570();
          this.\u6E05\u7406UI();
          Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E = this.\u53C2\u6570;
        }
      };
    }
  });

  // 膀胱.js
  var \u8180\u80F1\u7CFB\u7EDFui\u5C5E\u6027, \u8180\u80F1\u8BBE\u7F6E, \u8180\u80F1\u7C7B;
  var init__3 = __esm({
    "\u8180\u80F1.js"() {
      init__();
      \u8180\u80F1\u7CFB\u7EDFui\u5C5E\u6027 = {
        // 在主设置界面的按钮属性
        \u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE: {
          \u6309\u94AE\u6587\u672C: "\u8180\u80F1\u8BBE\u7F6E",
          \u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E: [500, 200],
          \u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F: [200, 80]
        },
        // 子界面设置文本
        \u5B50\u754C\u9762\u6807\u9898: "\u8180\u80F1\u8BBE\u7F6E",
        \u5B50UI: {
          \u603B\u5F00\u5173: {
            \u590D\u9009\u6846\u4F4D\u7F6E: [200, 200],
            \u590D\u9009\u6846\u5927\u5C0F: [70, 70],
            \u63CF\u8FF0\u4F4D\u7F6E: [400, 235],
            \u4E3B\u8BCD: "\u542F\u7528\u8180\u80F1\u529F\u80FD"
          },
          \u91CD\u7F6E: {
            \u6309\u94AE\u6587\u672C: "\u91CD\u7F6E",
            \u6309\u94AE\u4F4D\u7F6E: [200, 350],
            \u6309\u94AE\u5927\u5C0F: [200, 80],
            \u8F93\u5165\u6846\u4F4D\u7F6E: [120, 390],
            \u8F93\u5165\u6846\u5927\u5C0F: [120, 80],
            \u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E: [650, 390, -10],
            \u6309\u94AE\u4E3B\u8BCD: "\uFF01\uFF01\uFF01\uFF01\u91CD\u7F6E\u8180\u80F1\u8BBE\u7F6E",
            \u6309\u94AE\u8BE6\u7EC6: "\uFF01\uFF01\uFF01\uFF01\u8B66\u544A\uFF0C\u91CD\u7F6E\u4F1A\u6062\u590D\u8180\u80F1\u529F\u80FD\u7684\u6240\u6709\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\uFF0C\u8BF7\u5728\u6309\u94AE\u524D\u7684\u8F93\u5165\u6846\u5185\u8F93\u5165\u201CYES\u201D\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09\u6765\u786E\u8BA4\u4F7F\u7528\u6309\u94AE"
          },
          \u7FFB\u9875: {
            \u6309\u94AE\u4F4D\u7F6E: [1650, 75],
            \u6309\u94AE\u5927\u5C0F: [120, 90],
            \u6309\u94AE\u6587\u672C: "",
            \u6309\u94AE\u56FE\u7247: ""
          },
          \u8180\u80F1\u5927\u5C0F: {
            \u8F93\u5165\u6846\u4F4D\u7F6E: [300, 550],
            \u8F93\u5165\u6846\u5927\u5C0F: [200, 80],
            \u4E3B\u8BCD: "ml,\u66F4\u6539\u8180\u80F1\u5BB9\u79EF",
            \u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E: [600, 550, 60],
            \u8BE6\u60C5: "\u6700\u5927\u53EF\u5BB9\u7EB3\u7684\u5C3F\u6DB2\u4F53\u79EF\u4E0A\u9650,\u5355\u4F4Dml,10-10000"
          },
          \u5F53\u524D\u5C3F\u6DB2: {
            \u4F4D\u7F6E: [900, 235],
            // 未完成的动态颜色
            \u989C\u8272: [
              "#FFFFFF",
              // 0 - 白色（无紧急）
              "#FFF0F0",
              // 1 - 极浅粉（极低）
              "#FFD5D5",
              // 2 - 浅粉（轻微）
              "#FFB6B6",
              // 3 - 粉红（低）
              "#FF9999",
              // 4 - 中等粉（注意）
              "#FF7777",
              // 5 - 暖粉（中等）
              "#FF5555",
              // 6 - 浅红（较高）
              "#FF3333",
              // 7 - 亮红（高）
              "#FF0000",
              // 8 - 正红（紧急）
              "#CC0000"
              // 9 - 深红（最高紧急）
            ],
            \u6587\u672C: "\u5F53\u524D\u5C3F\u6DB2\u767E\u5206\u6BD4: "
          },
          \u5C3F\u6DB2\u589E\u957F: {
            \u8F93\u5165\u6846\u4F4D\u7F6E: [300, 650],
            \u8F93\u5165\u6846\u5927\u5C0F: [200, 80],
            \u4E3B\u8BCD: "ml.\u6BCF\u5206\u949F\u81EA\u7136\u4EA7\u751F\u7684\u5C3F\u6DB2",
            \u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E: [620, 650, -10],
            \u8BE6\u60C5: "\u6BCF\u5206\u949F\u81EA\u7136\u589E\u957F\u7684\u5C3F\u6DB2,\u5355\u4F4Dml,0.1-1000"
          },
          \u6F0F\u5C3F\u9608\u503C: {
            \u8F93\u5165\u6846\u4F4D\u7F6E: [300, 750],
            \u8F93\u5165\u6846\u5927\u5C0F: [200, 80],
            \u4E3B\u8BCD: "%.\u8D85\u8FC7\u6B64\u9608\u503C\u540E\u5C31\u4F1A\u968F\u673A\u6F0F\u5C3F",
            \u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E: [650, 750, -50],
            \u8BE6\u60C5: "\u5F53\u5C3F\u6DB2\u5360\u636E\u767E\u5206\u6BD4\u8D85\u8FC7\u8FD9\u4E2A\u8BBE\u7F6E\u503C\u540E,\u5C31\u548C\u5F00\u59CB\u6F0F\u5C3F\u5224\u65AD,5-95"
          },
          \u6F0F\u5C3F\u6982\u7387: {
            \u8F93\u5165\u6846\u4F4D\u7F6E: [300, 850],
            \u8F93\u5165\u6846\u5927\u5C0F: [200, 80],
            \u4E3B\u8BCD: "%.\u57FA\u7840\u6F0F\u5C3F\u6982\u7387",
            \u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E: [540, 850, 30],
            \u8BE6\u60C5: "\u6700\u4F4E\u4E3A1%, \u5F53\u5C3F\u6DB2\u8D85\u8FC7\u6F0F\u5C3F\u9608\u503C\u540E\u6BCF10\u79D2\u7684\u6F0F\u5C3F\u6982\u7387,\u968F\u7740\u8180\u80F1\u8D8A\u6765\u8D8A\u6EE1\u6EA2\u4F1A\u8D8A\u6765\u8D8A\u9AD8,\u6700\u7EC8\u4F1A100%\u6F0F\u5C3F,1-100"
          },
          \u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F: {
            \u6807\u9898\u6587\u672C: "----\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F----",
            \u6807\u9898\u6587\u672C\u4F4D\u7F6E: [300, 200],
            // 线性
            \u590D\u9009\u6846\u4F4D\u7F6E_1: [100, 250],
            \u590D\u9009\u6846\u5927\u5C0F_1: [70, 70],
            \u63CF\u8FF0\u4F4D\u7F6E_1: [230, 290, 30],
            \u4E3B\u8BCD_1: "\u7EBF\u6027",
            \u8BE6\u60C5_1: "\u6F0F\u5C3F\u6982\u7387\u548C\u5C3F\u6DB2\u4F53\u79EF\u62101:1\u6B63\u6BD4",
            // 指数
            \u590D\u9009\u6846\u4F4D\u7F6E_2: [300, 250],
            \u590D\u9009\u6846\u5927\u5C0F_2: [70, 70],
            \u63CF\u8FF0\u4F4D\u7F6E_2: [430, 290, 90],
            \u4E3B\u8BCD_2: "\u6307\u6570",
            \u8BE6\u60C5_2: "\u6F0F\u5C3F\u6982\u7387\u548C\u5C3F\u6DB2\u4F53\u79EF\u6210\u6307\u6570\u6BD4"
          }
        }
      };
      \u8180\u80F1\u8BBE\u7F6E = {
        // 子界面页码
        \u5B50\u754C\u9762\u9875\u7801: 0,
        \u5B50\u754C\u9762\u603B\u9875\u7801: 4,
        \u603B\u5F00\u5173: true,
        // 膀胱功能的总开关
        \u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u57FA\u51C6\u503C: 500,
        // 用于在损失中评估的基准值,仅用于计算当前玩家膀胱大小
        \u73A9\u5BB6\u8180\u80F1\u5927\u5C0F: 500,
        //  可容纳的最大尿液（ml）
        \u73A9\u5BB6\u8180\u80F1\u6700\u5927\u5927\u5C0F: 1e4,
        // 最大的膀胱大小
        \u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u635F\u5931\u503C: 0,
        // 因为某些状态损失的最大膀胱大小,例如特定物品（如紧身衣）：减少10%膀胱大小（物理压迫膀胱）。
        \u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF: 0,
        // 当期存在的尿液体积（ml）
        // 尿液增长相关
        \u5C3F\u6DB2\u589E\u957F\u901F\u7387: 1,
        // 每分钟自然增长的尿液（ml）
        \u5C3F\u6DB2\u589E\u957F\u968F\u673A\u503C: [0.5, 1.5],
        // 每次尿液增长时都需要进行的生成随机乘数,用于让尿急时间随机化
        \u603B\u500D\u7387: 1,
        // 尿液增长总倍率,
        \u98DF\u7269\u5C3F\u6DB2\u500D\u7387: 1.2,
        // 当吃下食物后的一段时间内尿液自然增长的倍率加成
        \u98DF\u7269\u5C3F\u6DB2\u500D\u7387\u65F6\u95F4: 30,
        // 当吃下食物后倍率加成多长时间（分钟）
        \u996E\u54C1\u5C3F\u6DB2\u500D\u7387: 2,
        // 当喝下饮品后的一段时间内尿液自然增长的倍率加成
        \u996E\u54C1\u5C3F\u6DB2\u500D\u7387\u65F6\u95F4: 15,
        // 当喝下饮品后倍率加成多长时间（分钟）
        // 漏尿相关
        \u6F0F\u5C3F\u9608\u503C: 80,
        // 当前尿液体积超过玩家膀胱大小的百分之多少时会进行漏尿判断,最高为95%
        \u6F0F\u5C3F\u57FA\u7840\u6982\u7387: 20,
        // 漏尿的基础概率
        \u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u7EBF\u6027: false,
        // 漏尿概率增长方式线性
        \u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u6307\u6570: true,
        // 漏尿概率增长方式线性
        \u6F0F\u5C3F\u6982\u7387: 20,
        // 超过阈值后,每10秒的漏尿的概率,随着膀胱越来越满溢会越来越高,最终会100%漏尿
        \u6F0F\u5C3F\u68C0\u67E5\u95F4\u9694: 1e4,
        // 10秒
        \u6F0F\u5C3F\u4E0A\u6B21\u68C0\u67E5\u65F6\u95F4: 0,
        \u6F0F\u5C3F\u91CF\u6700\u5C0F: 10,
        \u6F0F\u5C3F\u91CF\u6700\u5927: 20
      };
      \u8180\u80F1\u7C7B = class extends \u529F\u80FD\u57FA\u7C7B {
        constructor(\u8180\u80F1\u8BBE\u7F6E2) {
          super();
          this.\u53C2\u6570 = \u8180\u80F1\u8BBE\u7F6E2;
        }
        // 在主界面渲染按钮
        \u6E32\u67D3\u4E3B\u6309\u94AE(ui\u6570\u636E) {
          DrawButton(
            ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[0],
            ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[1],
            ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u6309\u94AE\u6587\u672C,
            "White",
            ""
          );
        }
        \u521D\u59CB\u5316\u5B50\u754C\u9762() {
          this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 = 0;
        }
        \u7ED8\u5236\u5B50\u754C\u9762(ui\u6570\u636E) {
          DrawText(ui\u6570\u636E.\u8180\u80F1.\u5B50\u754C\u9762\u6807\u9898, 1e3, 130, "Black");
          DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
          DrawBackNextButton(
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[0],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[1],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u6587\u672C,
            "White",
            "",
            function() {
              return "";
            },
            function() {
              return "";
            },
            false
          );
          switch (this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801) {
            case 0:
              let \u5C3F\u6DB2\u5C55\u793A = function(ui, \u53C2\u6570) {
                let \u5C3F\u6DB2\u767E\u5206\u6BD4 = \u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF / \u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F * 100;
                DrawText(
                  ui.\u8180\u80F1.\u5B50UI.\u5F53\u524D\u5C3F\u6DB2.\u6587\u672C + \u5C3F\u6DB2\u767E\u5206\u6BD4.toFixed(2).toString() + "%",
                  ui.\u8180\u80F1.\u5B50UI.\u5F53\u524D\u5C3F\u6DB2.\u4F4D\u7F6E[0],
                  ui.\u8180\u80F1.\u5B50UI.\u5F53\u524D\u5C3F\u6DB2.\u4F4D\u7F6E[1],
                  "Black"
                );
              };
              \u5C3F\u6DB2\u5C55\u793A(ui\u6570\u636E, this.\u53C2\u6570);
              break;
            case 1:
              DrawCheckbox(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u5927\u5C0F[1],
                "",
                this.\u53C2\u6570.\u603B\u5F00\u5173
              );
              DrawText(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u63CF\u8FF0\u4F4D\u7F6E[1],
                "Black"
              );
              ElementCreateInput("\u8180\u80F1\u91CD\u7F6E\u786E\u8BA4\u6846", "string", "NO", "");
              ElementPosition(
                "\u8180\u80F1\u91CD\u7F6E\u786E\u8BA4\u6846",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              DrawButton(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u6587\u672C,
                "White",
                ""
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u8BE6\u7EC6
              );
              ElementCreateInput("\u8180\u80F1\u4F53\u79EF", "number", this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F, 1e4);
              ElementPosition(
                "\u8180\u80F1\u4F53\u79EF",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u8180\u80F1\u5927\u5C0F.\u8BE6\u60C5
              );
              ElementCreateInput("\u5C3F\u6DB2\u589E\u957F", "number", this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u901F\u7387);
              ElementPosition(
                "\u5C3F\u6DB2\u589E\u957F",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u5C3F\u6DB2\u589E\u957F.\u8BE6\u60C5
              );
              ElementCreateInput("\u6F0F\u5C3F\u9608\u503C", "number", this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C);
              ElementPosition(
                "\u6F0F\u5C3F\u9608\u503C",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u9608\u503C.\u8BE6\u60C5
              );
              ElementCreateInput("\u6F0F\u5C3F\u6982\u7387", "number", this.\u53C2\u6570.\u6F0F\u5C3F\u57FA\u7840\u6982\u7387);
              ElementPosition(
                "\u6F0F\u5C3F\u6982\u7387",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u5927\u5C0F[1]
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u4E3B\u8BCD,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8F93\u5165\u6846\u63CF\u8FF0\u4F4D\u7F6E[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387.\u8BE6\u60C5
              );
              break;
            case 2:
              DrawText(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u6807\u9898\u6587\u672C,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u6807\u9898\u6587\u672C\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u6807\u9898\u6587\u672C\u4F4D\u7F6E[1],
                "Black"
              );
              DrawCheckbox(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_1[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_1[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_1[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_1[1],
                "",
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u7EBF\u6027
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u4E3B\u8BCD_1,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_1[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_1[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_1[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u8BE6\u60C5_1
              );
              DrawCheckbox(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_2[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_2[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_2[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_2[1],
                "",
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u6307\u6570
              );
              this.\u7ED8\u5236\u5E26\u63D0\u793A\u6587\u5B57(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u4E3B\u8BCD_2,
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_2[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_2[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u63CF\u8FF0\u4F4D\u7F6E_2[2],
                "Black",
                "Red",
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u8BE6\u60C5_2
              );
              break;
            default:
              break;
          }
        }
        \u5B50\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406(ui\u6570\u636E) {
          if (MouseIn(
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[0],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[1],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[0],
            ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[1]
          )) {
            this.\u6E05\u7406UI();
            if (MouseIn(
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[0] + ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[0] / 2,
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[1],
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[0] / 2,
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[1]
            )) {
              if (this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 + 1 <= this.\u53C2\u6570.\u5B50\u754C\u9762\u603B\u9875\u7801) {
                this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 += 1;
              }
            }
            if (MouseIn(
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[0],
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u4F4D\u7F6E[1],
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[0] / 2,
              ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u7FFB\u9875.\u6309\u94AE\u5927\u5C0F[1]
            )) {
              if (this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 - 1 >= 0) {
                this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801 -= 1;
              }
            }
          }
          switch (this.\u53C2\u6570.\u5B50\u754C\u9762\u9875\u7801) {
            case 1:
              if (MouseIn(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u603B\u5F00\u5173.\u590D\u9009\u6846\u5927\u5C0F[1]
              )) {
                if (this.\u53C2\u6570.\u603B\u5F00\u5173) {
                  this.\u53C2\u6570.\u603B\u5F00\u5173 = false;
                } else {
                  this.\u53C2\u6570.\u603B\u5F00\u5173 = true;
                }
              }
              if (MouseIn(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u4F4D\u7F6E[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u5927\u5C0F[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u91CD\u7F6E.\u6309\u94AE\u6587\u672C
              )) {
                if (ElementValue("\u8180\u80F1\u91CD\u7F6E\u786E\u8BA4\u6846") == "YES") {
                  Player.ExtensionSettings.SABCM.\u8180\u80F1 = \u9ED8\u8BA4\u6A21\u7EC4\u8BBE\u7F6E.\u8180\u80F1;
                  console.log(Player.ExtensionSettings.SABCM.\u8180\u80F1);
                  ServerPlayerExtensionSettingsSync("SABCM");
                  this.\u6E05\u7406UI();
                  PreferenceSubscreenExtensionsClear();
                }
              }
              break;
            case 2:
              if (MouseIn(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_1[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_1[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_1[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_1[1]
              )) {
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u7EBF\u6027 = true;
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u6307\u6570 = false;
              }
              if (MouseIn(
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_2[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u4F4D\u7F6E_2[1],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_2[0],
                ui\u6570\u636E.\u8180\u80F1.\u5B50UI.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97\u65B9\u5F0F.\u590D\u9009\u6846\u5927\u5C0F_2[1]
              )) {
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u7EBF\u6027 = false;
                this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u6307\u6570 = true;
              }
              break;
            default:
              break;
          }
        }
        \u6E05\u7406UI() {
          ElementRemove("\u8180\u80F1\u91CD\u7F6E\u786E\u8BA4\u6846");
          ElementRemove("\u8180\u80F1\u4F53\u79EF");
          ElementRemove("\u5C3F\u6DB2\u589E\u957F");
          ElementRemove("\u6F0F\u5C3F\u9608\u503C");
          ElementRemove("\u6F0F\u5C3F\u6982\u7387");
        }
        \u66F4\u65B0\u53C2\u6570() {
          this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u57FA\u51C6\u503C = Math.max(10, Math.min(ElementValue("\u8180\u80F1\u4F53\u79EF"), this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u6700\u5927\u5927\u5C0F));
          this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u901F\u7387 = Math.max(0.1, Math.min(parseFloat(ElementValue("\u5C3F\u6DB2\u589E\u957F")) || 0.5, 1e3));
          this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C = Math.max(50, Math.min(parseFloat(ElementValue("\u6F0F\u5C3F\u9608\u503C")) || 5, 95));
          this.\u53C2\u6570.\u6F0F\u5C3F\u57FA\u7840\u6982\u7387 = Math.max(1, Math.min(parseFloat(ElementValue("\u6F0F\u5C3F\u6982\u7387")) || 1, 100));
        }
        \u9000\u51FA\u5B50\u754C\u9762() {
          this.\u66F4\u65B0\u53C2\u6570();
          this.\u6E05\u7406UI();
          Player.ExtensionSettings.SABCM.\u8180\u80F1 = this.\u53C2\u6570;
        }
        \u66F4\u65B0(\u7ECF\u8FC7\u65F6\u95F4) {
          if (this.\u53C2\u6570.\u603B\u5F00\u5173) {
            this.\u8180\u80F1\u5927\u5C0F\u66F4\u65B0();
            this.\u5C3F\u6DB2\u66F4\u65B0(\u7ECF\u8FC7\u65F6\u95F4);
            this.\u6F0F\u5C3F\u6982\u7387\u66F4\u65B0();
            this.\u6F0F\u5C3F();
            Player.ExtensionSettings.SABCM.\u8180\u80F1 = this.\u53C2\u6570;
            console.log("\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF\uFF1A" + String(this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF));
          }
        }
        // 功能函数
        // 获取当前尿液的百分比
        \u83B7\u53D6\u5C3F\u6DB2\u767E\u5206\u6BD4() {
          let \u767E\u5206\u6BD4 = this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF / this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F * 100;
          return \u767E\u5206\u6BD4;
        }
        // 更新膀胱大小,用于监控是否因为某些条件改变了膀胱大小
        \u8180\u80F1\u5927\u5C0F\u66F4\u65B0() {
          this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F = this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u57FA\u51C6\u503C - this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u57FA\u51C6\u503C * this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F\u635F\u5931\u503C;
        }
        // 更新尿液
        \u5C3F\u6DB2\u66F4\u65B0(\u65F6\u95F4) {
          let \u968F\u673A\u91CF = Math.floor(Math.random() * (this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u968F\u673A\u503C[1] - this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u968F\u673A\u503C[0] + 1)) + this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u968F\u673A\u503C[0];
          let \u5C3F\u6DB2\u751F\u6210\u91CF = \u65F6\u95F4 * (this.\u53C2\u6570.\u5C3F\u6DB2\u589E\u957F\u901F\u7387 / (60 * 1e3)) * \u968F\u673A\u91CF * this.\u53C2\u6570.\u603B\u500D\u7387;
          if (this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF + \u5C3F\u6DB2\u751F\u6210\u91CF > this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F) {
            this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF = this.\u53C2\u6570.\u73A9\u5BB6\u8180\u80F1\u5927\u5C0F;
          } else {
            this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF += \u5C3F\u6DB2\u751F\u6210\u91CF;
          }
        }
        \u6F0F\u5C3F\u6982\u7387\u66F4\u65B0() {
          let \u767E\u5206\u6BD4 = this.\u83B7\u53D6\u5C3F\u6DB2\u767E\u5206\u6BD4();
          let \u6982\u7387 = this.\u53C2\u6570.\u6F0F\u5C3F\u57FA\u7840\u6982\u7387 / 100;
          if (\u767E\u5206\u6BD4 >= this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C) {
            if (this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u7EBF\u6027) {
              \u6982\u7387 = 0.01 + (\u767E\u5206\u6BD4 - this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C) / (100 - this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C) * 0.99;
            } else if (this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387\u8BA1\u7B97_\u6307\u6570) {
              \u6982\u7387 = 0.01 + Math.pow((\u767E\u5206\u6BD4 - this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C) / (100 - this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C), 2) * 0.99;
            }
          } else {
            \u6982\u7387 = 0;
          }
          this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387 = Math.min(Math.max(\u6982\u7387 * 100, 1), 100);
          console.log(this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387);
        }
        \u6F0F\u5C3F() {
          let \u5F53\u524D\u65F6\u95F4 = Date.now();
          let \u767E\u5206\u6BD4 = this.\u83B7\u53D6\u5C3F\u6DB2\u767E\u5206\u6BD4();
          if (\u5F53\u524D\u65F6\u95F4 - this.\u53C2\u6570.\u6F0F\u5C3F\u4E0A\u6B21\u68C0\u67E5\u65F6\u95F4 >= this.\u53C2\u6570.\u6F0F\u5C3F\u68C0\u67E5\u95F4\u9694 && \u767E\u5206\u6BD4 >= this.\u53C2\u6570.\u6F0F\u5C3F\u9608\u503C) {
            let \u6982\u7387 = this.\u53C2\u6570.\u6F0F\u5C3F\u6982\u7387 / 100;
            if (Math.random() < \u6982\u7387) {
              let \u6F0F\u5C3F\u91CF = this.\u53C2\u6570.\u6F0F\u5C3F\u91CF\u6700\u5C0F + Math.random() * (this.\u53C2\u6570.\u6F0F\u5C3F\u91CF\u6700\u5927 - this.\u53C2\u6570.\u6F0F\u5C3F\u91CF\u6700\u5C0F);
              this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF = Math.max(this.\u53C2\u6570.\u5F53\u524D\u5C3F\u6DB2\u4F53\u79EF - \u6F0F\u5C3F\u91CF, 0);
              if (InventoryGet(Player, "ItemPelvis")?.Asset?.Name === "Diaper") {
                ChatRoomSendLocal(`*${Player.Name}\u7684\u5C3F\u5E03\u5438\u6536\u4E86${\u6F0F\u5C3F\u91CF.toFixed(1)}ml\u7684\u6DB2\u4F53...*`);
              } else {
                ChatRoomSendLocal(`*${Player.Name}\u4E0D\u81EA\u89C9\u5730\u6F0F\u4E86${\u6F0F\u5C3F\u91CF.toFixed(1)}ml\u5C3F\u6DB2...*`);
              }
            }
            this.\u53C2\u6570.\u6F0F\u5C3F\u4E0A\u6B21\u68C0\u67E5\u65F6\u95F4 = \u5F53\u524D\u65F6\u95F4;
          }
        }
      };
    }
  });

  // sabcm.js
  var require_sabcm = __commonJS({
    "sabcm.js"(exports) {
      init__2();
      init__3();
      window.SABCM = { DEBUG: true };
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
        let \u540C\u6B65\u8BBE\u7F6E = true;
        window.modui\u6570\u636E = {
          \u7CFB\u7EDF\u8BBE\u7F6E: { ...\u7CFB\u7EDF\u8BBE\u7F6Eui\u5C5E\u6027 },
          \u8180\u80F1: { ...\u8180\u80F1\u7CFB\u7EDFui\u5C5E\u6027 }
        };
        async function ui\u7BA1\u7406(ui\u6570\u636E, _\u7CFB\u7EDF\u8BBE\u7F6E, _\u8180\u80F1) {
          await \u7B49\u5F85(() => !!PreferenceSubscreenList);
          let \u5F53\u524D\u754C\u9762 = "\u4E3B\u754C\u9762";
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
            \u540C\u6B65\u8BBE\u7F6E = false;
            \u5F53\u524D\u754C\u9762 = "\u4E3B\u754C\u9762";
            _\u8180\u80F1.\u521D\u59CB\u5316\u5B50\u754C\u9762();
          }
          function \u8BBE\u7F6E\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406() {
            switch (\u5F53\u524D\u754C\u9762) {
              case "\u4E3B\u754C\u9762":
                if (MouseIn(1815, 75, 90, 90)) {
                  \u9000\u51FA\u8BBE\u7F6E\u754C\u9762();
                }
                if (MouseIn(1675, 75, 120, 90)) {
                  if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u5F00\u5173) {
                    Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u5F00\u5173 = false;
                  } else {
                    Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u5F00\u5173 = true;
                  }
                }
                if (MouseIn(
                  ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[0],
                  ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[1],
                  ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[0],
                  ui\u6570\u636E.\u7CFB\u7EDF\u8BBE\u7F6E.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[1]
                )) {
                  \u5F53\u524D\u754C\u9762 = "\u7CFB\u7EDF\u8BBE\u7F6E\u5B50\u754C\u9762";
                }
                if (MouseIn(
                  ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[0],
                  ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E[1],
                  ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[0],
                  ui\u6570\u636E.\u8180\u80F1.\u4E3B\u754C\u9762\u8BBE\u7F6E\u6309\u94AE.\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F[1]
                )) {
                  \u5F53\u524D\u754C\u9762 = "\u8180\u80F1\u8BBE\u7F6E\u5B50\u754C\u9762";
                }
                break;
              case "\u7CFB\u7EDF\u8BBE\u7F6E\u5B50\u754C\u9762":
                _\u7CFB\u7EDF\u8BBE\u7F6E.\u5B50\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406(ui\u6570\u636E);
                if (MouseIn(1815, 75, 90, 90)) {
                  _\u7CFB\u7EDF\u8BBE\u7F6E.\u9000\u51FA\u5B50\u754C\u9762();
                  \u5F53\u524D\u754C\u9762 = "\u4E3B\u754C\u9762";
                }
                break;
              case "\u8180\u80F1\u8BBE\u7F6E\u5B50\u754C\u9762":
                _\u8180\u80F1.\u5B50\u754C\u9762\u4EA4\u4E92\u903B\u8F91\u5904\u7406(ui\u6570\u636E);
                if (MouseIn(1815, 75, 90, 90)) {
                  _\u8180\u80F1.\u9000\u51FA\u5B50\u754C\u9762();
                  \u5F53\u524D\u754C\u9762 = "\u4E3B\u754C\u9762";
                }
                break;
              default:
                break;
            }
          }
          function \u8BBE\u7F6E\u754C\u9762\u5143\u7D20\u6E32\u67D3() {
            switch (\u5F53\u524D\u754C\u9762) {
              case "\u4E3B\u754C\u9762":
                DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
                if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u5F00\u5173) {
                  DrawButton(1675, 75, 120, 90, "\u7981\u7528\u6A21\u7EC4\u529F\u80FD\u66F4\u65B0", "White", "");
                } else {
                  DrawButton(1675, 75, 120, 90, "\u542F\u7528\u6A21\u7EC4\u529F\u80FD\u66F4\u65B0", "Red", "");
                }
                DrawText(mod\u4FE1\u606F.MOD\u6807\u9898 + mod\u4FE1\u606F.\u7248\u672C, 1e3, 130, "Black");
                _\u7CFB\u7EDF\u8BBE\u7F6E.\u6E32\u67D3\u4E3B\u6309\u94AE(ui\u6570\u636E);
                _\u8180\u80F1.\u6E32\u67D3\u4E3B\u6309\u94AE(ui\u6570\u636E);
                break;
              case "\u7CFB\u7EDF\u8BBE\u7F6E\u5B50\u754C\u9762":
                _\u7CFB\u7EDF\u8BBE\u7F6E.\u7ED8\u5236\u5B50\u754C\u9762(ui\u6570\u636E);
                break;
              case "\u8180\u80F1\u8BBE\u7F6E\u5B50\u754C\u9762":
                _\u8180\u80F1.\u7ED8\u5236\u5B50\u754C\u9762(ui\u6570\u636E);
                break;
              default:
                break;
            }
          }
          function \u8BBE\u7F6E\u754C\u9762\u9000\u51FA\u5904\u7406() {
          }
          function \u9000\u51FA\u8BBE\u7F6E\u754C\u9762() {
            if (!window.SABCM.DEBUG) {
              ServerPlayerExtensionSettingsSync("SABCM");
            }
            PreferenceSubscreenExtensionsClear();
            \u540C\u6B65\u8BBE\u7F6E = true;
          }
        }
        \u521D\u59CB\u5316().catch((error) => {
          console.log(error);
        });
        window.\u9ED8\u8BA4\u6A21\u7EC4\u8BBE\u7F6E = {
          \u9ED8\u8BA4\u8BBE\u7F6E: {
            \u7CFB\u7EDF\u8BBE\u7F6E: { ...\u7CFB\u7EDF\u8BBE\u7F6E },
            \u8180\u80F1: { ...\u8180\u80F1\u8BBE\u7F6E }
          },
          \u7CFB\u7EDF\u8BBE\u7F6E: { ...\u7CFB\u7EDF\u8BBE\u7F6E },
          \u8180\u80F1: { ...\u8180\u80F1\u8BBE\u7F6E }
        };
        function \u521D\u59CB\u5316\u6A21\u7EC4\u8BBE\u7F6E() {
          if (!window.SABCM.DEBUG) {
            if (!Player.ExtensionSettings.SABCM) {
              Player.ExtensionSettings.SABCM = \u9ED8\u8BA4\u6A21\u7EC4\u8BBE\u7F6E;
            }
          } else {
            Player.ExtensionSettings.SABCM = \u9ED8\u8BA4\u6A21\u7EC4\u8BBE\u7F6E;
          }
        }
        function \u5E27\u66F4\u65B0(\u73A9\u5BB6\u8180\u80F1) {
          let \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233 = 0;
          if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001) {
            if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4 == 0) {
              \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233 = Date.now();
            } else {
              \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233 = Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4;
            }
          } else {
            Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4 = 0;
          }
          mod.hookFunction("DrawProcess", 0, (args, next) => {
            if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u5F00\u5173) {
              if (ServerIsConnected && ServerSocket) {
                let \u5F53\u524D\u65F6\u95F4 = Date.now();
                if (\u5F53\u524D\u65F6\u95F4 - \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233 >= Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387) {
                  let \u66F4\u65B0\u95F4\u9694 = 0;
                  if (Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u79BB\u7EBF\u66F4\u65B0\u72B6\u6001) {
                    \u66F4\u65B0\u95F4\u9694 = \u5F53\u524D\u65F6\u95F4 - \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233;
                    Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4 = \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233;
                  } else {
                    \u66F4\u65B0\u95F4\u9694 = Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u66F4\u65B0\u9891\u7387;
                    Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E.\u6A21\u7EC4\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4 = 0;
                  }
                  \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\u6233 = \u5F53\u524D\u65F6\u95F4;
                  \u73A9\u5BB6\u8180\u80F1.\u66F4\u65B0(\u66F4\u65B0\u95F4\u9694);
                  if (!window.SABCM.DEBUG && \u540C\u6B65\u8BBE\u7F6E) {
                    ServerPlayerExtensionSettingsSync("SABCM");
                  }
                }
              }
            }
            return next(args);
          });
        }
        async function \u521D\u59CB\u5316() {
          await \u7B49\u5F85(() => ServerIsConnected && ServerSocket, { \u8D85\u65F6\u65F6\u95F4: -1 });
          await \u7B49\u5F85(() => !!!!Player?.AccountName, { \u8D85\u65F6\u65F6\u95F4: -1 });
          if (!window.SABCM_\u7248\u672C) {
            \u521D\u59CB\u5316\u6A21\u7EC4\u8BBE\u7F6E();
            let \u73A9\u5BB6\u7CFB\u7EDF\u8BBE\u7F6E = new \u7CFB\u7EDF\u8BBE\u7F6E\u7C7B(Player.ExtensionSettings.SABCM.\u7CFB\u7EDF\u8BBE\u7F6E, \u9ED8\u8BA4\u6A21\u7EC4\u8BBE\u7F6E);
            let \u73A9\u5BB6\u8180\u80F1 = new \u8180\u80F1\u7C7B(Player.ExtensionSettings.SABCM.\u8180\u80F1);
            ui\u7BA1\u7406(modui\u6570\u636E, \u73A9\u5BB6\u7CFB\u7EDF\u8BBE\u7F6E, \u73A9\u5BB6\u8180\u80F1);
            \u5E27\u66F4\u65B0(\u73A9\u5BB6\u8180\u80F1);
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
