import { SubscribeConfigInterface } from "../cache/subscribe-config.interface";
import { runtime } from "../runtime";

export function auto$(
  subscribeFunc: Function,
  config: SubscribeConfigInterface = {}
) {
  config.immediate = false; // 所有用 auto$ 进行的订阅，均不主动触发首次订阅，由队列函数去主动触发

  runtime.readItemDependencies = [];
  runtime.collectingReadItemDependencies = true;
  subscribeFunc();
  runtime.collectingReadItemDependencies = false;
  const unsubscribeFuncArr = runtime.readItemDependencies.map((item) => {
    return item.subscribe(subscribeFunc, config);
  });

  return () => {
    unsubscribeFuncArr.forEach((unsubscribe) => unsubscribe());
  };
}
