var express = require('express');
var router = express.Router();

var Posting = require('../../models/posting');

router.get('/', function(req, res, next){
  Posting.find(function(err, response){
    res.json({postings: response});
  })
});

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  Posting.findById(id, function(err, response){
    if(err){
      res.status(404).end()
    } else {
      res.json(response);
    }
  })
});

router.post('/', function(req, res, next){
  if(!req.body.posting){
    res.status(422).end();
  } else{
    Posting.create(req.body.posting, function (err, posting){
      res.json(posting);
    })
  }
});

router.put('/:id', function(req, res, next){
    console.log("Put working!");
    var id = req.params.id;
    Posting.findByIdAndUpdate(id, req.body.posting, {new: true}, function(err, postings){
      res.json(posting);
    });
  });

router.delete('/:id', function(req, res, next){
    var id = req.params.id;
    Posting.findByIdAndRemove(id, function(err){
      if (err) {
        res.status(500).end();
      } else {
        res.status(204).end();
      }
    })
});

module.exports = router;
