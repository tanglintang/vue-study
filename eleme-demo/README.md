# eleme-demo

- index.html 页面 是webpack
1. 移动端适配 px -> rem --》config/rem.js

- transition

- 路由 lazyload
```js
const home = () => import('@/page/home')
```
通过函数加载，路由到页面时，再加载

- $router.meta.keepalive
路由上的属性 meta 

- lbs 应用 location base service

- mutations-types.js
将所有的状态改变放在这里，mutation 说明清单

- [函数名](参数){函数体}
es6 函数写法