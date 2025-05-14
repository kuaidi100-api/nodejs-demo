const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class ManInfo {
    constructor(name, mobile, address) {
        this.name = name;
        this.mobile = mobile;
        this.address = address;
    }
}

class OrderExportParam {
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
 * OrderExport 定义订单导出接口
 */
async function orderExport() {
    const method = "orderExport";

    const receiver = new ManInfo(
        "张三",
        "13800138000",
        "北京市朝阳区某某街道123号"
    );

    const sender = new ManInfo(
        "李四",
        "13900139000",
        "上海市浦东新区某某路456号"
    );

    const param = new OrderExportParam(
        "SYS123456",
        "PLT789012",
        "199.00",
        "2024-07-20 15:30:00",
        "2024-07-21 09:00:00",
        0,
        "2024-07-22 18:00:00",
        "JD",
        "自营",
        "官方旗舰店",
        "华北仓库",
        "JD1234567890",
        "jd",
        "0",
        receiver,
        sender
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doMethodRequest(method, t, JSON.stringify(param), URL.MONITOR_ORDER_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

orderExport();