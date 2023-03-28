<template>
  <div class="icons-wrapper">
    <category-icons-sub 
        v-for="item in fieldList" 
        :key="item.id" 
        :field="item.field" 
        :bgColor="item.bgColor" 
        :icon="item.icon" 
        :iconText="item.iconText"
    >
    </category-icons-sub>
  </div>
</template>

<script>
import CategoryIconsSub from './Sub.vue';
import fieldsData from 'data/fields.js'
export default {
    name: 'CategoryIcons',
    components: {
        CategoryIconsSub
    },
    data(){
        return {
            fieldList: fieldsData
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles/mixins.scss';
    @import 'styles/veriables.scss';
    .icons-wrapper{
        @include flex-row;
        flex-wrap: wrap;
        background-color: #fff;
        border: 1px solid #ddd;
    }
</style>