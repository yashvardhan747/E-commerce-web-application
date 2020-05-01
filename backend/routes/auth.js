const { check, validationResult } = require('express-validator');
var express = require('express');
var router = express.Router();

const {signout, signup, signin} = require("../controllers/auth");

router.post("/Signup", [
    check('name').isLength({ min: 3 }).withMessage('name must be at least 3 chars long'),
    check('email').isEmail().withMessage('please provide the valid email'),
    check('password').isLength({ min: 5 }).withMessage('password must be at least 5 chars long')], signup);
router.get("/Signout", signout);

router.post("/Signin", [
    check('email').isEmail().withMessage('please provide the valid email'),
    check('password').isLength({ min: 1 }).withMessage('to signin please provide the password')], signin);

router.get("/Signout", signout);

module.exports = router;