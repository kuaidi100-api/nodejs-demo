const httpUtil = require('../utils/httpUtil');
const account = require('../config/account');
const URL = require('../config/url');

/**
 * 统一发送电子面单请求的方法
 * @param {string} method 请求方法名（如 order、query、cancel）
 * @param {Object} param 参数对象
 * @returns {Promise<void>}
 */
async function DoLabelOrderRequest(method, param) {
    const t = Date.now().toString(); // 时间戳毫秒

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    await httpUtil.doMethodRequest(method, t, requestParams, URL.LABEL_ORDER_URL);
}

module.exports = {
    DoLabelOrderRequest
};