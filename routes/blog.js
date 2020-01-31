const router = require('koa-router')();
const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog');
const { SuccessModel, ErronModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

router.prefix('/api/blog');

// 播客列表
router.get('/list', async (ctx, next) => {
    console.log(`开始请求播客列表了`);
    let author = ctx.query.author || '';
    const keyword = ctx.query.keyword || '';
    if (ctx.query.isadmin) {
        console.log(`是管理员`);
        if (ctx.session.username == null) {
            // 未登录
            ctx.body = new ErronModel('未登录');
            return ;
        }
        // 强制查询自己的播客
        author = ctx.session.username;
    }
    const listData = await getList(author, keyword);
    ctx.body = new SuccessModel(listData);
});
// 播客详情
router.get('/detail', async (ctx, next) => {
    const detailData = await getDetail(ctx.query.id);
    ctx.body = new SuccessModel(detailData);
});
// 增加新播客
router.post('/new', loginCheck, async (ctx, next) => {
    console.log(`新增加播客2222`);
    const body = ctx.request.body;
    body.author = ctx.session.username;
    const newData = await newBlog(body);
    console.log(`呵呵：${JSON.stringify(newData)}`);
    ctx.body = new SuccessModel(newData);
});
// 更新播客
router.post('/update', loginCheck, async (ctx, next) => {
    const val = await updateBlog(ctx.query.id, ctx.request.body);
    ctx.body = val ? new SuccessModel() : new ErronModel('更新播客失败');
});
// 删除播客
router.post('/del', loginCheck, async (ctx, next) => {
    const val = await delBlog(ctx.query.id, ctx.session.author);
    ctx.body = val ? new SuccessModel() : new ErronModel('删除播客失败');
});

module.exports = router;
