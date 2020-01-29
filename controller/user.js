const exec = require('../db/mysql');

const loginCheck = (username, password) => {
    const sql = `select username, password from users where username='${username}' and password='${password}';`;
    return exec(sql).then(rows => {
        if (rows.length > 0) {
            return rows[0];
        } else {

        }
    });
};

module.exports = {
    loginCheck
};