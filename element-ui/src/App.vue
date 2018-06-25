<template>
  <div id="app">
    <el-button :disabled="disabled" type="primary">
      primary
    </el-button>
    <el-button type="success" loading>
      success
    </el-button>
    <el-button :disabled="disabled" type="danger">
      danger
    </el-button>
    <el-button type="info">
      info
    </el-button>
    <el-button :disabled="disabled" type="warning">
      warning
    </el-button>
    <el-button type="" icon="el-icon-edit" :loading="isLoading" @click="changeStatus">
    </el-button>
    <el-button type="" icon="el-icon-delete" >
      icon-delete
    </el-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import ElButton from '@/components/ElButton'

export default {
  name: 'App',
  components: {
    'el-button': ElButton,
  },
  data() {
    return {
      disabled: false,
      isLoading: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.disabled = true
    }, 2000)

  },
  methods: {
    changeStatus() {
      alert('1')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
