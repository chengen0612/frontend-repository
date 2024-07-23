import { postSchema } from "../schemas/post";

async function getPostById(id) {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.append("id", id);

  const response = await fetch(url);
  const data = await response.json();
  const validated = await postSchema.posts.validate(data);

  return validated[0];
}

async function getCommentsByPostId(postId) {
  const url = new URL("https://jsonplaceholder.typicode.com/comments");
  url.searchParams.append("postId", postId);

  const response = await fetch(url);
  const data = await response.json();
  const validated = await postSchema.comments.validate(data);

  return validated.map((comment) => ({
    ...comment,
    username: comment.email.split("@")[0],
  }));
}

export const postRepository = {
  getPostById,
  getCommentsByPostId,
};
