const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../connection');

const builtDb = () => {
    const sql = readFileSync(join(__dirname, 'built.sql')).toString();
    return connection.query(sql).then((result) => { console.log("built db successfully") }).catch((err) => { console.log("there is eero in built db") })
}
builtDb();
module.exports = builtDb;