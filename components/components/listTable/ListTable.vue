<template>
  <div class="list-table--div">
    <el-table v-loading="loading" class="list-table" :data="tableData" :style="tableWidth">
      <template v-for="(item, index) in columnsList">
        <el-table-column v-if="item.slot" :key="index" v-bind="item.attrs || {}">
          <template slot-scope="scope">
            <slot :name="item.slot" :row="scope.row" :index="scope.$index"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" v-bind="item.attrs || {}">
        </el-table-column>
      </template>
    </el-table>
    <div class="list-table--pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageInfo.currentPage"
        :page-sizes="pageInfo.pageSizes" :page-size="pageInfo.pageSize" :layout="pageInfo.layout" :total="pageInfo.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListTable',
    props: {
      tableData: {
        type: Array,
        default: []
      },
      tableWidth: {
        type: Object,
        default: {
          width: '100%'
        }
      },
      columnsList: {
        type: 'Array',
        default: []
      },
      pageInfo: {
        type: Object,
        default: {
          currentPage: 1,
          pageSizes: [100, 200, 300, 400],
          pageSize: 100,
          layout: 'total, sizes, prev, pager, next, jumper',
          total: 400,
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tableDataClone: [],

      }
    },
    methods: {
      handleSizeChange(data) {
        this.$emit('handleSizeChange', data);
      },
      handleCurrentChange(data) {
        this.$emit('handleCurrentChange', data);
      }
    },
    watch: {
      tableData: {
        handler(newv, oldv) {
          console.log('tableData', newv)
          this.tableData = newv;
        },
        deep: true,
        immediate: true
      },
      loading: function(newv) {
        this.loading = newv;
      }
    },
    mounted() {

    }

  }
</script>

<style scoped>
  .list-table--div {
    box-sizing: border-box;
    width: calc(100% - 42px);
    margin: 0 20px 20px 20px;
  }

  .list-table {
    border: 1px solid #EBEEF5;
    border-bottom: none;


  }

  .list-table--pagination {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background: #fff;
    text-align: right;
    border-width: 0 1px 1px 1px;
    border-color: #EBEEF5;
    border-style: solid;
  }
</style>
