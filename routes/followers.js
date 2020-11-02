var express = require('express');
var router = express.Router();
var passport = require('passport');
const userController = require('../controllers/users');

const {Followers} = require('../models/followers');
const {Customer} = require('../models/users');
router.get('/:userId', async function(req, res, next) {

    const followers = await Followers.find({userId: req.params.userId});
    console.log('Customer'+followers);

    if (followers.length==0) {
        console.log('No followers found');
    
        res.render('followers', { data:{ titleView: 'Followers Page', customer: { _id:req.params.userId }, followers: followers  } });


    }
    else {
        console.log('Inside get followers');
        let followIDs=[];
        for (let i=0;i<followers.length;i++)
            followIDs.push(followers[i].followUserId);


        console.log(followIDs);
        userController.getUsers(followIDs,function(err,cust){
            res.render('followers', { data:{ titleView: 'Followers Page', customer: { _id:req.params.userId }  , followers: followers, users:cust } });

        })


}});

router.post('/add-follower',async function(req, res, next) {
console.log(req.body);
console.log("inside add follower");

    const customer = await Customer.find({userId: req.body.followeruserId });
    console.log('Customer'+customer);
    if (!!customer) {
        let follower = {
            userId: req.body.userId,
            followUserId: req.body.followeruserId,
        };
        console.log("Follower initialized");
        Followers.create(follower, (err, item) => {
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

router.delete(':userId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Followers.deleteMany({userId:req.params.userId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});

router.delete(':userId/:followUserId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Followers.deleteOne({userId:req.params.userId, followUserId:req.params.followUserId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});


module.exports = router;

