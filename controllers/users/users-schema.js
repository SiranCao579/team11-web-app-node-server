import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    skills: String,
    bio: String,
    role: {type: String, default: "USER", enum: ["USER", "RECRUITER", "ADMIN"]}
}, {collection: 'users'});
export default userSchema;


