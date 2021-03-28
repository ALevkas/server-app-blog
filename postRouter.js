const Router = require('express');
const router = new Router();
const controller = require('./postController');

router.get('/posts', controller.getPosts);
router.get('/comments', controller.getComments);
router.get('/comment', controller.getComment);
router.post('/create', controller.createPost);
router.post('/createComment', controller.createComment);

module.exports = router;
