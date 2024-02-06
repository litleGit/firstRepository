### koa2 框架搭建服务器且连接 mongodb 数据库,步骤解析
### 注：该程序未使用脚手架进行创建,因为不想创建的太麻烦,所以偷懒☻☺
#### (1):Koa2 搭建服务器首先初始化项目

```js
    npm init -y
```

#### (2).安装 Koa2

```js
    // 安装Koa2
    npm install koa --save
```

#### (3).项目根目录新建 index.js

```js
// 这是最基本的服务
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  ctx.body = "<h1>Hello world</h1>";
});
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
```
#### 注:这时你可以使用前端的插件axios 或 ajax 请求这个后端启动的接口了http://127.0.0.1:3000,只不过你这时没有数据
#### (4).本地安装 mongodb 数据库软件:https://www.mongodb.com/zh-cn

##### (4.1).在项目根目录下创建 data 文件夹,之后在项目根目录的 data 文件下创建 db 文件夹:文件夹目录结构/data/db/

```js
├── node_modules/        # 项目依赖的 node 模块
├── index.js             # 根,核心中枢文件
├── data/                # 数据库存管数据的文件夹
│   └── db/              # 数据库数据的存取文件
├── package-lock.json    # 项目版本信息控制文件
├── package.json         # 项目配置文件
└── README.md            # 项目说明文件
```

##### (4.2).安装 mongoose

```js
    npm i mongoose --save
```

##### (4.3).创建数据库配置文件(含创建 model 文件夹，schema 文件夹，数据库模型文件 index.js):文件夹目录结构
```js
├── node_modules/        # 项目依赖的 node 模块
├── index.js             # 根,核心中枢文件
├── data/                # 数据库存管数据的文件夹
│   └── db/              # 数据库数据的存取文件夹
├── model/               # 数据库模型的存放文件夹
    └── schema/          # 数据库schema模型配置文件夹
        └──index.js      # 数据库schema模型配置的信息
├── package-lock.json    # 项目版本信息控制文件
├── package.json         # 项目配置文件
└── README.md            # 项目说明文件
```
<!-- ##### (4.4).安装npm install --save bcrypt:注:这是一个安装 bcrypt 模块的命令，它对密码进行加密和验证，可用于增强应用程序的安全性。 -->

##### (4.4).安装koa2的依赖包

![1704802893667](img\1704802893667.png)




##### (4.5).书写根目录index.js的含启动数据库,前后端交互,启动后端框架.......


## (注):如果真的是在看不懂就问AI,一段一段复制问哦☺
## 下面是一些解决你使用该程序需要看的一些图片

![1704803836000](img\1704803836000.png)
前端启动项目的地址号是什么,这就改成什么地址号

#############################################################################

![1704803883000](img\1704803883000.png)

![1704803905187](img\1704803905187.png)



![1704803929392](img\1704803929392.png)

#### 注：以下为两个核心,该程序的关键核心所在,最好是理解。
#### 注：该程序的核心在于,前端需要使用后端框架启动服务时的地址号,后端呢需要使用跨域koa2-cors,来设置前端启动项目时的地址号,
#### 注：数据库mongodb的话就是,建议启动数据库mongodb的操作和启动后端框架的操作在一个文件夹内,数据库mongodb必须创建schema数据模型,之后在使用其操作

#### 文件目录结构图:(注):不需要看这个,作者:张，自己弄着玩的,跟上面无关紧要

```js
├── node_modules/        # 项目依赖的 node 模块
├── index.js             # 公共资源目录
│   ├── favicon.ico      # 网页图标
│   └── index.html       # html模板（单页面应用）
├── src/                 # 源代码目录
│   ├── assets/          # 静态资源文件夹，如图片、字体等
│   ├── components/      # 公共组件
│   ├── router/          # 路由文件夹
│   ├── store/           # Vuex状态管理文件夹
│   ├── views/           # 视图层组件
│   ├── App.vue          # Vue 根组件，也是整个应用的入口
│   └── main.js          # Vue 实例化入口文件，也是整个应用的入口
├── package-lock.json    # Babel 配置文件
├── package.json         # 项目配置文件
└── README.md            # 项目说明文件
```
