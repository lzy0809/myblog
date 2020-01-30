const { ErrorModel } = require('../model/resModel');

module.exports = async (ctx, next) => {
    console.log(`新增加播客1111`);
    if (ctx.session.username) {
        await next();
        return ;
    }
    console.log(`新增加播客3333`);
    ctx.body = new ErrorModel('用户未登录');
};