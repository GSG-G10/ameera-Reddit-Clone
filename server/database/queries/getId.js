const connection = require('../connection.js');

const getId = (email) => {
    return connection.query("select id from users where email=$1", [email]);
}

module.exports = getId;