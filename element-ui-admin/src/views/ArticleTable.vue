<template>
    <div class="app-container">
      <div class="filter-container"></div>
      <el-table :data="list" border style="width: 100%" highlight-current-row v-loading="listLoading">
        <el-table-column label="序号" type="index" width="65" align="center">
          <!-- 模板作用域添加更多的内容 -->
          <template slot-scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="150" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" min-width="150"></el-table-column>
        <el-table-column prop="author" label="作者" width="110" align="center"></el-table-column>
        <el-table-column prop="pageviews" label="阅读数" width="95" align="center"></el-table-column>
        <el-table-column label="操作" width="230" align="center" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <!-- 传入当前作用域的一行 -->
            <el-button type="primary" size="mini" @click="handleUpdate(scope.row);dialogFormVisible=true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container"></div>
      <el-dialog :visible.sync="dialogFormVisible" title="Edit">
        <el-form :model="temp" ref="tempForm" label-position="left" label-width="70" style="width: 400px; margin-left: 50px">
          <el-form-item label="标题" prop="title" required>
            <el-input v-model="temp.title" ></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="date" required>
            <el-input v-model="temp.date"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="temp.status"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false" size="small">取消</el-button>
          <el-button @click="updateData('tempForm');dialogFormVisible=false" size="small" type="primary">保存</el-button>
        </div>
      </el-dialog>
      <div class="vedio">

      </div>
    </div>
</template>

<script>
import { fetchList } from '@/api/article.js'

export default {
  name: "ArticleTable",
  data() {
    return {
      list: [],
      listQuery: {
        title: undefined,
        importance: undefined,
        type: undefined,
        sort: "+id",
        page: 1,
        limit: 20
      },
      dialogFormVisible: false,
      // 弹窗里的表单 的 model
      temp: {
        id: null,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        type: "",
        status: "published"
      },
      listLoading: false,
    };
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then((response) => {
        // console.log(response)
      })
    },
    handleUpdate(row) {
      console.log(row);
      Object.assign(this.temp, row);
    },
    updateData(fn) {
    }
  },
  created() {
    // 通常这个生命周期请求数据
    this.listLoading = true
    this.getList()
  },
  beforeMount() {
    this.listLoading = false
    const first = {
      id: 1,
      date: "1999-09-09",
      timestamp: "2 小时前",
      title: "震惊！。。。",
      author: "UC小编",
      pageviews: 999
    };
    const sec = {
      id: 2,
      date: "1888-08-08",
      timestamp: "2 小时前",
      title: "【中文八级】中国人与丹麦人的口技大PK",
      author: "UC小编",
      pageviews: 999
    };
    // this.list.push(first)
    this.list = [first, sec];
  }
};
</script>