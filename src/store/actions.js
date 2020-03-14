import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            //查找之前数组中是否有该商品
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                commit(ADD_COUNTER, oldProduct)
                resolve('当前数量+1')
            } else {
                payload.count = 1;
                // state.cartList.push(payload)
                commit(ADD_TO_CART, payload)
                resolve('添加了新商品')
            }
        })
    }
}