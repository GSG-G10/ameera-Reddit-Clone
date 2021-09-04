const express = require('express');
const app = express();
const { join } = require('path');
const router = require("./routes/router.js");
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));
app.set('PORT', process.env.PORT || 3000);
app.use(express.static(join(__dirname, '..', 'public')))
app.use(router);


module.exports = app;