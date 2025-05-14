<h1 align="center"><a href="https://github.com/kuaidi100-api/kuadi100-api/" target="_blank">nodejs-demo Project</a></h1>

## Introduce

nodejs-demo 是由[快递100](https://api.kuaidi100.com/home)官方提供的NodeJS sdk，方便测试使用。

nodejs-demo 集成了快递查询（base）、电子面单与云打印（elec_print）、物流服务（border、work_order、corder、bsamecity、monitor）、增值服务（value_add）、跨境服务（international）等接口

## Features

- 提供测试类调试。

## Getting started

在对应方法目录下执行`node xxx.js`，xxx为文件名

```
# git clone https://github.com/kuaidi100-api/nodejs-demo.git
```

## Add Config

使用前先配置[/config/account.js](https://github.com/kuaidi100-api/nodejs-demo/blob/master/config/account.js)，账号信息可以登录快递100获取https://poll.kuaidi100.com/manager/page/myinfo/enterprise （注意不要泄露快递100的账号密码以及授权key等敏感信息，以防被他人盗用！！！）


## Use Junit Test

以下是各个接口的测试示例，完整代码可在GitHub仓库中查看：
### 快递查询(base)接口
- [实时快递查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/base/query.js)
- [快递信息推送服务-订阅接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/base/poll.js)
- [快递查询地图轨迹](https://github.com/kuaidi100-api/nodejs-demo/blob/master/base/maptrack.js)
- [地图轨迹推送接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/base/pollmap.js)

### 电子面单与云打印(elec_print)接口
- [电子面单下单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/elec_order.js)
- [第三方平台账号授权](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/authThird.js)
- [第三方平台网点&面单余额接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/third_info.js)
- [电子面单取消接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/elec_cancel.js)

- [获取店铺授权超链接接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/shop_authorize.js)
- [提交销售订单获取任务接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/order_task.js)
- [提交售后（退货）订单获取任务接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/refundOrder_task.js)
- [物流信息发送接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/logistic_send.js)

- [自定义模板打印接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/elec_custom.js)
- [自定义模板打印复打接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/elec_printOld.js)
- [硬件状态查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/elec_print/print_task.js)

### 商家寄件(border)接口
- [寄件下单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/border/border_create.js)
- [运费预估接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/border/border_price.js)
- [订单详情查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/border/border_detail.js)
- [取消寄件接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/border/border_cancel.js)

### 寄件工单服务(work_order)接口
- [创建工单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/work_order/work_order_create.js)
- [查询工单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/work_order/work_order_query.js)
- [工单新增/查询留言接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/work_order/work_order_reply.js)
- [工单附件上传接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/work_order/work_order_upload.js)

### C端寄件(corder)接口
- [C端寄件 下单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/corder/corder_create.js)
- [C端寄件 价格预估接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/corder/corder_price.js)
- [C端寄件 订单详情查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/corder/corder_detail.js)
- [C端寄件 订单取消接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/corder/corder_cancel.js)

### 同城配送(bsamecity)接口
- [同城配送 下单接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/bsamecity/bsamecity_order.js)
- [同城配送 价格预估接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/bsamecity/bsamecity_price.js)
- [同城配送 订单取消接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/bsamecity/bsamecity_cancel.js)
- [同城配送 订单预取消接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/bsamecity/bsamecity_precancel.js)
- [同城配送 订单加小费接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/bsamecity/bsamecity_addfee.js)

### 物流全链路监控服务(monitor)接口
- [订单导出接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/monitor/monitor_orderExport.js)
- [订单发货接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/monitor/monitor_sendOut.js)

### 增值服务(value_add)接口
- [智能地址解析接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/address_resoluton.js)
- [快递预估时效查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/estimate_time.js)
- [拦截改址接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/intercept_order.js)
- [运单附件查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/back_order.js)
- [快递100短信发送接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/sms_send.js)
- [快递智能识别单号](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/auto_number.js)
- [快递可用性接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/reachable.js)
- [快递面单OCR识别接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/det_ocr.js)
- [快递预估价格查询接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/value_add/estimate_price.js)

### 跨境服务(international)接口
- [国际电子面单下单API](https://github.com/kuaidi100-api/nodejs-demo/blob/master/international/api_call.js)
- [预约取件API](https://github.com/kuaidi100-api/nodejs-demo/blob/master/international/pick_up.js)
- [取消预约API](https://github.com/kuaidi100-api/nodejs-demo/blob/master/international/cancel_pick_up.js)
- [国际地址解析接口](https://github.com/kuaidi100-api/nodejs-demo/blob/master/international/international_address_resolution.js)

## Tips
如需获取账号信息（如 key、customer、secret），或免费试用100单，请访问[API开放平台](https://api.kuaidi100.com/register/diff/)进行注册
