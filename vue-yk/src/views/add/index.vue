<template>
    <div>
        <input type="text" v-model="title">
        <input type="text" v-model="desc">
        <button @click="add">添加</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            title:'',
            desc:''
        }
    },
    methods:{
        ...mapMutations(['addItem']),
        add(){
            this.addItem({id:new Date().getTime(),title:this.title,desc:this.desc});
            this.$router.go(-1)
        }
    }
}
</script>
