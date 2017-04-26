## Cannot resolve module 'vux/undefined'

出现 `Cannot resolve module 'vux/undefined'` 报错可能是两种情况：

### 1.组件名写错

请对比文档检查名字是否正确

### 2.该组件在当前版本未支持

请更新到新版本重新运行 `npm run dev`。v2.1.0 ~ v3.0.0 之间不会有 `break change`，所以你可以放心升级。

你也可以查看 `changelog` 以精确更新到支持该组件的版本。