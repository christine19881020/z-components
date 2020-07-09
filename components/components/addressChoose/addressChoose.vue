<template>
  <el-row :gutter="gutter">
    <el-col :span="8">
      <el-select v-model="privince" placeholder="请选择省" @change="setCityOptionsFn">
        <el-option v-for="item in provinceOptions" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-select v-model="city" placeholder="请选择市" @change="setRegionOptionsFn">
        <el-option v-for="item in cityOptions" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-select v-model="region" placeholder="请选择" @change="setRegionFn">
        <el-option v-for="item in regionOptions" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-col>
  </el-row>
</template>

<script>
  import {
    cityCode
  } from './cityCode.js'
  export default {
    name: 'addressChoose',
    props: {
      gutter: {
        type: Number,
        default: 0
      },
      initChoosed: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        privince: '',
        provinceOptions: cityCode,
        city: '',
        cityOptions: [],
        region: '',
        regionOptions: [],
      }
    },
    methods: {
      setCityOptionsFn(province) {
        console.log('val', province)
        if (province) {
          this.province = province;
          this.city = "";
          this.region = "";
          var ob = cityCode.find((x) => {
            return x.label == province;
          })
          this.cityOptions = ob.city;
        }
      },
      setRegionOptionsFn(city) {
        // console.log('city', city)
        this.city = city;
        var ob = this.cityOptions.find(x => {
          return x.label == city
        })
        this.regionOptions = ob.area;
      },
      setRegionFn(val) {
        console.log('addressNewEv', val);
        this.region = val;
        var choosed = [];
        choosed = this.province + "," + this.city + "," + this.region;
        // console.log('addressNewEv', choosed);
        this.$emit('addressNewEv', choosed);
      },
    },
    watch: {
      initChoosed: function(newv, oldv) {
        // console.log('initChoosed', newv)
        if (newv) {
          var arr = newv.split(',');
          this.province = arr[0];
          this.city = arr[1];
          this.region = arr[2];
        } else {
          this.province = "";
          this.city = "";
          this.regions = "";
        }
      }
    },
    mounted() {

    }
  }
</script>

<style>
  .el-select {
    width: 100%;
  }
</style>
