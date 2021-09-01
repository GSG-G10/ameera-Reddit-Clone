const express = require('express');
const app = express();

app.set('PORT', process.env.PORT || 3000);


module.exports = app;