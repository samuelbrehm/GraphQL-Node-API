import { userQueries } from './resources/user/user.schema';
import { postQueries } from './resources/post/post.schema';
import { commentQueries } from './comment/comment.schema';

const Query = `
  type Query {
    ${commentQueries}
    ${postQueries}
    ${userQueries}
  }
`;

export { Query };
