const httpUtil = require('../utils/httpUtil');
const URL = require('../config/url');

// 定义查询参数结构体
class QueryParam {
    constructor() {
      this.com = "yuantong";
      this.num = "em263999513jp";
      this.phone = "13868688888";
      this.from = "广东省深圳市南山区";
      this.to = "北京市朝阳区";
      this.resultv2 = "4";
      this.show = "0";
      this.order = "desc";
      this.lang = "zh";
    }
  }


/*
实时快递查询接口
*/
async function query() {
    const param = new QueryParam({
        com: "yuantong",
        num: "em263999513jp",
        phone: "13868688888",
        from: "广东省深圳市南山区",
        to: "北京市朝阳区",
        resultv2: "4",
        show: "0",
        order: "desc",
        lang: "zh"
    });

    try {
        await httpUtil.customerRequest(JSON.stringify(param), URL.QUERY_URL);
    } catch (error) {
        console.error('请求失败:', error.message);
    }
}

query();