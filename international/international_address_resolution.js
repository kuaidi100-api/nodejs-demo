const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

class InternationalAddressResolutionParam {
    constructor(code, address, language) {
        this.code = code;
        this.address = address;
        this.language = language;
    }
}

/**
* 国际地址解析接口
 */
async function internationalAddressResolution() {
    const param = new InternationalAddressResolutionParam(
        "US",
        "84 AlfordRd,GreatBarrington,MA01230,USA",
        "en"
    );

    const t = Date.now().toString();

    try {
        await httpUtil.doRequest(t, JSON.stringify(param), URL.INTERNATIONAL_ADDRESS_RESOLUTION_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

internationalAddressResolution();