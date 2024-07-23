import * as yup from "yup";

const users = yup.array().of(
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

const avatar = yup.object({
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

export const userSchema = {
  users,
  avatar,
};
