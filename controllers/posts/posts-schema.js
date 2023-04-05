import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    post: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    dislikes: Number,
    disliked: Boolean,
}, {collection: 'posts'});
export default postSchema;