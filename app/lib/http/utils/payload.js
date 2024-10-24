/**
 * When the request body is an object, convert the data into a JSON string
 * and append corresponding header.
 * @param {RequestInit=} options
 */
export function processPayload(options) {
  const { body } = options;

  if (body && isSerializable(body)) {
    options.body = JSON.stringify(body);
    options.headers ??= {};
    options.headers['Content-Type'] ??= 'application/json';
  }

  return options;
}

function isSerializable(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  if (
    value instanceof FormData ||
    value instanceof URLSearchParams ||
    value instanceof Blob ||
    value instanceof ArrayBuffer
  ) {
    return false;
  }

  return true;
}
