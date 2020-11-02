const {Customer} = require('../models/users');

exports.getUser = (id,cb) => {
    let customer = Customer.findById({_id:id});
    cb(false,customer);

    };


exports.getUsers = async (id,cb) => {

    let customer=[];
    for (let i=0;i<id.length;i++) {
        console.log(id[i]);
        let cust = await Customer.findById({_id:id[i]});
        console.log(cust);
        customer.push(cust);
    }
    cb(false,customer);
};