var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.FOO);
  console.log(process.env.BAR);
  console.log(process.env.BAZ);
  res.render('index', { title: `${process.env.FOO} ${process.env.BAR} ${process.env.BAZ}`});
});

module.exports = router;
