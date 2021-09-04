const jwt = require("jsonwebtoken");
require("env2")("./.env");
const { secert_key } = process.env;

const requirAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, secert_key).then(() => { next(); })
            .catch((err) => { res.redirect('/loginPage'); });
    } else {
        res.redirect('/loginPage');
    }
}

module.exports = requirAuth;