const mongoose = require('mongoose');
require('./users');
require('./message');

const schema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        to: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        messages: {
            type: [mongoose.Types.ObjectId],
            ref: 'Message',
            required: true,
        },
    },
    { timestamps: true }
);

const model = mongoose.models.Chat || mongoose.model('Chat', schema);

export default model;
