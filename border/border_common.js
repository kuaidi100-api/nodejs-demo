const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

/**
 * 统一发送商家寄件请求的方法
 * @param {string} method 请求方法名
 * @param {Object} param 参数对象
 * @returns {Promise<void>}
 */
async function doBorderRequest(method, param) {
    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    await httpUtil.doMethodRequest(method, t, requestParams, URL.B_ORDER_URL);
}

module.exports = {
    doBorderRequest
};