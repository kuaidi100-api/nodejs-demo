const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class AddressResolutionParam {
    constructor(content, image, imageUrl, pdfUrl, htmlUrl) {
        this.content = content;
        this.image = image;
        this.imageUrl = imageUrl;
        this.pdfUrl = pdfUrl;
        this.htmlUrl = htmlUrl;
    }
}

/**
* 智能地址解析接口
 */
async function addressResolution() {
    const param = new AddressResolutionParam(
        "张三广东省深圳市南山区粤海街道科技南十二路金蝶软件园13088888888",
        "qweasftefds",
        "www.imageurl.png",
        "www.pdfurl.pdf",
        "www.htmlurl.html"
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doRequest(t, JSON.stringify(param), URL.ADDRESS_RESOLUTION_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

addressResolution();