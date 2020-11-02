const mongoose = require('mongoose');
const Media = mongoose.model('Media', new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    mediatitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },

    effects: {
        type: String,
        required: true,
    },


    media: {
        imgdata: Buffer,
        contentType: String,


    }


}));

exports.Media = Media;