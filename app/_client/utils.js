export function generateApi(
  ingredients,
  useMock = process.env.NEXT_PUBLIC_USE_MOCK
) {
  return async function (...args) {
    const { handler, schema, transformer, mock } = ingredients;

    try {
      let data;

      data = useMock ? mock : await handler(...args);
      data = await schema.validate(data);

      if (transformer) {
        data = transformer(data);
      }

      return data;
    } catch (err) {
      console.error("Failed to fetch data");
    }
  };
}
