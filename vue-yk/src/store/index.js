import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ //组件间共享的数据
        chooseId:0,
        list:[]
    },
    mutations:{ //修改state数据的方法   方法：只有两个参数 第一个参数：state  第二个参数：触发时传递的参数  若想传多个以对象形式传递   commit('函数名',参数)  同步的任务
        choose(state,id){
            state.chooseId = id
        },
        getListM(state,list){
            state.list = [...list];
            console.log(state.list)
        },
        addItem(state,obj){
            state.list.push(obj);
        }
    },
    getters:{ //包装state数据，里面放的是方法，但是要理解成属性
        address(state){  
            let target = state.list.length > 0 && state.list.find(item => item.id === state.chooseId);
            return `${target.title?target.title:'--'}-${target.desc?target.desc:'--'}`
        }
    },
    actions:{   //异步的任务  放的函数
        getList({commit}){  //第一个参数：和store有同样的属性和方法   第二个参数：触发时传递的参数
            axios.get('/api/list').then(res => {
                if(res.data.code === 1){
                    commit('getListM',res.data.data)
                }
            })
        },
        addSync({commit},obj){
            axios.post('/api/add',obj).then(res => {
                if(res.data.code === 1){
                    commit('addItem',obj)
                }
            })
        }
    }
})
