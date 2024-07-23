import * as yup from "yup";

export async function handler(id) {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.append("id", id);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const schema = yup.array().of(
  yup.object({
    userId: yup.number().required(),
    id: yup.number().required(),
    title: yup.string().required(),
    body: yup.string().required(),
  })
);

export function transformer(data) {
  return data[0];
}
