const router = require('koa-router')();
const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog');


router.prefix('/api/blog')

// 播客列表
router.get('/list', async function (ctx, next) {
    const result = getList();
    return result.then(listData => {
        ctx.body = listData;
    }).catch(err => {
        console.error(err);
    })
});
// 播客详情
router.get('/detail', async function (ctx, next) {
    const result = getDetail(1);
    return result.then(detailData => {
        ctx.body = detailData;
    });
});
// 增加新播客
router.post('/new', async function (ctx, next) {
    const result = newBlog(ctx.request.body);
    return result.then(data => {
        // ctx.body = data;
        console.log(`添加播客成功：${data}`);
    });
});
// 更新播客
router.post('/update', async function (ctx, next) {
    const result = updateBlog(6, ctx.request.body);
    return result.then(val => {
       console.log(`更新播客是否成功了：${val}`);
    });
});
// 删除播客
router.post('/del', async function (ctx, next) {
    const result = delBlog(8, 'wangwu');
    return result.then(val => {
        console.log(`删除播客是否成功：${val}`);
    });
});

module.exports = router
