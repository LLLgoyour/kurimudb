import { AbstractDriver } from "../abstract-driver.class";
import { BaseModel } from "./base-model.class";
import { ModelOptionsInterface } from "./model-options.interface";

export class KeyValueModel<
  Data extends Record<string | number, any> = Record<string | number, any>,
  Driver extends AbstractDriver = AbstractDriver
> extends BaseModel<Data, Driver> {
  constructor(options: ModelOptionsInterface = {}) {
    super({
      ...options,
      modelType: "keyValue",
      type: options.type ?? "string",
    });
  }

  /**
   * Seed data
   * @returns
   */
  seed(seed: any) {
    let seedFunc;
    if ("function" === typeof seed) seedFunc = seed;
    else if ("object" === typeof seed && !(seed instanceof Array)) {
      seedFunc = () => {
        for (const key in seed) (this.data as any)[key] = seed[key];
      };
    } else {
      throw new Error(
        `In "keyValue" model, the argument to the seed function must be "Function" or "Object".`
      );
    }

    if (!this.isPersistence()) return seedFunc();
    const storage = this.storage as any;
    storage.seeding(seedFunc, this);
  }
}
