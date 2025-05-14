const common = require('../border/border_common');

class CreateParam {
    constructor({
        kuaidicom,
        recManName,
        recManMobile,
        recManPrintAddr,
        sendManName,
        sendManMobile,
        sendManPrintAddr,
        cargo,
        callBackUrl,
        payment,
        serviceType,
        weight,
        remark,
        salt,
        dayType,
        pickupStartTime,
        pickupEndTime,
        passwordSigning,
        valinsPay,
        op,
        pollCallBackUrl,
        resultv2
    } = {}) {
        this.kuaidicom = kuaidicom;
        this.recManName = recManName;
        this.recManMobile = recManMobile;
        this.recManPrintAddr = recManPrintAddr;
        this.sendManName = sendManName;
        this.sendManMobile = sendManMobile;
        this.sendManPrintAddr = sendManPrintAddr;
        this.cargo = cargo;
        this.callBackUrl = callBackUrl;
        this.payment = payment;
        this.serviceType = serviceType;
        this.weight = weight;
        this.remark = remark;
        this.salt = salt;
        this.dayType = dayType;
        this.pickupStartTime = pickupStartTime;
        this.pickupEndTime = pickupEndTime;
        this.passwordSigning = passwordSigning;
        this.valinsPay = valinsPay;
        this.op = op;
        this.pollCallBackUrl = pollCallBackUrl;
        this.resultv2 = resultv2;
    }
}

/**
 * 商家寄件-创建订单
 */
async function createOrder() {
    const param = new CreateParam({
        kuaidicom: "yuantong",
        recManName: "王超",
        recManMobile: "13842569988",
        recManPrintAddr: "广东深圳市深圳市南山区科技南十二路2号金蝶软件园",
        sendManName: "王大",
        sendManMobile: "13842569988",
        sendManPrintAddr: "广东省广州市华景软件园",
        cargo: "文件",
        callBackUrl: "http://www.baidu.com",
        payment: "SHIPPER",
        serviceType: "快递标准",
        weight: "1",
        passwordSigning: "Y",
        op: "0",
        resultv2: "0"
    });

    const method = "create";

    try {
        await common.doBorderRequest(method, param);
    } catch (error) {
        console.error('商家寄件-订单创建失败:', error.message);
    }
}

// 示例调用
createOrder();