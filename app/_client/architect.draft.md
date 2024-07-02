## Architecture

### Layer

- client/
  - repository/
    - post
    - user
  - api/
    - post.list/
    - post.retrieve/
    - user.list/

### Relationship

- repository/
  - post/
    - list/
    - retrieve/
  - user/
    - list/

## Components

API anatomy

- Handler
- Schema
- Transformer
- Mock

Api entrypoint

```js
// client/api/tour.menu/index.js
import handler from "./handler";
import schema from "./schema";
import transformer from "./transformer";
import mock from "./mock";

const ingredients = {
  handler,
  schema,
  transformer,
  mock,
};

export default ingredients;
```

Repository

```js
// client/repository/tour
import tourMenuIngredients from "../api/tour.menu";

export const tour = {
  menu: generateApi(tourMenuIngredients),
  // ...
};
```

Client

```js
//client/index.js
import tourRepository from "./repository/tour";

const client = {
  tour: tourRepository,
  // ...
};
```

Api generator

```js
async function generateApi(ingredients, mode) {
  const useMock = (mode ?? process.env.PUBLIC_NEXT_API_MODE) === 'mock';

  return function(...args) {
    const ingredients = {
      // name,
      handler,
      schema,
      transformer,
      mock,
    }

    let data;

    try {
      data = useMock ? mock : (await handler(...args));

      schema.parse(data);

      if (transformer) {
        data = transformer(data);
      }
    } catch (err) {
      console.error("Failed to fetch data of: ", name);
    }

    return data;
  }
}
```

Client code

```js
const tourMenu = await client.tour.menu(args);
```
