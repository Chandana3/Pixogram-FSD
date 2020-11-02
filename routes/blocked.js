var express = require('express');
var router = express.Router();
var passport = require('passport');

const {Blockedusers} = require('../models/blockedusers');
const {Customer} = require('../models/users');
router.get('/:userId', async function(req, res, next) {

    const blockers = await Blockedusers.find({userId: req.params.userId});
    console.log('Customer'+blockers);

    if (blockers.length==0) {
        console.log('No blockers found');
        res.send({success: false,  message: "No blockers found"});
        //res.end();



    }
    else {
        console.log('Inside get blockers');
        res.send({success: true, data: { blockers }});
        //res.end();
        //res.send(customer);

    }});

//router.post('/add-follower',passport.authenticate('jwt', { session: false }),async function(req, res, next) {
router.post('/add-blocker',async function(req, res, next) {
    console.log(req.body);
    console.log("inside add blocker");

    const customer = await Customer.find({userId: req.body.blockedUserId });
    console.log('Customer'+customer);
    if (!!customer) {
        let blockers = {
            userId: req.body.userId,
            blockedUserId: req.body.blockedUserId,
        };
        console.log("Follower initialized");
        Blockedusers.create(blockers, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                // item.save();
                res.redirect('/');
            }});

    }




});

router.delete('/:userId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Blockedusers.deleteMany({userId:req.params.userId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});


module.exports = router;

