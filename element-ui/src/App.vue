<template>
  <div id="app">
    <el-button type="primary" size="mini">
      primary
    </el-button>
    <el-button type="success" loading size="small">
      success
    </el-button>
    <el-button :disabled="disabled" type="danger" size="medium">
      danger
    </el-button>
    <el-button type="info" round>
      info
    </el-button>
    <el-button :disabled="disabled" type="warning">
      warning
    </el-button>
    <el-button type="" icon="el-icon-edit" :loading="isLoading" @click.native="changeStatus">
      <!-- 父组件想在子组件上监听自己的click的话，需要加上native修饰符 -->
    </el-button>
    <el-button type="primary" icon="el-icon-delete" plain>
      icon-delete
    </el-button>
    <hr>
    <p>按钮组</p> 
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>

    <!-- <el-button-group> -->
      <el-button type="primary" circle icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" circle icon="el-icon-delete"></el-button>  
    <!-- </el-button-group> -->

    <hr>
    动态标签type 

    <form action="#" method="get">
      <el-button-group>
        <el-button type="primary" native-type="submit" >
          提交
        </el-button>
        <el-button type="danger" native-type="reset" @click="doSubmit" >
          重置
        </el-button>
      </el-button-group>
    </form>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import ElButton from "@/components/ElButton";
import ElButtonGroup from "@/components/ElButtonGroup";

export default {
  name: "App",
  components: {
    "el-button": ElButton,
    "el-button-group": ElButtonGroup
  },
  data() {
    return {
      disabled: false,
      isLoading: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  },
  methods: {
    changeStatus() {
      this.isLoading = true;
    },

    doSubmit(event) {
      console.log(event)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
