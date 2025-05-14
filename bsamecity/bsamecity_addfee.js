const common = require('./bsamecity_common'); // 引入统一请求模块

/**
 * AddFeeParam 类 - 同城快递追加费用参数模型
 */
class AddFeeParam {
    constructor({
        orderId,
        remark,
        taskId,
        tips
    } = {}) {
        this.orderId = orderId;
        this.remark = remark;
        this.taskId = taskId;
        this.tips = tips;
    }
}

/**
 * 同城快递 - 加小费接口
 */
async function addFee() {
    const param = new AddFeeParam({
        orderId: "100213",
        remark: "",
        taskId: "0E1536182BAE416080AC3C5DE6896F03",
        tips: "10"
    });

    const method = "addfee";

    try {
        await common.doBsamecityRequest(method, param);
    } catch (error) {
        console.error('同城快递-加小费失败:', error.message);
    }
}

// 自动执行
addFee();