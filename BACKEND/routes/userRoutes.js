const express = require('express')
const router = express.Router()
const signUp  = require("../controller/userControllerSignup")
const Login = require("../controller/userControllerLogin")


router.post("/signup",signUp)
router.post("/login", Login)

module.exports = router