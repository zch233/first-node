
    const {model, helper} = require('thinkorm');

    module.exports = class extends model {
        // 构造方法
        init(){
            // 模型名称,映射实体表 user
            this.modelName = 'table_community_infos_comment';
            // 数据表字段信息
            this.fields = {
    "id": {
        "pk": true
    },
    "infoid": {
        "defaults": ""
    },
    "unionid": {
        "defaults": ""
    },
    "content": {
        "defaults": ""
    },
    "reply_time": {
        "defaults": ""
    },
    "verifyed": {
        "defaults": ""
    }
}
        }
    }