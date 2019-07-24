var express = require('express');
var router = express.Router();
var { User, } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.send(users);
});

module.exports = router;
