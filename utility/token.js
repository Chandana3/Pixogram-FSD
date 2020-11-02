
const {Customer} = require('../models/users');
let jwt = require('jsonwebtoken');
const jwtOptions = require('./jwt-options');


module.exports = function(customer, res){
    console.log(customer);
    if(!!customer){
        var payload = {id: customer._id, username: customer.username, email: customer.emailid};

        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        res=token;
        return token;
        

    } else {
        res="";
    }

}
