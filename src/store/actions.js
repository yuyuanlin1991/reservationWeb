import {
    SET_USERINFO
} from './mutationTypes'

import http from '../common/http'
export default {
    setUser({ commit }) {
        console.log(SET_USERINFO)
        http.get('user')
            .then((data) => {
                commit(SET_USERINFO, data)
            })
            .catch(err => {
                console.log('获取用户数据失败', err);
            })
    }
}

Function.prototype.myCall = function (obj) {
    if (typeof this !== 'function') console.error('type error')
    let args = [...arguments].slice(1), res = null
    obj = obj || window
    obj.fn = this
    console.log(obj)
    res = obj.fn(...args)
    delete obj.fn
    return res;
};
let obj1 = {
    name: "yuanlin",
    age: 18,
    getName: function () {
        console.log(this.name);
    }
};
let obj2 = {
    name: "xiaobai"
};
obj1.getName.myCall(obj2);




