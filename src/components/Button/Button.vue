<template>
  <div>
    <button>Hello</button>
    <!--
      @slot 自定义图标
        @binding {Boolean} newType 当前状态
        @binding {Object} titleClass 当前的状态
    -->
    <slot name='icon'></slot>
  </div>
</template>

<script>
/**
 * 这是自定义按钮组件
 * @displayName Button
 */
export default {
  props: {
    /**
     * 按钮组件的风格
     * @values success,warning,error,loading
     * @since Version 1.2.0
     * @see See [当前提示链接](https://vue-styleguidist.github.io/docs/Documenting.html#methods)
     */
    type: {
      type: String,
      default: 'name',
      required: true
    },
  },
  methods: {
    submit() {
      /**
       * 操作成功的回调
       * @event success 
       * @property {Boolean} flag  true 表示成功 false 表示失败 
       * @property {Boolean} code  0 正常 
       */
      this.$emit('success', true)
    },
    /**
     * @public 提交事件
     * @param {string} text 文本的值
     * @arg {Object} obj 文本的啥
     * @argument {object} nma 对象参数
     */
    handleSubmit() {},
  },
}
</script>