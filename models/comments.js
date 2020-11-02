const mongoose = require('mongoose');
const Comments = mongoose.model('Comments', new mongoose.Schema({
    newsfeedId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

}));

exports.Comments = Comments;