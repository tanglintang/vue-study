<template>
  <div id="app">
    <!-- <login/> -->
    <markdown></markdown>
  </div>
</template>

<script>
// @ 表示 地址短链接 alias ，始终指向 src，让地址引入更轻松
import Login from '@/views/Login'
import Markdown from '@/views/Markdown'

export default {
  name: 'App',
  components: {
    Login,
    Markdown,
  }
}
</script>

<style>

</style>
