const connection = require('../connection.js');
const insert = (name, username, email, hashing) => {
    console.log("insert");
    return connection.query("insert into users(name,username, email, password) values($1,$2,$3,$4)", [name, username, email, hashing]);



}


module.exports = insert;