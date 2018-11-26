const Koa = require('koa');
const fs = require('fs')
const app = new Koa();

const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
	let html = `
	<ul>
		<li><a href="/page/helloworld">/page/helloworld</a></li>
		<li><a href="/page/404">/page/404</a></li>
	</ul>
	`
	ctx.body=html
})

router.get('/1',async (ctx)=>{
	ctx.body = '404 page!'
})

app.use(router.routes()).use(router.allowedMethods());


// response
app.use(ctx => {
	ctx.body = 'Hello Ksoa';
});

app.listen(3000);