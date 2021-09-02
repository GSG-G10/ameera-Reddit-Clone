const { join } = require('path');
moduale.exports = (req, res) => {
    res.sendfile(join(__dirname, "..", "..", "public", "main.html"))
}