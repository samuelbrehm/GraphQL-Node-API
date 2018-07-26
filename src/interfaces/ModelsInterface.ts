import { UserModel } from './../models/UserModel';
import { PostModel } from './../models/PostModels';

export interface ModelsInterface {
  Post: PostModel;
  User: UserModel;
}
