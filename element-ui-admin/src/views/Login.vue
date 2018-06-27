<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <div class="title-content">
                <h3>系统登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" autoComplete="false" placeholder="请输入密码" @keyup.13.native="handleLogin"></el-input>
            </el-form-item>

            <el-button type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="handleLogin" :loading="loading" >
                登录
            </el-button>

        </el-form>
    </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };

    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少 6 位"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword
          }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      // 表单整体验证
      this.$refs.loginForm.validate(valid => {
        //   返回一个 Boolean
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          alert("login success!");
        } else {
          alert("error submit!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="sass">
        
</style>
