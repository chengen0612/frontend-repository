import getPost from "../requests/post.get";
import listComment from "../requests/post.comment.list";

export const postRepository = {
  get: getPost,

  comment: {
    list: listComment,
  },
};
