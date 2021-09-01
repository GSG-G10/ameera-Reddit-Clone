const { Pool } = require("pg");
require("env2")("./.env");
const { NODE_ENV, URL_DB, DATABASE_URL, TEST_DB } = process.env;

let UrlDb = "";
switch (NODE_ENV) {
    case 'development':
        UrlDb = URL_DB;
        break;
    case 'production':
        UrlDb = DATABASE_URL;
        break;
    case 'test':
        UrlDb = TEST_DB;
        break;
    default:
        throw new Error('There\'s no environment');
}
const option = {
    connectionString: UrlDb,
    ssl: {
        rejectUnauthorized: false,
    },
}

module.exports = new Pool(option);