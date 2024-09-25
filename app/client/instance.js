import { http } from "../lib/http";
import { logger } from "./utils/logger";

const instance = http.create({
  // ...
});

instance.middlewares.response.use(logger);

export { instance as http };