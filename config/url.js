module.exports = {

    QUERY_URL: 'https://poll.kuaidi100.com/poll/query.do', //实时快递查询接口

	POLL_URL: 'https://poll.kuaidi100.com/poll', //快递信息推送服务  订阅接口

	MAP_TRACK_URL: 'https://poll.kuaidi100.com/poll/maptrack.do', //快递查询地图轨迹

	POLL_MAP_URL: 'http://poll.kuaidi100.com/pollmap', //地图轨迹推送

	B_ORDER_URL: 'https://poll.kuaidi100.com/order/borderapi.do', //商家寄件

	BSAMECITY_URL: 'https://api.kuaidi100.com/bsamecity/order', //同城寄件

	C_ORDER_URL: 'https://order.kuaidi100.com/order/corderapi.do', // C端寄件

	AUTH_URL: 'https://poll.kuaidi100.com/printapi/authThird.do', // 第三方平台账号授权

	LABEL_ORDER_URL: 'https://api.kuaidi100.com/label/order', // 自定义模板打印、自定义模板打印复打、电子面单下单/复打/取消请求地址、快递预估时效查询接口、拦截改址接口、运单附件查询接口

	THIRD_INFO_URL: 'http://poll.kuaidi100.com/eorderapi.do', // 第三方平台网点&面单余额接口

	SHOP_AUTHORIZE_URL: 'https://api.kuaidi100.com/ent/shop/authorize', // 获取店铺授权超链接接口

	ORDER_TASK_URL: 'https://api.kuaidi100.com/ent/order/task', // 提交销售订单获取任务接口

	REFUND_ORDER_TASK_URL: 'https://api.kuaidi100.com/ent/refundOrder/task', // 提交售后（退货）订单获取任务接口

	LOGISTIC_SEND_URL: 'https://api.kuaidi100.com/ent/logistics/send', //快递单号回传及订单发货接口

	PRINT_TASK_URL: 'https://poll.kuaidi100.com/printapi/printtask.do', //硬件状态查询接口

	ADDRESS_RESOLUTION_URL: 'https://api.kuaidi100.com/address/resolution', //地址解析接口

	SMS_SEND_URL: 'https://apisms.kuaidi100.com/sms/send.do', //快递100短信发送接口

	AUTO_NUMBER_URL: 'http://www.kuaidi100.com/autonumber/auto', //快递智能识别单号

	REACHABLE_URL: 'http://api.kuaidi100.com/reachable.do', //快递可用性接口

	DET_OCR_URL: 'http://api.kuaidi100.com/elec/detocr', //快递面单OCR识别接口

	API_CALL_URL: 'http://api.kuaidi100.com/sendAssistant/order/apiCall', //国际电子面单下单API

	PICK_UP_URL: 'http://api.kuaidi100.com/sendAssistant/order/pickUp', //国际电子面单预约取件API

	CANCEL_PICK_UP_URL: 'http://api.kuaidi100.com/sendAssistant/order/cancelPickUp', //国际电子面单取消预约取件API

	INTERNATIONAL_ADDRESS_RESOLUTION_URL: 'https://api.kuaidi100.com/internationalAddress/resolution', //国际地址解析接口

	WORK_ORDER_CREATE_URL: 'https://api.kuaidi100.com/workorder/api/create', //创建工单

	WORK_ORDER_QUERY_URL: 'https://api.kuaidi100.com/workorder/api/status', //查询工单详情

	WORK_ORDER_REPLY_URL: 'https://api.kuaidi100.com/workorder/api/reply', //工单留言

	WORK_ORDER_UPLOAD_URL: 'https://api.kuaidi100.com/workorder/api/upload', //上传附件

	MONITOR_ORDER_URL: 'http://api.kuaidi100.com/logistics/monitor/api/order', //物流全链路监控 订单导入、发货接口
}