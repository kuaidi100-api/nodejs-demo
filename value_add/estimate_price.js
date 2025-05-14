const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class EstimatePriceParam {
    constructor(sendAddr, recAddr, kuaidicom, weight) {
        this.sendAddr = sendAddr;
        this.recAddr = recAddr;
        this.kuaidicom = kuaidicom;
        this.weight = weight;
    }
}

/**
 * 快递预估价格查询接口
 */
async function estimatePrice() {
    const method = "price";

    const param = new EstimatePriceParam(
        "深圳南山区",
        "北京海淀区",
        "jd",
        "12"
    );

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.LABEL_ORDER_URL);
    } catch (error) {
        console.error('快递预估价格请求失败:', error.message);
    }
}

estimatePrice();