<template>
    <div class="P-index">
        <div class="P-indexBanner">

        </div>
        <div class="M-cates">
            <span v-for="(cate,index) in cates" :key="index">{{cate}}</span>
        </div>
        <div class="P-indexProducts">
        
        </div>
    </div>
</template>

<style lang="less">
@import url("../../common/common.less");
@cateH: 50/28rem;
.P-index {
  .M-cates {
    .flex();
    span {
      flex: 1;
      height: @cateH;
      line-height: @cateH;
    }
  }
}
</style>


<script>
export default {
  data: function() {
    return {
      cates: ["全部", "服装", "饮食", "植物", "美妆"],
      banners: []
    }
  }
};
</script>
