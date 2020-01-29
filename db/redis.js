const redis = require('redis');
const { REDIS_CONF } = require('../conf/db');
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

const set = (key, val) => {
    if (typeof val === 'object') {
        val = JSON.stringify(val);
    }
    redisClient.set(key, val, redis.print);
};

const get = (key) => {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err);
                return;
            }
            if (val === null) {
                resolve(null);
                return;
            }
            try {
                resolve(JSON.stringify(val));
            } catch (e) {
                resolve(val);
            }
        })
    });
    return promise;
};

module.exports = {
    set,
    get
};