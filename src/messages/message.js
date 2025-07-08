import overload from "@jyostudio/overload";
import zhCN from "./zh-CN.json" with { type: "json" };
import enUS from "./en-US.json" with { type: "json" };

let lang = {};
switch (process.env.lang) {
    case "en-US": lang = enUS; break;
    default: lang = zhCN; break;
}
lang = new Map(Object.entries(lang));

export const getMessage = overload([String, "..."], function (msg, ...args) {
    return (lang.get(msg) ?? msg).replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
});

export const appendMessage = overload([String, String], function (key, msg) {
    lang.set(key, msg);
});

export const appendMessages = overload([Object], function (messages) {
    Object.keys(messages).forEach((key) => {
        lang[key] = messages[key];
    });
});