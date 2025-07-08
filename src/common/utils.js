/**
 * 格式化字符串
 * @param {string} template - 模板字符串，使用 {0}, {1}, ... 占位符
 * @param {...*} args - 替换占位符的参数
 * @return {string} - 格式化后的字符串
 */
export function formatString(template, ...args) {
    return template.replace(/\{(\d+)\}/g, (match, index) => {
        const arg = args[index];
        return typeof arg === 'undefined' ? match : arg;
    });
}