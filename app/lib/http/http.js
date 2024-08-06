import { Middleware } from "./middleware";
import { deepMerge } from "./utils/manipulate";

/**
 * An extremely simplified HTTP client that benefit from Next.js caching mechanisms.
 * This is a feature under development and should not be used in other projects.
 */
class HttpClient {
  /**
   * @param {object} options
   * @param {string=} options.baseUrl
   * @param {RequestInit=} options.defaultOptions
   */
  constructor({ baseUrl, defaultOptions } = {}) {
    this.baseUrl = baseUrl;
    this.defaultOptions = defaultOptions ?? {};
    this.middlewares = {
      request: new Middleware(),
      response: new Middleware(),
    };
  }

  /**
   * @param {object} options
   * @param {string=} options.baseUrl
   * @param {RequestInit=} options.defaultOptions
   */
  create(options) {
    return new HttpClient(options);
  }

  /**
   * @param {string} url
   * @param {{key: string}=} params
   * @param {RequestInit=} options
   */
  get(url, params = {}, options) {
    const _url = new URL(url);
    const _options = { ...options, method: "GET" };

    for (const [key, value] of Object.entries(params)) {
      _url.searchParams.append(key, value);
    }

    return this.#emit(_url, _options);
  }

  /**
   * @param {string} url
   * @param {{key: string}=} body
   * @param {RequestInit=} options
   */
  post(url, body = {}, options) {
    const _options = {
      ...options,
      method: "POST",
      body,
    };

    return this.#emit(url, _options);
  }

  /**
   * @param {string|URL} url
   * @param {RequestInit=} options
   */
  async #emit(url, options = {}) {
    const _url = new URL(url, this.baseUrl);

    let _options = deepMerge(this.defaultOptions, options);
    _options = await this.middlewares.request.process(_options);

    let response = await fetch(_url, _options);
    response = await this.middlewares.response.process(response);

    return response;
  }
}

export const http = new HttpClient();
