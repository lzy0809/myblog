const router = require('koa-router')();
const { loginCheck } = require('../controller/user');

router.prefix('/api/user');

router.post('/login', async function (ctx, next) {
    const { username, password } = ctx.request.body;
    const result = loginCheck(username, password);
    return result.then(loginData => {
        if (loginData.username.length > 0) {
            ctx.body = {
                msg: '登录成功了'
            }
        }
    });
});

router.get('/session-test', async function (ctx, next) {
   if (ctx.session.viewCount == null) {
       ctx.session.viewCount = 0;
   }
   ctx.session.viewCount++;
   ctx.body = {
       errno: 0,
       viewCount: ctx.session.viewCount
    }
});

module.exports = router
