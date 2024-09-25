import getProfile from "../requests/user.profile.get";
import getAvatar from "../requests/user.avatar.get";

export const userRepository = {
  profile: {
    get: getProfile,
  },

  avatar: {
    get: getAvatar,
  },
};
