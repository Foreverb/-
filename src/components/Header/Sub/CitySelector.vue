<template>
    <div class="city">
        <router-link to="City">
            <span class="city-name">{{ cityName }}</span>
            <span class="iconfont icon-header-arrow"></span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CitySelector',
    data(){
        return {
            cityName: '全部'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';
    .city {
        width: .6rem;
        height: $headerHeight;
        a {
            @include flex-row;
            @include vh-center;
            width: 100%;
            height: $headerHeight;

            .city-name{
                font-size: .16rem;
                font-weight: bold;
            }
            .iconfont{
                font-size: .08rem;
                margin-left: .03rem;
            }
        }
    }
</style>