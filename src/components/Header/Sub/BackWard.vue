<template>
  <div class="back-ward" @click="onRouterBack">
    <span class="iconfont icon-arrow-left-bold"></span>
  </div>
</template>

<script>
export default {
    name: 'BackWard',
    methods: {
        onRouterBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';
    .back-ward{
        position: absolute;
        top: 0;
        left: 0;
        @include flex-row;
        @include vh-center;
        width: $headerHeight;
        height: $headerHeight;

        .iconfont{
            font-size: .2rem;
        }
    }
</style>