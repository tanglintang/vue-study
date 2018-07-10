# vue-best-practise

- 404 NotFound
非法闯入或不存在页面
```js
{
  path: '*', // 贪婪匹配
  component: NotFound
}
```
- 子路由/二级路由
```js
{
path: '/time-entries',
component: TimeEntries,
children: [                     // 数组
    {
        path: 'log-time',       // 子路由不需要 / -> 代表根路径
        component: LogTime
    },
]
}
```
- 子路由懒加载
```js
children: [
    {
        path: 'log-time',
        // component: LogTime
        // 懒加载
        component: resolve => require(['@/components/LogTime.vue'], resolve)
    }
]
```

- css in js
用 js 的方式引入 css

- $route
`$route.path` 当前路由对象的路径，会被解析为绝对路径