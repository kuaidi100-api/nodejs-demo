const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

/**
 * 快递智能识别单号
 */
async function autoNumber() {
    const number = "906919164534";
    const key = account.KEY;
    const postUrl = URL.AUTO_NUMBER_URL + "?num=" + number + "&key=" + key;

    const m = {};

    try {
        await httpUtil.doMapRequest(m, postUrl);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

autoNumber();