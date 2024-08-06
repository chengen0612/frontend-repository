import * as yup from "yup";

import { client } from "../client";

export default async function handler(username) {
  const response = await client.get("https://randomuser.me/api/", {
    seed: username,
  });

  const data = await response.json();
  const validated = await schema.validate(data);

  return validated.results?.[0]?.picture;
}

const schema = yup.object({
  results: yup.array().of(
    yup.object({
      picture: yup.object({
        large: yup.string().required(),
        medium: yup.string().required(),
        thumbnail: yup.string().required(),
      }),
    })
  ),
});
