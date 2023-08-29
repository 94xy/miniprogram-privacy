# 小程序隐私保护授权弹窗组件

> 微信 2023 年 8 月 10 日发布 [关于小程序隐私保护指引设置的公告](https://developers.weixin.qq.com/community/develop/doc/00042e3ef54940ce8520e38db61801)，9 月 15 日起所有隐私接口需用户点击同意并同步给微信之后才可以使用。

当前组件做了隐私保护指引弹窗界面，直接引用，需要授权时展示弹窗，当用户点击“拒绝”直接退出小程序，点击“同意”同步结果给微信且以后不再弹窗，之后可以正常使用隐私接口。

**8 月 28 更新：今天才发现小程序可以使用页面的生命周期，对其进行了简化，只需要使用引入组件即可，不再需要任何其它代码**

**8 月 29 更新：采纳网页 Liu 的方案，解决多个 tabbar 情况下同意之后还有弹窗的问题**

# 注意事项

1. 2023 年 9 月 15 号之前，默认不会启用隐私相关功能，所以检测不到需要弹窗的情况，可以在 app.json 中配置 `"__usePrivacyCheck__": true` 之后，接口才可以检测到是否需要弹窗。个人实际情况：我在开发者工具中配置了 `"__usePrivacyCheck__": true` ，`needAuthorization` 无论如何返回的都是 `false`，但在真机模拟的情况下可以返回 `true`
2. 自动打开隐私保护指引界面需在「小程序管理后台」配置《小程序用户隐私保护指引》，官方[用户隐私保护指引填写说明](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/)。

# 效果

![](/img/demo.jpg)

# 使用方法

1. 拷贝 `component` 文件夹中的 `privacy` 文件夹到小程序项目中的组件目录

2. 在 page.json 中引入组件

```json
{
  "usingComponents": {
    "Privacy": "/component/privacy/privacy"
  }
}
```

3. 在 page.wxml 中使用组件

```jsx
<Privacy />
```

4. 可以在所有使用了隐私接口的页面都加上该组件，授权一次之后使用所有隐私接口不再需要授权

# 取消授权

微信中「微信下拉-最近-最近使用的小程序」中删除小程序可取消授权。
开发者工具中「清除模拟器缓存-清除授权数据」可取消授权。

# 相关链接

[官方：小程序隐私协议开发指南](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)

# 在线预览效果

![](/img/qrcode.jpg)
