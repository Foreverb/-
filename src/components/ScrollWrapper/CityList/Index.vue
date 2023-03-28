<template>
  <div class="list-wrapper">
    <city-list-sub v-for="item in cityList" :cityInfo="item" :key="item.cityId"></city-list-sub>
  </div>
</template>

<script>
import CityListSub from './Sub.vue';
import cityDatas from 'data/cities.js'
export default {
    name: '',
    components: {
        CityListSub
    },
    data(){
        return{
            cityList: cityDatas
        }
    }
}
</script>

<style lang="scss" scoped>

</style>