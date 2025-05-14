const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class EstimateTimeParam {
    constructor(kuaidicom, fromAddr, toAddr, orderTime, expType) {
        this.kuaidicom = kuaidicom;
        this.from = fromAddr;
        this.to = toAddr;
        this.orderTime = orderTime;
        this.expType = expType;
    }
}

/**
 * 快递预估时效查询接口
 */
async function estimateTime() {
    const method = "time";

    const param = new EstimateTimeParam(
        "shunfeng",
        "广东深圳南山区",
        "北京海淀区",
        "2023-08-08 08:08:08",
        "标准快递"
    );

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.LABEL_ORDER_URL);
    } catch (error) {
        console.error('快递预估时效请求失败:', error.message);
    }
}

estimateTime();