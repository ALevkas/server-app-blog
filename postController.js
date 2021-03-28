const Post = require('./models/Post');
const Comment = require('./models/Comment');

class postController {
    async getPosts(req, res) {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Posts error' });
        }
    }

    async createPost(req, res) {
        try {
            const { userId, title, content } = req.body;
            const post = new Post({ userId, title, content });
            await post.save();
            return res.json({
                message: 'Пост успешно создан',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Posts create error' });
        }
    }

    async getComments(req, res) {
        try {
            const { id } = req.body;
            const post = await Post.findOne({ _id: id });
            res.json(post.comments);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Posts comments error' });
        }
    }

    async createComment(req, res) {
        try {
            const { userId, postId, content } = req.body;
            const comment = new Comment({ userId, postId, content });

            const post = await Post.findOne({ _id: postId });
            post.comments.push(comment._id);

            await comment.save();
            await post.save();

            return res.json({
                message: 'Комментарий успешно создан',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Comment create error' });
        }
    }
}

module.exports = new postController();
