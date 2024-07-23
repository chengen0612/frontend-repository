import { postRepository } from "./repositories/post";
import { userRepository } from "./repositories/user";

export const client = {
  post: postRepository,
  user: userRepository,
};
