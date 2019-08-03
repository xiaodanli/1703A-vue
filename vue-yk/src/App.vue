<template>
  <div id="app">
    <router-view class="con"/>
    <footer>
        <router-link to="/send" tag="span">配送到家</router-link>
        <router-link to="/classify" tag="span">分类</router-link>
        <router-link to="/vip" tag="span">会员</router-link>
        <router-link to="/car" tag="span">购物车</router-link>
        <router-link to="/my" tag="span">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing: border-box;
    }
    html,body,#app{
        width:100%;
        height: 100%;
        overflow: hidden;
    }

    #app{
        display: flex;
        flex-direction: column;
    }

    footer{
        width:100%;
        height: 44px;
        background: #eee;
    }

    .active{
        color:red;
    }

</style>
