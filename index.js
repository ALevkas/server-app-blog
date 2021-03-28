const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://app-blog:qwerty1@cluster0.xksul.mongodb.net/app_blog?retryWrites=true&w=majority'
        );
        app.listen(PORT, () => console.log('server started in port' + PORT));
    } catch (e) {
        console.log(e);
    }
};

start();
