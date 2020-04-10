<template>
    <div class="M-nav">
        <div class="M-navItem" :class="{'act': cur==index}" v-for="(item,index) in menus" :key="index" @click="onItem(item, index)">
            <i v-if="item.icon" class="icon" :class="[item.icon]"></i>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<style lang="less">
@import url("../../common/common.less");
@import url("../../common/var.less");
.M-nav{
    .flex();
    &Item{
        padding: 10/28rem 0;
        height: @navH;
        line-height: @navH;
        flex: 1;
        &>*{
            display: block;
        }
        span{
            text-align: center;
            font-size: 1rem;
            
        }
        i{
            width: 20/28rem;
            height: 20/28rem;
            margin: 0 auto;
        }
        &.act{
            span{
                color: @primaryColor;
            }
            i{
               //图片如何实现颜色变化 mask
            }
        }
    }
}
</style>

<script>
export default {
    props: {
        menus: {
            type: Array,
            required: true,
            default: []
        },
        cur: {
            type: Number,
            default: 0 
        }
    },
    data: function(){
        return {}
    },
    mounted: function(){
        // this.$router.go(this.menus[0].url);
    },
    methods: {
        onItem: function(item,index){
            if(index==this.cur) return;
            this.cur = index;
            this.$router.go(item.url);
        }
    }
}
</script>


