<template>
  <div class="app-container">
    <div>
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <el-tree
            :data="address"
            node-key="address"
            default-expand-all
            highlight-current
            :props="defaultProps"
            @node-click="handleNodeClick"
          />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column
              fixed
              prop="name"
              label="水体"
              width="150"
            />
            <el-table-column
              prop="date"
              label="日期"
              width="150"
            />
            <el-table-column
              prop="province"
              label="省份"
              width="120"
            />
            <el-table-column
              prop="city"
              label="市区"
              width="120"
            />
            <el-table-column
              prop="address"
              label="地址"
              width="300"
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="220"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  @click="handleView(scope.$index, scope.row)"
                >查看</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      address: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }],

      tableData: [{
        date: '2019-09-02',
        name: '西湖',
        province: '杭州',
        city: '西湖区',
        address: '杭州市西湖区西湖'
      }, {
        date: '2019-09-02',
        name: '西湖',
        province: '杭州',
        city: '西湖区',
        address: '杭州市西湖区西湖'
      }, {
        date: '2019-09-02',
        name: '西湖',
        province: '杭州',
        city: '西湖区',
        address: '杭州市西湖区西湖'
      }, {
        date: '2019-09-02',
        name: '西湖',
        province: '杭州',
        city: '西湖区',
        address: '杭州市西湖区西湖'
      }, {
        date: '2019-09-02',
        name: '西湖',
        province: '杭州',
        city: '西湖区',
        address: '杭州市西湖区西湖'
      }]
    }
  },
  computed: {
    ...mapGetters([
      // 'address'
    ])
  },
  created() {
    // this.getAddress()
  },
  methods: {
    // getAddress() {
    //   this.address = {
    //     address: this.address,
    //   }
    // }
    handleView(index, row) {
      console.log('view testing')
      console.log(index, row)
    },
    handleEdit(index, row) {
      console.log('Edit testing')
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log('Delete testing')
      console.log(index, row)
    }
  }
}
</script>
