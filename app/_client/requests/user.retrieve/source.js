import * as yup from "yup";

export async function handler(id) {
  const url = new URL("https://jsonplaceholder.typicode.com/users");
  url.searchParams.append("id", id);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const schema = yup.array().of(
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

export function transformer(data) {
  const [user] = data;

  return {
    id: user.id,
    name: user.name,
    username: user.email.split("@")[0],
    email: user.email,
    phone: user.phone,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
    },
  };
}
