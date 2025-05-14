const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class SendMan {
    constructor(name, mobile, addr, district, province, company, countryCode, city, zipcode, tel, email, vatNum, eoriNum, iossNum) {
        this.name = name;
        this.mobile = mobile;
        this.addr = addr;
        this.district = district;
        this.province = province;
        this.company = company;
        this.countryCode = countryCode;
        this.city = city;
        this.zipcode = zipcode;
        this.tel = tel;
        this.email = email;
        this.vatNum = vatNum;
        this.eoriNum = eoriNum;
        this.iossNum = iossNum;
    }
}

class RecMan {
    constructor(name, mobile, addr, district, province, company, countryCode, city, zipcode, tel, email, vatNum, eoriNum, iossNum) {
        this.name = name;
        this.mobile = mobile;
        this.addr = addr;
        this.district = district;
        this.province = province;
        this.company = company;
        this.countryCode = countryCode;
        this.city = city;
        this.zipcode = zipcode;
        this.tel = tel;
        this.email = email;
        this.vatNum = vatNum;
        this.eoriNum = eoriNum;
        this.iossNum = iossNum;
    }
}

class PackageInfo {
    constructor(height, width, length, weight, packageReference) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
        this.packageReference = packageReference;
    }
}

class ExportInfo {
    constructor(zhName, enName, netWeight, grossWeight, manufacturingCountryCode, unitPrice, quantity,
                quantityUnitOfMeasurement, desc, importCommodityCode, exportCommodityCode, numberOfPieces) {
        this.zhName = zhName;
        this.enName = enName;
        this.netWeight = netWeight;
        this.grossWeight = grossWeight;
        this.manufacturingCountryCode = manufacturingCountryCode;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.quantityUnitOfMeasurement = quantityUnitOfMeasurement;
        this.desc = desc;
        this.importCommodityCode = importCommodityCode;
        this.exportCommodityCode = exportCommodityCode;
        this.numberOfPieces = numberOfPieces;
    }
}

class InvoiceInfo {
    constructor(date, number, type, title, signature, pltEnable) {
        this.date = date;
        this.number = number;
        this.type = type;
        this.title = title;
        this.signature = signature;
        this.pltEnable = pltEnable;
    }
}

class DutiesPaymentType {
    constructor(paymentType, account) {
        this.paymentType = paymentType;
        this.account = account;
    }
}

class FreightPaymentType {
    constructor(paymentType, account) {
        this.paymentType = paymentType;
        this.account = account;
    }
}

class CustomsClearance {
    constructor(purpose, document) {
        this.purpose = purpose;
        this.document = document;
    }
}

class ApiCallParam {
    constructor(partnerId, partnerName, partnerSecret, kuaidicom, sendMan, recMan, cargo, count, weight,
                expType, remark, packageInfos, exportInfos, customsValue, tradeTerm, needInvoice, invoiceInfo,
                dutiesPaymentType, freightPaymentType, customsClearance) {
        this.partnerId = partnerId;
        this.partnerName = partnerName;
        this.partnerSecret = partnerSecret;
        this.kuaidicom = kuaidicom;
        this.sendMan = sendMan;
        this.recMan = recMan;
        this.cargo = cargo;
        this.count = count;
        this.weight = weight;
        this.expType = expType;
        this.remark = remark;
        this.packageInfos = packageInfos;
        this.exportInfos = exportInfos;
        this.customsValue = customsValue;
        this.tradeTerm = tradeTerm;
        this.needInvoice = needInvoice;
        this.invoiceInfo = invoiceInfo;
        this.dutiesPaymentType = dutiesPaymentType;
        this.freightPaymentType = freightPaymentType;
        this.customsClearance = customsClearance;
    }
}

/**
* 国际电子面单下单接口
 */
async function apiCall() {
    const sendMan = new SendMan(
        "Kaka",
        "13500000000",
        "Kingdee Software Park",
        "Hi-tech Park,Nanshang District",
        "",
        "QIAN HAI BAI DI",
        "CN",
        "SHEN ZHEN",
        "518057",
        "0755-5890123",
        "12344655@qq.com",
        "IOSS23249923",
        "IOSS23249923",
        "IOSS23249923"
    );

    const recMan = new RecMan(
        "Cindy Martinez / Ana Luz Medina",
        "(86)13560312000",
        "Apoquindo 4001, of. 501. Las Condes",
        "Santiago, Chile",
        "",
        "Lamaignere Chile S.A.",
        "CL",
        "Santiago",
        "7550000",
        "+56 (9) 1242355",
        "12344699@qq.com",
        "IOSS23249923",
        "IOSS23249923",
        "IOSS23249923"
    );

    const packageInfo = new PackageInfo("10", "20", "11", "0.1", "just a user remark");

    const exportInfo = new ExportInfo(
        "",
        "",
        0.1,
        0.1,
        "CN",
        "10.0",
        1.0,
        "PCS",
        "test",
        "6109100021",
        "6109100021",
        1
    );

    const dutiesPaymentType = new DutiesPaymentType("DDU", "60*****43");
    const freightPaymentType = new FreightPaymentType("SHIPPER", "60*****43");
    const customsClearance = new CustomsClearance("", true);

    const invoiceInfo = new InvoiceInfo("2021-08-12", "15462412", null, "test", "base64Str", true);

    const param = new ApiCallParam(
        "12344",
        "dsfgsgs",
        "dfsfsfs",
        "dhl",
        sendMan,
        recMan,
        "test don't ship",
        "1",
        "0.1",
        "parcel-normal",
        "just a test demo",
        [packageInfo],
        [exportInfo],
        "10.0",
        "DAP",
        true,
        invoiceInfo,
        dutiesPaymentType,
        freightPaymentType,
        customsClearance
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doRequest(t, JSON.stringify(param), URL.API_CALL_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

apiCall();