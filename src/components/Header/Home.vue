<template>
    <header class="header">
        <city-selector></city-selector>
        <false-input></false-input>
    </header>
</template>

<script>
import FalseInput from './Sub/FalseInput.vue';
import CitySelector from './Sub/CitySelector.vue';
export default {
    name: 'HomeHeader',
    components: {
        FalseInput,
        CitySelector
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';

    .header{
        @include flex-row;
        height: $headerHeight;
        background-color: $defaultBgColor;
    }
</style>