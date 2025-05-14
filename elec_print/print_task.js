const utils = require('../utils/httpUtil'); // 引入统一请求模块
const URL = require('../config/url');       // 引入配置路径

/**
 * PrintTaskParam 类 - 硬件状态查询参数模型
 */
class PrintTaskParam {
    constructor({
        siid
    } = {}) {
        this.siid = siid;
    }
}

/**
 * 硬件状态查询接口
 */
async function printTask() {
    const param = new PrintTaskParam({
        siid: "12345678"
    });

    const method = "devstatus"; // 接口方法名
    const t = Date.now().toString(); // 时间戳（毫秒）

    const requestParams = {
        param: JSON.stringify(param)
    };

    try {
        await utils.doMethodRequest(method, t, requestParams, URL.PRINT_TASK_URL);
        console.log('硬件状态查询成功');
    } catch (error) {
        console.error('硬件状态查询失败:', error.message);
    }
}

// 自动执行
printTask();