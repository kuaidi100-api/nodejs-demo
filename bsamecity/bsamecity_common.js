const httpUtil = require('../utils/httpUtil');
const account = require('../config/account');
const URL = require('../config/url');

/**
 * 统一发送同城快递请求的方法
 * @param {string} method 请求方法名（如 order、query、cancel）
 * @param {Object} param 参数对象
 * @returns {Promise<void>}
 */
async function doBsamecityRequest(method, param) {
    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    await httpUtil.doMethodRequest(method, t, requestParams, URL.BSAMECITY_URL);
}

module.exports = {
    doBsamecityRequest
};