import { AbstractDriver } from "../abstract-driver.class";
import { CacheItem } from "../cache/cache-item.class";
import { Cache } from "../cache/cache.class";
import { SubscribeConfigInterface } from "../cache/subscribe-config.interface";
import { SubscribeInterface } from "../cache/subscribe.interface";
import { ModelData } from "./model-data.class";
import { ModelOptionsInterface } from "./model-options.interface";

type DataType<T> = T & {
  [others: string]: any;
};

export class BaseModel<
  Data = any,
  Driver extends AbstractDriver = AbstractDriver
> {
  options: ModelOptionsInterface;
  cache: Cache;
  data: DataType<Data>;
  storage: Driver;
  changed: CacheItem<any>;
  $: SubscribeInterface<string>;

  constructor(options: ModelOptionsInterface) {
    this.options = this.checkOptions(options);
    this.cache = new Cache(this);
    this.changed = this.cache.createCacheItem<string>("", this.options.name);
    this.$ = this.changed.subscribe;
    if (this.isPersistence())
      this.storage = new this.options.driver(this) as Driver;
    else this.storage = undefined as unknown as Driver;
    this.data = new ModelData(this) as DataType<Data>;
  }

  /**
   * Determine whether this model can be persisted.
   */
  isPersistence(): boolean {
    return !!this.options.driver;
  }

  /**
   * Get all the data of this model.
   */
  all(): object {
    if ("collection" !== this.options.modelType)
      throw new Error(
        `The "all" function is only applicable to the collection model.`
      );

    if (this.isPersistence()) return (this.storage as any).all();
    else return this.cache.all();
  }

  /**
   * Check primary
   * Check that the primary key must be in the same format as the primary key declared in the model.
   * If the model requires the component to be of type number, and the incoming parameter is of type
   * number composed of strings, it will be automatically converted to the real number type.
   * @param key
   */
  checkPrimary(key: any): string | number {
    if ("number" === this.options.type && !isNaN(Number(key)))
      return Number(key);
    if (this.options.type !== typeof key)
      throw new Error(
        `The model primary type needs to be ${
          this.options.type
        }, not ${typeof key}: ${key}`
      );
    return key;
  }

  /**
   * Deep clone
   *
   * @param oldObject
   * @param intrinsicTypes
   */
  deepClone(oldObject: object, intrinsicTypes: string[] | null = null) {
    if (!oldObject || typeof oldObject !== "object") return oldObject;

    if (null === intrinsicTypes) {
      if (!this.options.intrinsicTypes) intrinsicTypes = [];
      else if (false === (this.options.intrinsicTypes as unknown as boolean))
        return oldObject;
      else intrinsicTypes = this.options.intrinsicTypes as string[];
    }

    if (Array.isArray(oldObject)) {
      const newObject: any = [];
      for (let i = 0, l = oldObject.length; i < l; ++i)
        newObject.push(this.deepClone(oldObject[i]));
      return newObject;
    }

    if (0 <= intrinsicTypes.indexOf(oldObject.constructor.name)) {
      return oldObject;
    }

    const newObject = new Object();
    for (const key in oldObject) {
      if (key in oldObject) newObject[key] = this.deepClone(oldObject[key]);
    }
    return newObject;
  }

  getItem(key: string | number) {
    return this.data[key];
  }

  setItem(key: string | number, value: any) {
    (this.data as any)[key] = value;
  }

  removeItem(key: string | number) {
    delete this.data[key];
  }

  subscribeItem(
    key: string | number,
    closFunc: Function,
    config: SubscribeConfigInterface = {}
  ) {
    return this.data[`${key}$`](closFunc, config);
  }

  private checkOptions(options: ModelOptionsInterface): ModelOptionsInterface {
    if (!options.name) throw new Error(`The model name does not exist.`);
    options.primary = options.primary ?? "_id";
    options.async = options.async ?? false;
    if (options.methods) Object.assign(this, options.methods);
    options.intrinsicTypes = options.intrinsicTypes ?? [
      "Boolean",
      "String",
      "Date",
      "RegExp",
      "Blob",
      "File",
      "FileList",
      "ArrayBuffer",
      "DataView",
      "Uint8ClampedArray",
      "ImageData",
      "Map",
      "Set",
      "Symbol",
      "HTMLDivElement",
    ];

    return options;
  }
}
