const Koa = require('koa')
const app = new Koa()
const response = require('./middleware/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const path = require('path')
const ip = require("ip")
const staticFiles = require('koa-static')

const miSend = require('./middleware/mi-send')
const miLog = require('./middleware/mi-log')

// 引入规则中件间
const miRule = require('./middleware/mi-rule')

// 使用响应处理中间件
app.use(response)
app.use(miLog({
  env: app.env,
  projectName: 'koa2',
  appLogLevel: 'debug',
  dir: 'logs',
  serverIp: ip.address()
}));

app.use(staticFiles(path.resolve(__dirname, "../public")))

app.use(miSend())

miRule({
  app,
  rules: [
    {
      path: path.join(__dirname, '/controller'),
      name: 'controller'
    },
    {
      path: path.join(__dirname, '/service'),
      name: 'service'
    }
  ]
})

// 增加错误的监听处理
app.on("error", (err, ctx) => {
  if (ctx && !ctx.headerSent && ctx.status < 500) {
    ctx.status = 500
  }
  if (ctx && ctx.log && ctx.log.error) {
    if (!ctx.state.logged) {
      ctx.log.error(err.stack)
    }
  }
}) 
// 解析请求体
app.use(bodyParser())

const router = require('./routers')
// 引入路由分发
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => console.log(`listening on port ${config.port}`))
