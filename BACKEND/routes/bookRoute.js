const express = require('express');
const getBook = require('../controller/bookController');

const router = express.Router();

router.get("/", getBook)

module.exports = router