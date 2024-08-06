import { authRepository } from "./repositories/auth";
import { postRepository } from "./repositories/post";
import { userRepository } from "./repositories/user";

export const client = {
  auth: authRepository,
  post: postRepository,
  user: userRepository,
};
