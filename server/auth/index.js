'use strict';

var express = require('express');
var config = require('../config/environment');
var User = require('../api/v1/user/user.model');

// Passport Configuration
require('./local/passport').setup(User, config);

var router = express.Router();
router.use('/local', require('./local'));

module.exports = router;