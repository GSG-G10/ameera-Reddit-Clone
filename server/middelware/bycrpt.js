const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);

}
const comparePassword = (password) => {
    bcrypt.compare(password, hashPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}