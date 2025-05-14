const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class BackOrderParam {
    constructor(kuaidicom, kuaidinum, partnerId, partnerKey, phone, imgType) {
        this.kuaidicom = kuaidicom;
        this.kuaidinum = kuaidinum;
        this.partnerId = partnerId;
        this.partnerKey = partnerKey;
        this.phone = phone;
        this.imgType = imgType;
    }
}

/**
* 运单附件查询接口
 */
async function backOrder() {
    const method = "backOrder";
    const param = new BackOrderParam(
        "shunfeng",
        "SF1234567",
        "1234567",
        "",
        "13888888888",
        1
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doMethodRequest(method, t, JSON.stringify(param), URL.LABEL_ORDER_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

backOrder();