/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/koa'
})
const controller = require('../controller')
router.get('/', controller.home.index)
router.get('/test', controller.home.test)
module.exports = router