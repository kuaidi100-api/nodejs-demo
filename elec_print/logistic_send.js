const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置路径

/**
 * LogisticSendParam 类 - 提交售后（退货）订单参数模型
 */
class LogisticSendParam {
    constructor({
        shopType,
        shopId,
        orderNum,
        kuaidiCom,
        kuaidiNum,
        subOrderNums
    } = {}) {
        this.shopType = shopType;
        this.shopId = shopId;
        this.orderNum = orderNum;
        this.kuaidiCom = kuaidiCom;
        this.kuaidiNum = kuaidiNum;
        this.subOrderNums = subOrderNums;
    }
}

/**
 * 提交售后（退货）订单获取任务接口
 */
async function logisticSend() {
    const param = new LogisticSendParam({
        shopType: "TAOBAO",
        shopId: "123",
        orderNum: "12345",
        kuaidiCom: "shunfeng",
        kuaidiNum: "SF54321",
        subOrderNums: ""
    });

    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doRequest(t, requestParams, URL.LOGISTIC_SEND_URL);
    } catch (error) {
        console.error('提交售后订单失败:', error.message);
    }
}

// 自动执行
logisticSend();