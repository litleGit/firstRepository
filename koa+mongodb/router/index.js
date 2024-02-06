

const Router = require("koa-router");
const {gongDan,teacher,user, quickClient,gen,market} = require('../model/mongodb')
const router = Router()

// 获取测试全部数据
router.get('/text',async (ctx,next)=>{
    let res =await teacher.find()
    ctx.body = res
})
// 获取工单全部数据
router.get('/gongdan',async (ctx,next)=>{
    let res =await gongDan.find()
    ctx.body = res
})
// 获取登录全部数据
router.get('/user',async (ctx,next)=>{
    let res =await user.find()
    ctx.body = res
})
//获取客户列表
router.get('/quickClient',async (ctx,next)=>{
    let res =await quickClient.find()
    ctx.body = {
        code:200,
        res
    }
})
router.post('/quickClientAdd',async (ctx,next)=>{
    let res =await quickClient.create(ctx.request.body)
    console.log(res);
    ctx.body={
        code:200,
        msg:'添加成功'
    }
})
router.post('/quickClientUpdate',async (ctx,next)=>{
    await quickClient.updateOne(
        {
            name:ctx.request.body.name
        },
        {
            $set:{lastTime:ctx.request.body.lastTime}
        }
    )
    ctx.body={
        code:200,
        msg:'更新成功'
    }
})
router.post('/quickClientDel',async (ctx,next)=>{
    await quickClient.deleteOne({_id:ctx.request.body._id})
    ctx.body={
        code:200,
        msg:'删除成功'
    }
})
// 跟进记录
router.post('/genJinAdd',async (ctx,next)=>{
    let res =await gen.create(ctx.request.body)
    ctx.body={
        code:200,
        msg:'添加成功'
    }
})

// 销售线索
router.get('/market',async (ctx,next)=>{
    let res =await market.find()
    ctx.body = res
})
module.exports = router