export class Middleware {
  constructor() {
    this.middlewares = [];
  }

  get size() {
    return this.middlewares.length;
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  async process(input) {
    let output = input;

    for (let i = 0; i < this.size; i++) {
      output = (await this.middlewares[i](output)) ?? output;
    }

    return output;
  }
}
