const jwt = require("jsonwebtoken");
require("env2")("./.env");
const { secert_key } = process.env;

const token = (id) => {
    console.log("inside token")
    return jwt.sign({ id }, secert_key);
}

module.exports = token;