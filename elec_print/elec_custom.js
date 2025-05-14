const common = require('./elec_common'); // 引入统一请求模块

/**
 * CustomParam 类 - 自定义模板参数模型
 */
class CustomParam {
    constructor({
        name,
        flag,
        count,
        unit,
        total,
        orderId,
        customerId,
        cargo1,
        cargo2,
        num,
        label,
        qrCode,
        org
    } = {}) {
        this.name = name;
        this.flag = flag;
        this.count = count;
        this.unit = unit;
        this.total = total;
        this.orderId = orderId;
        this.customerId = customerId;
        this.cargo1 = cargo1;
        this.cargo2 = cargo2;
        this.num = num;
        this.label = label;
        this.qrCode = qrCode;
        this.org = org;
    }
}

/**
 * CustomPrintParam 类 - 自定义模板打印主参数模型
 */
class CustomPrintParam {
    constructor({
        tempId,
        printType,
        siid,
        customParam
    } = {}) {
        this.tempId = tempId;
        this.printType = printType;
        this.siid = siid;
        this.customParam = customParam;
    }
}

/**
 * 电子面单 - 自定义模板打印接口
 */
async function custom() {
    const customParam = new CustomParam({
        name: "12213",
        flag: "出库",
        count: 111,
        unit: "货柜",
        total: "2000",
        orderId: "8888888888888",
        customerId: "66666666",
        cargo1: "苹果",
        cargo2: "玉米",
        num: "SF1536245218562",
        label: "拼多多",
        qrCode: "6666666666666",
        org: "快递100"
    });

    const param = new CustomPrintParam({
        tempId: "476f6f769e57447fb84398eefae2ae28",
        printType: "CLOUD",
        siid: "KX100siid",
        customParam: customParam
    });

    const method = "custom";

    try {
        await common.DoLabelOrderRequest(method, param);
    } catch (error) {
        console.error('电子面单自定义打印失败:', error.message);
    }
}

// 自动执行
custom();