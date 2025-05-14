const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class RecManInfo {
    constructor(name, mobile, printAddr) {
        this.name = name;
        this.mobile = mobile;
        this.printAddr = printAddr;
    }
}

class InterceptOrderParam {
    constructor(orderId, kuaidicom, kuaidinum, partnerId,
                partnerKey, partnerSecret, interceptType,
                code, net, reason, recManInfo) {
        this.orderId = orderId;
        this.kuaidicom = kuaidicom;
        this.kuaidinum = kuaidinum;
        this.partnerId = partnerId;
        this.partnerKey = partnerKey;
        this.partnerSecret = partnerSecret;
        this.interceptType = interceptType;
        this.code = code;
        this.net = net;
        this.reason = reason;
        this.recManInfo = recManInfo;
    }
}

/**
 * 拦截改址接口
 */
async function interceptOrder() {
    const method = "interceptOrder";

    const recManInfo = new RecManInfo(
        "测试",
        "138888888888",
        "广东深圳市南山区金蝶软件园"
    );

    const param = new InterceptOrderParam(
        "",
        "debangkuaidi",
        "2222",
        "22222",
        "",
        "",
        "MODIFY_ADDR",
        "",
        "",
        "",
        recManInfo
    );

    const t = Date.now().toString(); // 时间戳

    const requestParams = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMethodRequest(method, t, requestParams, URL.LABEL_ORDER_URL);
    } catch (error) {
        console.error('拦截改址请求失败:', error.message);
    }
}

interceptOrder();