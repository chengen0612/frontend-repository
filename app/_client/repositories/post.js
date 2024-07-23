import comments from "../requests/post.comments";
import retrieve from "../requests/post.retrieve";
import { generateApi } from "../utils";

export const postRepository = {
  comments: generateApi(comments),
  retrieve: generateApi(retrieve),
};
