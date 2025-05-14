const common = require('./border_common'); // 引入统一请求模块

/**
 * CancelParam 类 - 取消订单专用参数模型
 */
class CancelParam {
    constructor({
        taskId,
        orderId,
        cancelMsg
    } = {}) {
        this.taskId = taskId;
        this.orderId = orderId;
        this.cancelMsg = cancelMsg;
    }
}

/**
 * 商家寄件 - 取消订单
 */
async function cancelOrder() {
    const param = new CancelParam({
        taskId: "9FC293CA417E431F33046E64F4C4EC20",
        orderId: "20066771",
        cancelMsg: "内部测试单"
    });

    const method = "cancel";

    try {
        await common.doBorderRequest(method, param);
    } catch (error) {
        console.error('商家寄件-订单取消失败:', error.message);
    }
}

// 自动执行
cancelOrder();