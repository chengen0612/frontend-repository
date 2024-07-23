import retrieve from "../requests/user.retrieve";
import avatar from "../requests/user.avatar";
import { generateApi } from "../utils";

export const userRepository = {
  retrieve: generateApi(retrieve),
  avatar: generateApi(avatar),
};
