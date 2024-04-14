
const mongoose = require('mongoose');
require('./users');

const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const model = mongoose.models.Message || mongoose.model('Message', schema);

export default model;
