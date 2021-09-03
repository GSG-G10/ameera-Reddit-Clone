const connection = require('../connection.js');
const check = (email, res) => {

    connection.query(" select * from users where email=$1", [email]).then((result) => {

        if (result.rows.length > 0) {
            res.send(`<h1> this email is connected with anther account<h1>`)
        }
    }).catch((err) => { res.send(err.message) });
}


module.exports = check;