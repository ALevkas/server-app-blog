const { Schema, model } = require('mongoose');

const Post = new Schema({
    userId: { type: Number },
    title: { type: String, required: true },
    content: { type: Number, required: true },
    comments: [{ type: String }],
});

module.exports = model('Post', Post);
