const common = require('./border_common'); // 假设 borderrequest.js 在同一目录下


class PriceParam {
    constructor({
        kuaidicom,
        recManPrintAddr,
        sendManPrintAddr,
        serviceType,
        weight,
    } = {}) {
        this.kuaidicom = kuaidicom;
        this.recManPrintAddr = recManPrintAddr;
        this.sendManPrintAddr = sendManPrintAddr;
        this.serviceType = serviceType;
        this.weight = weight;
    }
}
/**
 * 商家寄件-查询订单价格
 */
async function getPrice() {
    const param = new PriceParam({
        kuaidicom: "yuantong",
        recManPrintAddr: "广东深圳市深圳市南山区科技南十二路2号金蝶软件园",
        sendManPrintAddr: "广东省广州市华景软件园",
        serviceType: "标准快递",
        weight: "1"
    });

    const method = "price";

    try {
        // 调用统一的请求方法
        await common.doBorderRequest(method, param);
    } catch (error) {
        console.error('商家寄件-价格查询失败:', error.message);
    }
}

getPrice();