<template>
  <div class="home">
    <label for="id">User ID : </label>
    <input type="text" v-model="user">
    <button @click="loginUser">Login</button>
    <p>{{$store.state.user}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user : ''
    }
  },
  methods : {
    loginUser () {
      this.$store.commit('login',this.user)
      //'/list'로 이동
      this.$router.push('/list')
    }
  }

}
</script>
