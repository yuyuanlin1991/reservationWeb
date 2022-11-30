import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        userInfo: {}
      }
    },  
    mutations,
    actions
  })
  export default store;