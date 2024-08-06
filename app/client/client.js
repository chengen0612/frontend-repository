import { http } from "../lib/http";
import { logger } from "./utils/logger";

export const client = http.create({
  // ...
});

client.middlewares.response.use(logger);
