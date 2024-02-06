const Koa = require("koa");
const app = new Koa();
const cors = require("koa2-cors");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const router = require('./router')
// const Router = require("koa-router");
// const {user} = require("./model/mongodb.js")
app.use(
  cors(
    // {
    // origin: function (ctx) {
    //   //设置允许来自指定域名请求
    //   if (ctx.url === "/test") {
    //     return "*"; // 允许来自所有域名请求
    //   }
    //   // return "*";
    //   return "http://localhost:5173"; //只允许http://localhost:8080这个域名的请求,前端的请求,也就是前端启动项目的协议域名端口号
    // },
  //   maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  //   credentials: true, //是否允许发送Cookie
  //   allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
  //   allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
  //   exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  // }
  )
);
app.use(logger());
app.use(bodyParser());


// const router = new Router();

// 定义路由
// 获取数据的接口
// router.get("/getData", async (ctx, next) => {
//   let data = await user.find();
//   console.log(data,36);
//   ctx.body = {
//     lis: data,
//   };
// });
// 添加数据接口
// router.post("/addData", async (ctx, next) => {
//   let postData = ctx.request.body;
//   await teacher.create(postData)
//     .then((data) => {
//       ctx.body = {
//         code: 200,
//         msg: "添加成功",
//       };
//     })
//     .catch((error) => {
//       ctx.body = {
//         code: 500,
//         msg: "添加失败",
//       };
//     });
// });
// 删除数据接口
// router.get("/removeItem/:_id", async (ctx, next) => {
//   let { _id } = ctx.params;
//   await teacher.deleteOne({ _id: _id })
//     .then((data) => {
//       ctx.body = {
//         code: 200,
//         msg: "删除成功",
//       };
//     })
//     .catch((error) => {
//       ctx.body = {
//         code: 500,
//         msg: "删除失败",
//       };
//     });
// });
// 修改数据接口
// router.get("/editItem/:_id", async (ctx, next) => {
//   let { _id } = ctx.params;
//   console.log(_id);
//   await teacher.findOne({ _id: _id })
//     .then((data) => {
//       ctx.body = {
//         code: 200,
//         msg: "查询成功",
//         data: data,
//       };
//     })
//     .catch((error) => {
//       ctx.body = {
//         code: 500,
//         msg: "查询失败",
//       };
//     });
// });
// router.post("/setState", async (ctx, next) => {
//   let postData = ctx.request.body;
//   await teacher.updateOne({ _id: postData._id }, postData)
//     .then((data) => {
//       ctx.body = {
//         code: 200,
//         msg: "修改成功",
//       };
//     })
//     .catch((error) => {
//       ctx.body = {
//         code: 500,
//         msg: "修改失败",
//       };
//     });
// });

// 使用路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
})    