"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserLoader {
    static batchUsers(User, ids) {
        return Promise.resolve(User.findAll({
            where: { id: { $in: ids } }
        }));
    }
}
exports.UserLoader = UserLoader;
