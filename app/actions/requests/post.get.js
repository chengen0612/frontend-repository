import * as yup from "yup";

import { http } from "../../lib/http";

export default async function handler(id) {
  const { data } = await http.get(
    "https://jsonplaceholder.typicode.com/posts",
    { id }
  );

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
