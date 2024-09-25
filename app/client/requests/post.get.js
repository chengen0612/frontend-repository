import * as yup from "yup";

import { http } from "../instance";

export default async function handler(id) {
  const response = await http.get(
    "https://jsonplaceholder.typicode.com/posts",
    { id }
  );

  const data = await response.json();
  const validated = await schema.validate(data);

  return validated[0];
}

const schema = yup.array().of(
  yup.object({
    userId: yup.number().required(),
    id: yup.number().required(),
    title: yup.string().required(),
    body: yup.string().required(),
  })
);
