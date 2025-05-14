const common = require('./corder_common'); // 引入统一请求模块

/**
 * DetailParam 类 - C端寄件查询订单详情参数模型
 */
class DetailParam {
    constructor({
        taskId
    } = {}) {
        this.taskId = taskId;
    }
}

/**
 * C端寄件 - 查询订单详情接口
 */
async function detail() {
    const param = new DetailParam({
        taskId: "9FC293CA417E431F33046E64F4C4EC20"
    });

    const method = "detail";

    try {
        await common.doCorderRequest(method, param);
    } catch (error) {
        console.error('C端寄件订单详情查询失败:', error.message);
    }
}

// 自动执行
detail();