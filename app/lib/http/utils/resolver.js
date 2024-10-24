/**
 * If the response is JSON, automatically parse it into JavaScript object,
 * otherwise, leaving the response unchanged.
 * @param {Response} res
 */
export async function unwrapJson(res) {
  const contentType = res.headers.get('content-type');

  if (contentType.includes('application/json')) {
    res.data = await res.json();
  }

  return res;
}
