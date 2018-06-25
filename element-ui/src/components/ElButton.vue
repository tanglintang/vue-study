<template>
    <button class="el-button" :disabled="buttonDisabled" :type="buttonType" :class="[
            type ? 'el-button--' + type : '',
            {'is-disabled': buttonDisabled,
            'is-loading': loading,
            }
        ]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon&&!loading"></i>
        <slot></slot>
    </button>
    <!-- 两种写法： 
                三元运算符：disabled ? 'is-disabled' : '',
                对象： {'is-disabled': buttonDisabled}
     -->
</template>

<script>
export default {
  name: "ElButton",
  props: {
    disabled: Boolean,
    type: {
        type: String,
        default: 'default'
    },
    loading: Boolean,
    icon: {
        icon: String,
        default: ''
    },
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    },

    buttonType() {
        return this.type
    },

  }
};
</script>

<style>
</style>
