const express = require('express');
const app = express();
const { router } = require("./routes/router");
app.set('PORT', process.env.PORT || 3000);
app.use(router);


module.exports = app;