//  var emotionList = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '愉快', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极', '嘿哈', '捂脸', '奸笑', '机智', '皱眉', '耶', '红包', '鸡'];
var ROBOT_NAME = "小强";

module.exports = {
    //微信web版地址
    'URL'          : 'https://wx.qq.com/',

    //机器人名字
    'ROBOT_NAME'   : ROBOT_NAME,

    //图灵机器人apiKey和api地址
    //AI部分使用的是第三方机器人图灵（http://www.tuling123.com/）   
    'TURING_APIKEY': '99fecec3424d416898b91b0998e2b26a',
    'TURING_URL'   : 'http://www.tuling123.com/openapi/api',

    //锁定的微信号备注，注意是备注；如果是群聊则填群聊名称即可。
    'TARGET_NICK'  : '二十投小分队',

    //启动时打招呼消息
    'HELLO_WORLD'  : '[闪电]' + ROBOT_NAME + '[闪电]已启动...\n\r\n\r现在的时间是：'+new Date().toLocaleString(),

}
