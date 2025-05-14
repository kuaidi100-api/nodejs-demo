const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置路径

/**
 * RefundOrderTaskParam 类 - 提交售后（退货）订单获取任务参数模型
 */
class RefundOrderTaskParam {
    constructor({
        shopType,
        shopId,
        orderStatus,
        updateAtMin,
        updateAtMax,
        callbackUrl,
        salt
    } = {}) {
        this.shopType = shopType;
        this.shopId = shopId;
        this.orderStatus = orderStatus;
        this.updateAtMin = updateAtMin;
        this.updateAtMax = updateAtMax;
        this.callbackUrl = callbackUrl;
        this.salt = salt;
    }
}

/**
 * 提交售后（退货）订单获取任务接口
 */
async function refundOrderTask() {
    const param = new RefundOrderTaskParam({
        shopType: "TAOBAO",
        shopId: "123",
        orderStatus: "UNPAY",
        updateAtMin: "2025-05-06 11:11:11",
        updateAtMax: "2025-06-06 11:11:11",
        callbackUrl: "www.baidu.com",
        salt: "abc"
    });

    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doRequest(t, requestParams, URL.REFUND_ORDER_TASK_URL);
    } catch (error) {
        console.error('提交售后订单获取任务失败:', error.message);
    }
}

// 自动执行
refundOrderTask();