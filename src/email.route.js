const express = require('express');
const router = express.Router();
const emailController = require('./email.controller.js');
router.post('/emailSend', emailController.emailSending);

module.exports = router;