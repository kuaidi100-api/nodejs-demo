const common = require('./elec_common'); // 引入统一请求模块

/**
 * PrintOldParam 类 - 自定义模板打印复打参数模型
 */
class PrintOldParam {
    constructor({
        siid,
        taskId
    } = {}) {
        this.siid = siid;
        this.taskId = taskId;
    }
}

/**
 * 电子面单 - 自定义模板打印复打接口
 */
async function printOld() {
    const param = new PrintOldParam({
        siid: "KX100*******",
        taskId: "1234"
    });

    const method = "printOld";

    try {
        await common.DoLabelOrderRequest(method, param);
    } catch (error) {
        console.error('电子面单复打失败:', error.message);
    }
}

// 自动执行
printOld();