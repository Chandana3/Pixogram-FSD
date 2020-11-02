const mongoose = require('mongoose');
const Customer = mongoose.model('Customer', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    emailid: {
        type: String,
        required: true,
    },

    dateofbirth: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },


    profilepic: {
        imgdata: Buffer,
        contentType: String,


    }


}));



function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(30).required(),
        phone: Joi.string().min(5).max(30).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}
exports.Customer = Customer;
exports.validate = validateCustomer;