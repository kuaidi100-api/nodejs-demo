const common = require('./corder_common'); // 引入统一请求模块

/**
 * CancelParam 类 - C端寄件取消订单参数模型
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
 * C端寄件 - 取消订单接口
 */
async function cancel() {
    const param = new CancelParam({
        taskId: "9FC293CA417E431F33046E64F4C4EC20",
        orderId: "20066771",
        cancelMsg: "内部测试单"
    });

    const method = "cancel";

    try {
        await common.doCorderRequest(method, param);
        console.log('C端寄件订单取消成功');
    } catch (error) {
        console.error('C端寄件订单取消失败:', error.message);
    }
}

// 自动执行
cancel();