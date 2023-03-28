<template>
  <div class="scroll-wrappper" ref="wrapper">
    <div class="scroll-content">
        <category-icons></category-icons>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BetterScroll from 'better-scroll';
import CategoryIcons from './CategoryIcons/Index.vue';
export default {
    name: 'HomeScrollWrapper',
    components: {
        CategoryIcons
    },
    onMounted(){
        const wrapper = ref(null);
        this.scroll = new BetterScroll(wrapper.value);
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';
</style>