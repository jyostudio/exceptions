import overload from "@jyostudio/overload";
import { formatString } from "./utils.js";
import zhCN from "../../languages/zh-CN.json" with { type: "json" };
import enUS from "../../languages/en-US.json" with { type: "json" };
import jaJP from "../../languages/ja-JP.json" with { type: "json" };

if (typeof process === "undefined") {
    globalThis.process = {};
    globalThis.process.env ??= {};
    globalThis.process.env.lang ??= "zh-CN";
}

let lang = {};
switch (process.env.lang) {
    case "en-US": lang = enUS; break;
    case "ja-JP": lang = jaJP; break;
    default: lang = zhCN; break;
}
lang = new Map(Object.entries(lang));

export const getMessage = overload([String, "..."], function (msg, ...args) {
    const template = lang.get(msg) ?? msg;
    return formatString(template, ...args);
});

export const appendMessage = overload([String, String], function (key, msg) {
    lang.set(key, msg);
});

export const appendMessages = overload([Object], function (messages) {
    Object.entries(messages).forEach(([key, value]) => {
        lang.set(key, value);
    });
});