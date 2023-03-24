<template>
  <div class="login">
    <div class="content">
      <a-card title="登录">
        <a-input v-model:value="user.username" placeholder="Basic usage" />
        <br />
        <br />
        <a-input-password
          v-model:value="user.password"
          placeholder="input password"
        />
        <br />
        <br />
        <a-button type="primary" @click="handleLogin">登录</a-button>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: "admin",
        password: "admin.1234"
      }
    }
  },
  methods: {
    handleLogin () {
      console.log("登录");
      this.$router.push('/home')
    }
  }
}
</script>

<style  scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  width: 400px;
}
</style>