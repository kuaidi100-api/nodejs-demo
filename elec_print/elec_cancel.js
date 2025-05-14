const common = require('./elec_common'); // 引入统一请求模块

/**
 * CancelParam 类 - 电子面单取消参数模型
 */
class CancelParam {
    constructor({
        partnerId,
        partnerKey,
        partnerSecret,
        partnerName,
        net,
        code,
        kuaidicom,
        kuaidinum,
        orderId,
        checkMan,
        reason
    } = {}) {
        this.partnerId = partnerId;
        this.partnerKey = partnerKey;
        this.partnerSecret = partnerSecret;
        this.partnerName = partnerName;
        this.net = net;
        this.code = code;
        this.kuaidicom = kuaidicom;
        this.kuaidinum = kuaidinum;
        this.orderId = orderId;
        this.checkMan = checkMan;
        this.reason = reason;
    }
}

/**
 * 电子面单 - 取消接口
 */
async function cancel() {
    const param = new CancelParam({
        partnerId: "123",
        partnerKey: "123",
        partnerSecret: "123",
        partnerName: "123",
        net: "123",
        code: "123",
        kuaidicom: "******",
        kuaidinum: "******",
        orderId: "123",
        checkMan: "123",
        reason: "123"
    });

    const method = "cancel";

    try {
        await common.DoLabelOrderRequest(method, param);
        console.log('电子面单取消成功');
    } catch (error) {
        console.error('电子面单取消失败:', error.message);
    }
}

// 自动执行
cancel();