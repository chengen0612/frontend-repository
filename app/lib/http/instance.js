import { http } from "./http";
import { logger } from "./utils/logger";

export const instance = http.create({
  // ...
});

instance.middlewares.response.use(logger);
