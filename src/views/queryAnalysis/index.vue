<template>
  <div class="app-container">
    <el-card style="margin-bottom:20px;">
      <div slot="header" class="clearfix">
        <span>信息统计</span>
      </div>

      <div class="user-profile">
        <div class="box-center">
          <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
            <div>Hello</div>
            {{ user.role }}
          </pan-thumb>
        </div>
        <div class="box-center">
          <div class="user-name text-center">{{ user.name }}</div>
          <div class="user-role text-center text-muted">{{ user.role}}</div>
        </div>
      </div>

      <div class="user-bio">
        <div class="user-education user-bio-section">
          <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Education</span></div>
          <div class="user-bio-section-body">
            <div class="text-muted">
              JS in Computer Science from the University of Technology
            </div>
          </div>
        </div>

        <div class="user-skills user-bio-section">
          <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>Skills</span></div>
          <div class="user-bio-section-body">
            <div class="progress-item">
              <span>水体数量:20</span>
            </div>
            <div class="progress-item">
              <span>图片数量:30</span>
            </div>
            <div class="progress-item">
              <span>时间范围：2018.01~2019.09</span>
            </div>
            <div class="progress-item">
              <span>数据源：高分一号、高分二号、高分三号、MODIS、LANDSAT-5、LANDSAT-8</span>
            </div>
            <div class="progress-item">
              <span>可反演指标：总磷（TP）、总氮（TN）、叶绿素a（Chl-a）、氨氮（NH）、总悬浮物（TSS）</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: 'test',
          email: 'test',
          avatar: 'test',
          roles: 'test'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
