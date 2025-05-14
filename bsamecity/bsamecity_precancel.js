const common = require('./bsamecity_common'); // 引入统一请求模块

/**
 * PreCancelParam 类 - 同城快递预取消订单参数模型
 */
class PreCancelParam {
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
 * 同城快递 - 预取消订单接口
 */
async function preCancelOrder() {
    const param = new PreCancelParam({
        orderId: "100241",
        cancelMsgType: 1,
        cancelMsg: "测试寄件",
        taskId: "DE49A5C45B0845328CE0AE8EF9951EC5"
    });

    const method = "precancel";

    try {
        await common.doBsamecityRequest(method, param);
    } catch (error) {
        console.error('同城快递预取消订单失败:', error.message);
    }
}

// 自动执行
preCancelOrder();