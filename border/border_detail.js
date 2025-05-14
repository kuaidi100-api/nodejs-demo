const common = require('./border_common'); // 引入统一请求模块

/**
 * DetailParam 类 - 查询订单详情专用参数模型
 */
class DetailParam {
    constructor({
        taskId
    } = {}) {
        this.taskId = taskId;
    }
}

/**
 * 商家寄件 - 查询订单详情
 */
async function getDetail() {
    const param = new DetailParam({
        taskId: "9FC293CA417E431F33046E64F4C4EC20"
    });

    const method = "detail";

    try {
        await common.doBorderRequest(method, param);
    } catch (error) {
        console.error('商家寄件-订单详情查询失败:', error.message);
    }
}

// 自动执行
getDetail();