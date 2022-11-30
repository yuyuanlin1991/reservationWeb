

import {
    SET_USERINFO
} from './mutationTypes'

export default {
    [SET_USERINFO](state, data ) {
        state.userInfo = data;
    }
}