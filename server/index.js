const app = require('./app.js');

app.listen(app.get('PORT'), () => {
    console.log(` server strat at   http://localhost:${app.get('PORT')}`);
})