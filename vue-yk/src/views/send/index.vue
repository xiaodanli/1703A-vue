<template>
    <div>
        <header>
            <span @click="goList">选择地址：{{address}}</span>
        </header>
        <div>
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="../../assets/logo.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../assets/logo.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../assets/logo.png" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
            }
        }
    },
    computed:{
        ...mapGetters(['address'])
    },
    methods: {
        ...mapActions(['getList']),
        goList(){
            this.$router.push('/list')
        }
    },
    created(){
        this.getList()
    }
}
</script>
<style lang="scss">
    .con{
        width:100%;
        flex:1;
    }
</style>
