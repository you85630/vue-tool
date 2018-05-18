<template>
  <div class="login">
    <div class="card">
      <div class="title">登录</div>
      <ul class="form">
        <li>
          <i class="fa fa-user-circle-o"></i>
          <input type="text" placeholder="请输入账号" v-model="account.userName">
        </li>
        <li>
          <i class="fa fa-unlock-alt"></i>
          <input type="text" placeholder="请输入密码" v-model="account.passWord">
        </li>
        <li class="goto">
          <a @click="login(account)">登录</a>
          <p v-if="errorMsg"><i class="fa fa-exclamation-circle"></i>{{errorMsg}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'account',
      'errorMsg'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('./../assets/img/bg.jpg') 0 0 no-repeat;
  background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:inherit;
    content: '';
    filter: blur(12px);
    filter:(2px);
  }
}
.card{
  position: relative;
  z-index: 99999;
  box-sizing: border-box;
  padding: 40px;
  min-width: 400px;
  width: 30%;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0,.6);
}
.title{
  text-align: center;
  font-size: 20px;
}
.form{
  padding: 0 10%;
  li{
    margin-top: 40px;
    background-color: #eee;
    text-align: center;
    i,input{
      vertical-align: middle;
    }
    i{
      width: 10%;
      text-align: center;
      font-size: 20px;
    }
    input{
      box-sizing: border-box;
      padding: 10px 8px;
      width: 88%;
      border: none;
      border-radius: 2px;
      background-color: #eee;
      font-size: 14px;
    }
    a{
      display: block;
      padding: 8px 0;
      border-radius: 2px;
      background-color:#409eff;
      color:#fff;
      font-size: 18px;
    }
  }
  .goto{
    position: relative;
    background-color: #fff;
    p{
      position: absolute;
      bottom: -30px;
      width: 100%;
      color: #f00;
      font-size: 12px;
      .fa{
        vertical-align: middle;
        font-size: 14px;
      }
    }
  }
}
</style>
