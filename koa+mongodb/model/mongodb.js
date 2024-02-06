const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/month',{
    // useNewUrlParser: true, 
    // useUnifiedTopology: true 
})
.then(()=>{
    console.log('ready to');
    
})
.catch(()=>{
    console.log("fail to");
    
})

// 配置表
// 测试
const monSchema = new mongoose.Schema({
    sort:Number,
    name:String,
    sex:String,
    num:String,
    subject:String,
    office:String
})
const teacher = mongoose.model('teaches',monSchema,)
// 登录表
const userSchema = new mongoose.Schema({
    username:String,
    password:String
})
const user = mongoose.model('first',userSchema)
// 工单
const gongDanSchema = new mongoose.Schema({
    num:String,
    title:String,
    type:String,
    dispose:String,
    startTime:String,
    state:String,
    degree:String
})
const gongDan = mongoose.model('gongdan',gongDanSchema,)
// 客户列表
const clientSchema = new mongoose.Schema({
    key:String,
    name:String,
    state:String,
    start:Number,
    lianXi:String,
    tel:String,
    lastTime:String
})    
const quickClient = mongoose.model('clientList',clientSchema,)
// 跟进记录
const genSchema = new mongoose.Schema({
    name:String,
    fail:String,
    genJin:String,
    company:String,
    date:String,
    lianXi:String,
})    
const gen = mongoose.model('genJin',genSchema,)

// 销售线索
const marketSchema = new mongoose.Schema({
    name:String,
    lianXi:String,
    tel:String,
    guiShu:String,
    state:String,
    lastTime:String,
    key:String
})    
const market = mongoose.model('market',marketSchema,)
module.exports = {
    gongDan, //快捷菜单/全部工单
    teacher, //测试
    user,   //登陆
    quickClient, //客户列表
    gen, //跟进记录
    market, //销售线索
}

/*

数据库的创建和删除
创建是隐式的创建，use（使用）一个不存在的数据库时，会自动创建
user aaa
db.createCollection("aaa")

删除数据库
db.dropDatabase()

	增加数据
增加一条：
db.name.insertOne({_id:1,name:'lisi'})
id:系统默认创建；_id:自由创建
插入多条：da.name.insertMany([{},{},{}])
重复的_id会报错

save 重复的覆盖

	删除	
删除一个：db.name.deleteOne(查询表达式)
表达式同find（）

	修改
更新一条数据 ：db.name.updateOne({查询表达式}，{原子表达式})
db.name.updateOne({name:'lisi'},{$set:{age:10}})
$set 设置/添加某项的值
$unset  删除某字段
updataMany({},{$inc:{age:1}})
$inc age字段增加了1（正数是增长，负数是减少）
{$rename:{age:ages}} 重命名

*/
