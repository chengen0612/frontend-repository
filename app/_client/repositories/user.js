import { userSchema } from "../schemas/user";

async function getUserById(id) {
  const url = new URL("https://jsonplaceholder.typicode.com/users");
  url.searchParams.append("id", id);

  const response = await fetch(url);
  const data = await response.json();
  const validated = await userSchema.users.validate(data);

  const [user] = validated;
  user.username = user.email.split("@")[0];

  return user;
}

async function getAvatarByUserName(username) {
  const url = new URL("https://randomuser.me/api/");
  url.searchParams.append("seed", username);

  const response = await fetch(url);
  const data = await response.json();
  const validated = await userSchema.avatar.validate(data);

  const {
    results: [user],
  } = validated;

  return user.picture;
}

export const userRepository = {
  getUserById,
  getAvatarByUserName,
};
