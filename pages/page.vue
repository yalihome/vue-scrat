<template>
    <div class="P-page">
        <div class="P-pageCon">
            <router-view></router-view>
        </div>
        <div class="P-pageNav">
            <navs :menus="menus" :cur="0"></navs>
        </div>
    </div>
</template>

<style lang="less">
@import url("../common/var.less");
@cateH: 50/28rem;
.P-page {
    width: 100%;
    height: 100%;
    &Con{
        height: calc(100vh - @navH);
        overflow-y: auto;
    }
}
</style>

<script>
import Navs from "../components/nav/nav.vue";
export default {
  data: function() {
    return {
        menus: [
            {
                url: "/index",
                icon: "index"
            },
            {
                url: "/orders",
                icon: "orders"
            },
            {
                url: "/center",
                icon: "center"
            }
        ],
        cur: 0
    }
  },
  components: {
      navs: Navs
  }
};
</script>
