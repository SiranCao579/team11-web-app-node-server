import usersModel from "./users-model.js";

export const findAllUsers = () => {
    return usersModel.find();
};

export const findUserById = (id) => {
    return usersModel.findById(id);
};

export const findUserByUsername = (userName) => {
    return usersModel.findOne({userName});
};

export const findUserByCredentials = (userName, password) => {
    return usersModel.findOne({userName, password});
};

export const deleteUser = (id) => {
    return usersModel.deleteOne({_id: id});
};

export const createUser = (user) => {
    return usersModel.create(user);
};

export const updateUser = (id, user) => {
    return usersModel.updateOne({_id: id}, user);
};
