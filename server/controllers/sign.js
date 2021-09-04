const schema = require("../utills/serverValdition.js");
const insert = require("../database/queries/insertUser.js");
const { hashPassword } = require("../middelware/bycrpt.js");
const check = require("../database/queries/checkemailisEXsit.js");
const creattoken = require("./token.js");
const getId = require("../database/queries/getId.js");

const signup = (req, res) => {
    const { username, email, password, repeat_password } = req.body;

    //server side validation
    //checkemailisEXsit
    //hash passwared + insert to db
    schema.validateAsync(req.body).then(() => {
            check(email, res);
        }).then(() => {
            return hashPassword(password);
        }).then((hashing) => {

            insert(username, username, email, hashing);
        }).then(() => {
            return getId(email)
        }).then((result) => {
            const token = creattoken(result.rows[0].id);
            res.cookie("jwt", token, { maxAge: 900000 });
            // res.redirect('/profile');

        })
        .catch((err) => { res.send(err.message) });

    res.redirect('/profile');


};
module.exports = signup;