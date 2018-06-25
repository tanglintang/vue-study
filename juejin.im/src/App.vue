<template>
  <div id="app">
    <Articles>
		<Article>{{articles}}</Article>
	</Articles>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Articles from "./components/Articles";
import Article from "./components/Article";
import axios from "axios";


export default {
  name: "App",
  template: '<Article/>',
  data() {
    return {
      articles: [],
    };
  },

  components: {
    Articles,
    Article
  },

  mounted() {
    axios
      .get("https://www.easy-mock.com/mock/5b30bfae2959342ac627f2a4/vue/")
      .then(data => {
        console.log(data.data.articles);
        this.articles = data.data.articles;
      });
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
