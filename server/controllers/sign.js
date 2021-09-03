const schema = require("../utills/serverValdition.js");
const insert = require("../database/queries/insertUser.js");
const { hashPassword } = require("../middelware/bycrpt.js");
const check = require("../database/queries/checkemailisEXsit.js");

const signup = (req, res) => {
    const { username, email, password, repeat_password } = req.body;

    //server side validation
    schema.validateAsync(req.body).then(() => {
        check(email, res);
    }).then(() => {
        return hashPassword(password);
    }).then((hashing) => {
        console.log(hashing);
        insert(username, username, email, hashing);
    }).catch((err) => { res.send(err.message) });
    //checkemailisEXsit

    //hash passwared + insert to db






};
module.exports = signup;