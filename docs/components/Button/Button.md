# Button

> 这是自定义按钮组件

## Props

| Prop name | Description                                                                                                                               | Type   | Values                                   | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------- | ------- |
| type      | 按钮组件的风格<br/>`@since` Version 1.2.0<br/>`@see` See [当前提示链接](https://vue-styleguidist.github.io/docs/Documenting.html#methods) | string | `success`, `warning`, `error`, `loading` | 'name'  |

## Methods

### handleSubmit

>

#### Params

| Param name | Type   | Description |
| ---------- | ------ | ----------- |
| text       | string | 文本的值    |
| obj        | Object | 文本的啥    |
| nma        | object | 对象参数    |

## Events

| Event name | Properties                                                                        | Description    |
| ---------- | --------------------------------------------------------------------------------- | -------------- |
| success    | **flag** `Boolean` - true 表示成功 false 表示失败<br/>**code** `Boolean` - 0 正常 | 操作成功的回调 |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| icon | 自定义图标  |          |

---
