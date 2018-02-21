var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/owlist', ['projectnames']);

// Get All projectnames
router.get('/projectnames', function(req, res, next){
    db.projectnames.find(function(err, projectnames){
        if(err){
            res.send(err);
        }
        res.json(projectnames);
    });
});

// Get Single projectname
router.get('/projectname/:id', function(req, res, next){
    db.projectnames.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, projectname){
        if(err){
            res.send(err);
        }
        res.json(projectname);
    });
});




module.exports = router;