<template>
  <div class="scroll-wrappee" ref="wrapper">
    <div class="scroll-content">
        <current-city></current-city>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CurrentCity from './CityList/CurrentCity.vue'
import { onMounted, ref } from 'vue';
export default {
    name: 'CityScrollWrapper',
    components: {
        CurrentCity
    },
    onMounted(){
        const wrapper = ref(null);
        this.scroll = new BetterScroll(wrapper.value);
    }
}
</script>

<style>

</style>