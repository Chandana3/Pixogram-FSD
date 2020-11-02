const mongoose = require('mongoose');
const Newsfeed = mongoose.model('Newsfeed', new mongoose.Schema({
    mediaId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    postedDateTime: {
        type: Date,
        required: true,
    },

}));

exports.Newsfeed = Newsfeed;