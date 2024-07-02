export function generateApi(
  ingredients,
  useMock = process.env.NEXT_PUBLIC_USE_MOCK
) {
  return async function (...args) {
    const { handler, schema, transformer, mock } = ingredients;

    let data;

    try {
      data = useMock ? mock : await handler(...args);
      data = await schema.validate(data);

      if (transformer) {
        data = transformer(data);
      }
    } catch (err) {
      console.error("Failed to fetch data");
    }

    return data;
  };
}
