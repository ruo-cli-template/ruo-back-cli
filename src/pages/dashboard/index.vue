<template>
  <div class="dashboard">
    <div class="container-img"></div>
    <div class="container-title">若伟子</div>
    <el-select v-model="value" placeholder="你最喜欢的食物是？">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        },
        {
          value: "选项6",
          label: "我"
        }
      ],
      value: ""
    }
  }
}
</script>

<style lang='scss' scoped>
@import "index.scss";
</style>