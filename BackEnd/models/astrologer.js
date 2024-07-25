const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astrologerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    expertise: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        required: true,
    },
    charges: {
        type: String,
        required: true,
    },
    language: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        required: false,
    }
}, { timestamps: true });

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

module.exports = Astrologer;
