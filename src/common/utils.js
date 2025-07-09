import overload from "@jyostudio/overload";

/**
 * 格式化字符串
 * @param {string} template - 模板字符串，使用 {0}, {1}, ... 占位符
 * @param {...*} args - 替换占位符的参数
 * @return {string} - 格式化后的字符串
 */
export const formatString = overload([String,"..."],function(template, ...args) {
    return template.replace(/\{(\d+)\}/g, (match, index) => {
        const arg = args[index];
        return typeof arg === 'undefined' ? match : arg;
    });
});

/**
 * 将值转换为指定类型
 * @param {Object} value - 要转换的值
 * @param {Function} type - 目标类型
 * @return {Object|null} - 转换后的值，如果不匹配则返回 null
 */
export const asType = overload([Object, Function], function(value, type) {
    return value instanceof type ? value : null;
});