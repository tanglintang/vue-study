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

- css in js
用 js 的方式引入 css