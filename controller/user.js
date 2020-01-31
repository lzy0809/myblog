const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryp');

const login = async (username, password) => {
    username = escape(username);
    // 生成加密密码
    // password = genPassword(password);
    password = escape(password);
    const sql = `select username, password from users where username='${username}' and password='${password}';`;
    const rows = await exec(sql);
    console.log(`用户名：${username}~~加密后的密码：${password}~~~~返回值：${JSON.stringify(rows)}`);
    return rows[0] || {};
};

module.exports = {
    login
};