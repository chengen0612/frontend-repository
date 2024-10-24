import { http } from "./core/http";
import { logger } from "./utils/logger";
import { processPayload } from "./utils/payload";
import { unwrapJson } from './utils/resolver';

export const instance = http.create({
  // ..
});

instance.middlewares.request.use(processPayload);

instance.middlewares.response.use(logger);
instance.middlewares.response.use(unwrapJson);
