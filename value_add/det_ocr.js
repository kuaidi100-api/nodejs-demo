const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');
const account = require('../config/account');

class DetOCRParam {
    constructor(enableTilt, include, image, imageUrl, pdfUrl, htmlUrl) {
        this.enableTilt = enableTilt;
        this.include = include;
        this.image = image;
        this.imageUrl = imageUrl;
        this.pdfUrl = pdfUrl;
        this.htmlUrl = htmlUrl;
    }
}

/**
* 快递面单OCR识别接口
 */
async function detOCR() {

    const param = new DetOCRParam(
        false,
        ["barcode", "receiver", "sender"],
        null,
        "https://cdn.kuaidi100.com/images/openapi/document/ocr_tem.png",
        null,
        null
    );

    const m = {
        key: account.KEY,
        param: JSON.stringify(param)
    };

    try {
        await httpUtil.doMapRequest(m, URL.DET_OCR_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

detOCR();