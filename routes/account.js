var express = require('express');
var router = express.Router();
/* GET search page. */

router.get('/search', function(req, res, next) {

    res.render('search', { data:{ titleView: 'Search Page',customer: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

router.get('/newsfeed', function(req, res, next) {
    res.render('newsfeed', { data:{ titleView: 'NewsFeed Page',customer: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

router.get('/blocked', function(req, res, next) {
    res.render('blockedaccounts', { data:{ titleView: 'Blocked Users Page',customer: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

router.get('/update', function(req, res, next) {
    res.render('editprofile', { data:{ titleView: 'Update Profile Page',customer: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

module.exports = router;