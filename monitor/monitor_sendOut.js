const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class ManInfo {
    constructor(name, mobile, address) {
        this.name = name;
        this.mobile = mobile;
        this.address = address;
    }
}

class SendOutParam {
    constructor(sysNum, pltNum, orderFee, payTime, deliveryTime,
                deliveryType, proDeliveryTime, sourcePlatform,
                sourceReseller, storeName, warehouseName,
                expressNum, expressCode, remoteAreaFlag, receiver, sender) {
        this.sysNum = sysNum;
        this.pltNum = pltNum;
        this.orderFee = orderFee;
        this.payTime = payTime;
        this.deliveryTime = deliveryTime;
        this.deliveryType = deliveryType;
        this.proDeliveryTime = proDeliveryTime;
        this.sourcePlatform = sourcePlatform;
        this.sourceReseller = sourceReseller;
        this.storeName = storeName;
        this.warehouseName = warehouseName;
        this.expressNum = expressNum;
        this.expressCode = expressCode;
        this.remoteAreaFlag = remoteAreaFlag;
        this.receiver = receiver;
        this.sender = sender;
    }
}

/**
 * SendOut 定义订单发货接口
 */
async function sendOut() {
    const method = "sendOut";

    const param = new SendOutParam(
        "11111", // SysNum
        null,    // PltNum (optional)
        null,    // OrderFee (optional)
        null,    // PayTime (required but omitted in Go example)
        "2023-09-04 14:08:00", // DeliveryTime
        null,    // DeliveryType (optional)
        null,    // ProDeliveryTime (optional)
        null,    // SourcePlatform (optional)
        null,    // SourceReseller (optional)
        null,    // StoreName (optional)
        null,    // WarehouseName (optional)
        "1111",  // ExpressNum
        "shunfeng", // ExpressCode
        null,    // RemoteAreaFlag (optional)
        null,    // Receiver (optional)
        null     // Sender (optional)
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doMethodRequest(method, t, JSON.stringify(param), URL.MONITOR_ORDER_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

sendOut();