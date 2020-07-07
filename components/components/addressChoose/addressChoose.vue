<template>
  <el-row>
    <el-col :span="8">
      <el-select v-model="privince" placeholder="请选择省">
        <el-option v-for="item in provinceOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-select v-model="city" placeholder="请选择市">
        <el-option v-for="item in cityOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-select v-model="region" placeholder="请选择">
        <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'addressChoose',
    data() {
      return {
        privince:'',
        provinceOptions: [],
        city:'',
        cityOptions:[],
        region:'',
        regionOptions:[],
      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style>
</style>
