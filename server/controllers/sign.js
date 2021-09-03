const schema = require("../utills/serverValdition.js")

const signup = (req, res) => {
    const { username, email, password, repeat_password } = req.body;
    // console.log(username, email, password)
    //server side validation
    schema.validateAsync(req.body).then((result) => { console.log(result) }).catch((err) => { res.send(err.message) })


};
module.exports = signup;