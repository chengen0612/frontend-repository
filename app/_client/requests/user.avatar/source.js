import * as yup from "yup";

export async function handler(username) {
  const url = new URL("https://randomuser.me/api/");
  url.searchParams.append("seed", username);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const schema = yup.object({
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

export function transformer(data) {
  const {
    results: [user],
  } = data;

  return user.picture;
}
