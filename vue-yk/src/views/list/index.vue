<template>
    <div>
        列表
        <ul>
            <li :class="{'high':item.id === chooseId}" v-for="item in list" :key="item.id" @click="chooseItem(item.id)">{{item.title}}</li>
        </ul>
        <button @click="$router.push('/add')">添加</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['list','chooseId'])
    },
    methods:{
        ...mapMutations(['choose']),
        chooseItem(id){
            this.choose(id);
            this.$router.go(-1);
        }
    }
}
</script>
<style>
    .high{
        color:red;
    }
</style>

