export interface ModelOptionsInterface {
  name?: string;
  type?: "string" | "number";
  modelType?: "keyValue" | "collection";
  primary?: string;
  driver?: any;
  methods?: Record<string, any>;
  intrinsicTypes?: string[] | false;
  async?: boolean;
  [others: string]: any;
}
