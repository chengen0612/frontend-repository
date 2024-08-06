import * as yup from "yup";

import { client } from "../client";

export default async function handler(postId) {
  const response = await client.get(
    "https://jsonplaceholder.typicode.com/comments",
    { postId }
  );

  const data = await response.json();
  const validated = await schema.validate(data);

  return validated.map((comment) => ({
    ...comment,
    username: comment.email.split("@")[0],
  }));
}

const schema = yup.array().of(
  yup.object({
    postId: yup.number().required(),
    id: yup.number().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    body: yup.string().required(),
  })
);
