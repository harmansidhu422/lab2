var express = require('express');

var router = express.Router();

var locals= {
    name: 'Harmanpreet Singh Sidhu',
    program:'Computer Programmer',
    age:'21',
    aboutme:'Currently i pursuing my studies at Georgian College. I am very good web developer. I am Social Person.I am just 21 Years old ' +
        '. I am very passionate about Gym.'
};

router.get('/', function(req, res, next) {
    res.render('index', locals);
});

module.exports = router;
