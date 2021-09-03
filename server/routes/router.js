const router = require('express').Router();
const mainPage = require('../controllers/mainPage.js');
const signup = require('../controllers/sign.js');


router.get("/", mainPage);
router.post('/sign-up', signup);





module.exports = router;