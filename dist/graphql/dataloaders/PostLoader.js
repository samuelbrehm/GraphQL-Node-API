"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostLoader {
    static batchPosts(Post, ids) {
        return Promise.resolve(Post.findAll({
            where: { id: { $in: ids } }
        }));
    }
}
exports.PostLoader = PostLoader;
