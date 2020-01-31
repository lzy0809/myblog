const { ErronModel } = require('../model/resModel');

module.exports = async (ctx, next) => {
    console.log(`前置校验：${JSON.stringify(ctx.session)}`);
    if (ctx.session.username) {
        await next();
        return ;
    }
    ctx.body = new ErronModel('用户未登录');
};