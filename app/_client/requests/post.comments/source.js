import * as yup from "yup";

export async function handler(postId) {
  const url = new URL("https://jsonplaceholder.typicode.com/comments");
  url.searchParams.append("postId", postId);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const schema = yup.array().of(
  yup.object({
    postId: yup.number().required(),
    id: yup.number().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    body: yup.string().required(),
  })
);

export function transformer(data) {
  return data.map((comment) => ({
    ...comment,
    username: comment.email.split("@")[0],
  }));
}
