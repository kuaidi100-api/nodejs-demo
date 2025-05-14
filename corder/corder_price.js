const common = require('./corder_common'); // 引入统一请求模块

/**
 * PriceParam 类 - C端寄件查询价格参数模型
 */
class PriceParam {
    constructor({
        kuaidicom,
        sendManPrintAddr,
        recManPrintAddr
    } = {}) {
        this.kuaidicom = kuaidicom;
        this.sendManPrintAddr = sendManPrintAddr;
        this.recManPrintAddr = recManPrintAddr;
    }
}

/**
 * C端寄件 - 查询价格接口
 */
async function price() {
    const param = new PriceParam({
        kuaidicom: "shunfeng",
        sendManPrintAddr: "北京市海淀区颐和园路5号",
        recManPrintAddr: "北京市海淀区双清路30号"
    });

    const method = "price";

    try {
        await common.doCorderRequest(method, param);
    } catch (error) {
        console.error('C端寄件价格查询失败:', error.message);
    }
}

// 自动执行
price();