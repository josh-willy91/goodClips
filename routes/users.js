const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/users', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
