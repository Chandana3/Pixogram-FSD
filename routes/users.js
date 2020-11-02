var express = require('express');
var router = express.Router();
var uploader = require("../utility/uploader");
var passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;


var fs = require('fs');
const {Customer, validate} = require('../models/users');

/* GET users Details. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* User Login. */
router.get('/login', function(req, res, next) {
res.render('login', {data:{ titleView: 'Login Page'}});

});

/* User Sign Up */
router.get('/signup', function(req, res, next) {
  res.render('signup', {data:{ titleView: 'Sign Up Page'}});
});

router.get('/updateUser', async function(req, res, next) {
  console.log("after authorized");
  let customer = await Customer.findById({_id:'5f8976531c9e70234003a28a'});
  console.log('Display Customer with ID'+ customer);
  res.render('editprofile', {data:{ titleView: 'Update Profile Page',customer: customer}});
});



router.post('/add-user',uploader.single('profilePicture'), async (req, res) => {

  console.log("inside post method");
  let passwd='';
  console.log(req.body.passwd);
    bcrypt.hash(req.body.passwd, saltRounds, function(err, hash) {

        passwd = hash;
      console.log("hashing done");
      console.log(passwd);
      let customer = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        username: req.body.userName,
        emailid: req.body.email,
        dateofbirth: req.body.dateofBirth,
        password: passwd,

        
        profilepic: {
          imgdata: new Buffer.from(fs.readFileSync(req.file.path), 'base64'),
          contentType: req.file.mimetype
        }

      };
      console.log("customer initialized");
      Customer.create(customer, (err, item) => {
        if (err) {

          console.log(err);
          res.render('index', { data:{ titleView: 'Welcome Page'}, data: { customer } });
        }
        else {
          res.render('index', { data:{ titleView: 'Welcome Page'}, data: { customer } });
        }});


    });

});

/* User Login. */
router.post('/login', async function(req, res, next) {
  let loginid= req.body.loginId;
  let passwd = req.body.passwd;
  Customer.findOne({ username: loginid }, function (err, customer) {
    if (!!customer) {
      bcrypt.compare(passwd, customer.password, function(err1, result) {
        if(!!result) {
          let resstr="";
          resstr=require(__dirname + '/../utility/token')( customer , resstr);
          res.render('index', {data:{ titleView: 'Welcome Page',customer: customer, token: resstr}});

        }
        else {
          res.render('login', {data:{ titleView: 'User Login Page',errormsg:'Invalid credentials'}});


        }
    });
    } else
      res.render('login', {data:{ titleView: 'User Login Page',errormsg:'Invalid credentials'}});

  });

});

router.put('/update-user', async (req, res) => {

  const customer = await Customer.findByIdAndUpdate(req.params.id,
      {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        emailid: req.body.email,
        dateofbirth: req.body.dateofBirth,
        profilepic: req.body.profilePicture,

      }, { new: true });
  if (!customer) return res.status(404).send('The customer with the given ID was not found.');
  res.send(customer);
  res.redirect('/');
});


module.exports = router;
