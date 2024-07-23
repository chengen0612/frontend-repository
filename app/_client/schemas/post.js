import * as yup from "yup";

const posts = yup.array().of(
  yup.object({
    userId: yup.number().required(),
    id: yup.number().required(),
    title: yup.string().required(),
    body: yup.string().required(),
  })
);

const comments = yup.array().of(
  yup.object({
    postId: yup.number().required(),
    id: yup.number().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    body: yup.string().required(),
  })
);

export const postSchema = {
  posts,
  comments,
};
