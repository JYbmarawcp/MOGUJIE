<template>
    <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <van-checkbox @click="checkedAllClick" class="checked-all" v-model="checkedAll">
          全选
        </van-checkbox>
      </div>
      <div class="cart-bottom-price">
        合计：
        <span>¥ {{ Number(totalPrice).toFixed(2) }}</span>
        元
      </div>
      <div class="cart-bottom-btn">
        <button @click="onSubmit">提交订单({{ checkedLength }})</button>
      </div>
    </div>
</template>

<script>
import CheckButtom from 'components/content/checkButton/CheckButton'
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButtom
  },
  data() {
    return {
      checkedAll: false
    };
  },
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),
    // 购物车总价
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked === true;
        })
        .reduce((prev, item) => {
          return prev + item.price * item.count;
        }, 0);
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked === true).length;
    }
  },
  methods: {
    ...mapMutations(["clearCartList", "setCartList"]),
    // 全选
    checkedAllClick() {
      this.cartList.forEach(item => (item.checked = !this.checkedAll));
    },
    // 反选
    itemChange() {
      let result = this.cartList.filter(item => item.checked === true);
      this.checkedAll = result.length > 0 && result.length === this.cartList.length;
    },
    // 按钮提交
    onSubmit() {
      if (this.checkedLength === 0) {
        this.$toast({
          type: "fail",
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500
        });
      } else {
        this.$dialog
          .confirm({
            title: "温馨提示",
            message: "您确定要提交订单吗?"
          })
          .then(() => {
            this.$toast({
              type: "success",
              message: `提交 ${this.checkedLength} 条数据成功`,
              forbidClick: true,
              duration: 1500
            });
            // 提交数据清空对应购物车数据
            setTimeout(() => {
              this.clearCartList();
              this.checkedAll = false;
            }, 1500);
          })
          .catch(() => {
            return false;
          });
      }
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}

.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>