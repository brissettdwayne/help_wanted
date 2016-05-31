var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {title: "Help Wanted"})
})

module.exports = router;
