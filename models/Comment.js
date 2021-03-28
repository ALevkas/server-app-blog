const { Schema, model } = require('mongoose');

const Comment = new Schema({
    userId: { type: Number },
    postId: { type: String, required: true },
    content: { type: Number, required: true },
});

module.exports = model('Comment', Comment);
