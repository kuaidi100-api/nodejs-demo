const common = require('./bsamecity_common'); // 引入统一请求模块

/**
 * CancelParam 类 - 同城快递取消订单参数模型
 */
class CancelParam {
    constructor({
        orderId,
        cancelMsgType,
        cancelMsg,
        taskId
    } = {}) {
        this.orderId = orderId;
        this.cancelMsgType = cancelMsgType;
        this.cancelMsg = cancelMsg;
        this.taskId = taskId;
    }
}

/**
 * 同城快递 - 取消订单接口
 */
async function cancelOrder() {
    const param = new CancelParam({
        orderId: "100241",
        cancelMsgType: 1,
        cancelMsg: "测试寄件",
        taskId: "DE49A5C45B0845328CE0AE8EF9951EC5"
    });

    const method = "cancel";

    try {
        await common.doBsamecityRequest(method, param);
    } catch (error) {
        console.error('同城快递订单取消失败:', error.message);
    }
}

// 自动执行
cancelOrder();