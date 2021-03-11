## 一个“语法糖”

为了更好地兼容 IndexedDB 和利用其性能，在 Kurimudb 中，所有持久化存储的数据，本质都会转为对象哦，如果我们直接持久化字符串或是其他类型的话，虽然读取时还是原来的样子，但其实这只是"语法糖"！

```js
import { db } from "kurimudb-zero-config";

// 直接存储字符串，其实只是"语法糖"，
db.data.password = "123456";
// 本质上，它在持久化层被转换成了下面的对象：
{
  id: "password",
  $__value: "123456"
}
// 在读取时，会直接取出 "$__value" 的值：
console.log(await db.data.password); // 会输出："123456"

// 如果直接存储一个对象：
db.data.user = {
  username: "akirarika",
  password: "123456"
}
// 存储时，会直接存储它，并为它追加主键，默认为 "id"：
{
  id: "user",
  username: "akirarika",
  password: "123456"
}
// 取出时，主键不会被剔除，这意味着你可以直接从对象上拿出主键的值：
const user = await db.data.user;
console.log(user.id); // "user"
console.log(user.username); // "akirarika"
```

不过，需要注意的是，如果你存入的对象包含 "id" 字段，那么此字段会被实际的主键所覆盖：

```js
import { db } from "kurimudb-zero-config";

db.data.user = {
  id: "404",
  password: "123456",
};
// 存储时，id 字段会被直接覆盖，实际存储的值为：
{
  id: "user",
  password: "123456"
}
```

## 修改主键

如果需要更改默认的主键名 "id"，可以向模型的配置中传入 `primary` 字段：

```js
export default new Model({
  config: {
    name: "config",
    type: "string",
    primary: "key", // 将此模型主键名改为 "key"
    // ...
  },
});
```

## 数据格式化

Kurimudb 会对存入的数据进行深拷贝，以避免引用问题和特殊对象无法持久化的问题。

默认情况下，Kurimudb 会不深拷贝以下对象 (`object.constructor.name`)：

```js
[
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
];
```

如果你想变更这份名单，可以在模型配置中增加 `intrinsicTypes`：

```js {4}
export default new Model({
  config: {
    // ...
    intrinsicTypes: ["Map", "Set", "HTMLDivElement"],
  },
});
```

如果你想限制所有的对象都被深拷贝，那么可以直接传入空数组：

```js {4}
export default new Model({
  config: {
    // ...
    intrinsicTypes: [],
  },
});
```

如果你想不深拷贝任何对象，可以传入 `false`：

```js {4}
export default new Model({
  config: {
    // ...
    intrinsicTypes: false,
  },
});
```

## 异步更新队列

待续 🐸

## 模型关联

待续 🐸

## 全文搜索

待续 🐸
