import * as yup from "yup";

import { http } from "../../lib/http";

export default async function handler(postId) {
  const { data } = await http.get(
    "https://jsonplaceholder.typicode.com/comments",
    { postId }
  );

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
