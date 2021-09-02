const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
    bcrypt.hash(password, 10);

}
const comparePassword = bcrypt.compare(password, hashPassword);

module.exports = {
    hashPassword,
    comparePassword
}