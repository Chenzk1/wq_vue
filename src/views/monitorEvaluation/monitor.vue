<template>
  <div class="monitor-container">
    <el-row :gutter="24" style="margin:20px">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm" :model="listForm" prop="listForm" label-width="100px">
            <el-form-item label="ID" prop="id">
              <el-input v-model="listForm.id" :disabled="true" />
            </el-form-item>
            <el-form-item label="水体" prop="name">
              <el-input v-model="listForm.name" :disabled="true" />
            </el-form-item>
            <el-form-item label="城市" prop="city">
              <el-input v-model="listForm.city" :disabled="true" />
            </el-form-item>
            <el-form-item label="来源" prop="type">
              <el-input v-model="listForm.type" :disabled="true" />
            </el-form-item>
            <el-form-item label="波段数" prop="bands">
              <el-input v-model="listForm.bands" :disabled="true" />
            </el-form-item>
            <el-form-item label="拍摄时间" name="timestamp">
              <el-date-picker v-model="listForm.timestamp" :disabled="true" align="right" type="date" placeholder="选择日期" />
            </el-form-item>
            <el-form-item label="RGB图片" prop="rgb">
              <img v-if="listForm.rgb" :src="listForm.rgb" style="width:200px;height:200px;display:block">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.tp" :model="listForm" prop="listForm.tp" label-width="100px">
            <el-form-item label="参数1">
              <el-input v-model="listForm.tp.para1" placeholder="5" />
            </el-form-item>
            <el-form-item label="参数2">
              <el-input v-model="listForm.tp.para2" placeholder="5" />
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayResult(retrieval_params.tp)">总磷反演</el-button>
            </el-form-item>
            <el-form-item style="vertical-align:middle;text-align:center">
              <img v-if="listForm.tp.resultPicture" :src="listForm.tp.resultPicture" style="width:200px;height:200px;display:block,margin-top:auto;margin-bottom:auto;">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.tn" :model="listForm" prop="listForm.tn" label-width="100px">
            <el-form-item label="参数1">
              <el-input v-model="listForm.tn.para1" placeholder="5" />
            </el-form-item>
            <el-form-item label="参数2">
              <el-input v-model="listForm.tn.para2" placeholder="5" />
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayResult(retrieval_params.tn)">总氮反演</el-button>
            </el-form-item>
            <el-form-item style="vertical-align:middle;text-align:center">
              <img v-if="listForm.tn.resultPicture" :src="listForm.tn.resultPicture" style="width:200px;height:200px;display:block,margin-top:auto;margin-bottom:auto;">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="24" style="margin:20px">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.chla" :model="listForm" prop="listForm.chla" label-width="100px">
            <el-form-item label="参数1">
              <el-input v-model="listForm.chla.para1" placeholder="5" />
            </el-form-item>
            <el-form-item label="参数2">
              <el-input v-model="listForm.chla.para2" placeholder="5" />
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayResult(retrieval_params.chla)">叶绿素a反演</el-button>
            </el-form-item>
            <el-form-item style="vertical-align:middle;text-align:center">
              <img v-if="listForm.chla.resultPicture" :src="listForm.chla.resultPicture" style="width:200px;height:200px;display:block,margin-top:auto;margin-bottom:auto;">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.tss" :model="listForm" prop="listForm.tss" label-width="100px">
            <el-form-item label="参数1">
              <el-input v-model="listForm.tss.para1" placeholder="5" />
            </el-form-item>
            <el-form-item label="参数2">
              <el-input v-model="listForm.tss.para2" placeholder="5" />
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayResult(retrieval_params.tss)">总悬浮物反演</el-button>
            </el-form-item>
            <el-form-item style="vertical-align:middle;text-align:center">
              <img v-if="listForm.tss.resultPicture" :src="listForm.tss.resultPicture" style="width:200px;height:200px;display:block,margin-top:auto;margin-bottom:auto;">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.nh" :model="listForm" prop="listForm.nh" label-width="100px">
            <el-form-item label="参数1">
              <el-input v-model="listForm.nh.para1" placeholder="5" />
            </el-form-item>
            <el-form-item label="参数2">
              <el-input v-model="listForm.nh.para2" placeholder="5" />
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayResult(retrieval_params.nh)">氨氮反演</el-button>
            </el-form-item>
            <el-form-item style="vertical-align:middle;text-align:center">
              <img v-if="listForm.nh.resultPicture" :src="listForm.nh.resultPicture" style="width:200px;height:200px;display:block,margin-top:auto;margin-bottom:auto;">
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="24" style="margin:20px">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="form-wrapper">
          <el-form ref="listForm.evaluate" :model="listForm" prop="listForm.evaluate" label-width="100px">
            <el-form-item label="水质评价方法">
              <el-select v-model="levelSelect" placeholder="请选择">
                <el-option
                  v-for="item in evaluteMethodOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>
            </el-form-item>
            <el-form-item size="medium" style="vertical-align:middle;text-align:center">
              <el-button type="primary" round="True" size="medium" @click="displayLevel(levelSelect)">水质评价</el-button>
            </el-form-item>
            <el-form-item label="水质评价结果">
              1
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <!-- <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
        <el-form :model="listForm" prop='listForm.chla' ref='listForm.chla' label-width="100px">
          <el-form-item label="水质评价结果">
          </el-form-item>
        </el-form>
    </el-dialog> -->
  </div>
</template>

<script>
//
import { fetchList, fetchPv, createArticle, updateArticle, fetchResult, fetchLevel } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'

const TypeOptions = [
  { key: 'MODIS', display_name: 'MODIS' },
  { key: 'GF-1', display_name: '高分一号' },
  { key: 'GF-2', display_name: '高分一号' },
  { key: 'GF-3', display_name: '高分一号' },
  { key: 'LANDSAT-5', display_name: 'LANDSAT-5' },
  { key: 'LANDSAT-8', display_name: 'LANDSAT-8' }
]
const evaluteMethodOptions = [
  { key: '1', label: '单因子', value: 'single', disabled: false },
  { key: '2', label: '多因子', value: 'multi', disabled: false },
  { key: '3', label: 'svr', value: 'svr', disabled: false }
]
const provinceOptions = [
  '北京市', '广东省', '山东省', '江苏省', '河南省', '上海市', '河北省', '浙江省', '香港特别行政区', '陕西省', '湖南省', '重庆市',
  '福建省', '天津市', '云南省', '四川省', '广西壮族自治区', '安徽省', '海南省', '江西省', '湖北省', '山西省', '辽宁省', '台湾省',
  '黑龙江', '内蒙古自治区', '澳门特别行政区', '贵州省', '甘肃省', '青海省', '新疆维吾尔自治区', '西藏自治区', '吉林省', '宁夏回族自治区'
]
// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = TypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})
const retrieval_params = {
  tp: { key: 'tp', para1: 6, para2: 6 },
  tn: { key: 'tn', para1: 6, para2: 6 },
  tss: { key: 'tss', para1: 6, para2: 6 },
  cod: { key: 'cod', para1: 6, para2: 6 },
  nh: { key: 'nh', para1: 6, para2: 6 },
  chla: { key: 'chla', para1: 6, para2: 6 }
}
const levelSelect = 'single'
export default {
  name: 'Monitor',
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      listForm: { id: this.$route.params.id },
      total: 0,
      listLoading: true,
      listQuery: {
        id: this.$route.params.id
      },
      importanceOptions: [1, 2, 3],
      TypeOptions,
      provinceOptions,
      evaluteMethodOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      showReviewer: false,
      temp: {
        id: undefined,
        timestamp: new Date(),
        name: '',
        type: '',
        province: '浙江省',
        rgb: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create',
        view: 'View',
        export: 'Export'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false,
      multipleSelection: [],
      retrieval_params: retrieval_params,
      levelSelect
    }
  },
  created() {
    this.getList()
    // console.log(this.list)
    // console.log(this.listForm)
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getList() {
      this.listLoading = true

      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listForm = response.data.items[0]
        this.retrieval_params.tp.para1 = response.data.items[0].tp.para1
        this.retrieval_params.tp.para2 = response.data.items[0].tp.para2

        this.retrieval_params.tn.para1 = response.data.items[0].tn.para1
        this.retrieval_params.tn.para2 = response.data.items[0].tn.para2

        this.retrieval_params.tss.para1 = response.data.items[0].tss.para1
        this.retrieval_params.tss.para2 = response.data.items[0].tss.para2

        this.retrieval_params.chla.para1 = response.data.items[0].chla.para1
        this.retrieval_params.chla.para2 = response.data.items[0].chla.para2

        this.retrieval_params.nh.para1 = response.data.items[0].nh.para1
        this.retrieval_params.nh.para2 = response.data.items[0].nh.para2

        this.retrieval_params.cod.para1 = response.data.items[0].cod.para1
        this.retrieval_params.cod.para2 = response.data.items[0].cod.para2

        this.levelSelect = response.data.items[0].evaluate.single
        console.log(this.levelSelect)
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleView(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'view'
      this.dialogFormVisible = true
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}`
        ? 'ascending'
        : sort === `-${key}`
          ? 'descending'
          : ''
    },
    displayResult: function(dic) {
      console.log(dic)
      fetchResult(dic)
    },
    displayLevel: function(key) {
      console.log(key)
      fetchLevel(key)
    }
  }
}
</script>

<style>
  .monitor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
      position: absolute;
      top: 0px;
      border: 0;
      right: 0;
    }

    .form-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;

    }

  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
