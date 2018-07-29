"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = {
    Query: {
        users: (parent, { first = 10, offset = 0 }, { db }, info) => {
            return db.User.findAll({
                limit: first,
                offset: offset
            });
        },
        user: (parent, { id }, { db }, info) => {
            return db.User.findById(id).then((user) => {
                if (!user)
                    throw new Error(`User with id ${id} not found`);
                return user;
            });
        }
    }
};
