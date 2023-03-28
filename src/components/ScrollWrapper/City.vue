<template>
  <div class="scroll-wrappper" ref="wrapper">
    <div class="scroll-content">
        <current-city></current-city>
        <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CurrentCity from './CityList/CurrentCity.vue'
import CityList from './CityList/Index.vue';
import { ref } from 'vue';
export default {
    name: 'CityScrollWrapper',
    components: {
        CurrentCity,
        CityList
    },
    onMounted(){
        const wrapper = ref(null);
        this.scroll = new BetterScroll(wrapper.value);
    }
}
</script>

<style>

</style>