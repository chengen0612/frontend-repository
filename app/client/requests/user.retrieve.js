import * as yup from "yup";

import { http } from "../instance";

export default async function handler(id) {
  const response = await http.get(
    "https://jsonplaceholder.typicode.com/users",
    { id }
  );

  const data = await response.json();
  const validated = await schema.validate(data);
  const [user] = validated;
  if (user) {
    user.username = user.email.split("@")[0];
  }

  return user;
}

const schema = yup.array().of(
  yup.object({
    id: yup.number().required(),
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required(),
    address: yup.object({
      street: yup.string().required(),
      suite: yup.string().required(),
      city: yup.string().required(),
      zipcode: yup.string().required(),
      geo: yup.object({
        lat: yup.string().required(),
        lng: yup.string().required(),
      }),
    }),
    phone: yup.string().required(),
    website: yup.string().required(),
    company: yup.object({
      name: yup.string().required(),
      catchPhrase: yup.string().required(),
      bs: yup.string().required(),
    }),
  })
);
