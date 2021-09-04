const router = require('express').Router();
const { join } = require('path');
const mainPage = require('../controllers/mainPage.js');
const signup = require('../controllers/sign.js');
const profile = require('../controllers/profile.js');
const requirAuth = require('../middelware/auth.js');
const signuppage = require('../controllers/signUPpage');
const loginPage = require('../controllers/loginPage.js');


router.get("/", mainPage);
router.get('/signUpPage', signuppage);
router.get('/loginPage', loginPage);
router.post('/sign-up', signup);
router.get('/profile', requirAuth, profile);





module.exports = router;