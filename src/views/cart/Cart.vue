<template>
  <div class="cart">
    <nav-bar class="nav-barr">
    <div slot="center">购物车({{$store.getters.cartLength}})</div>
  </nav-bar>
  <!-- 商品列表 -->
  <cart-list/>
  <!-- 底部汇总 -->
  <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
  }
}
</script>

<style>
.nav-barr {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
.cart {
  height: 100vh;
}
</style>