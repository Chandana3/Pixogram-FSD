const mongoose = require('mongoose');
const Followers = mongoose.model('Followers', new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

   followUserId: {
       type: String,
       required: true,
   }

}));

exports.Followers = Followers;
