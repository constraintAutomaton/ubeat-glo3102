<template>
  <div id="loginPage" class="container">
    <div id="login-form">
      <h3>Login</h3>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" v-model="email" class="validate" required="" aria-required="true">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" v-model="password" class="validate" required="" aria-required="true">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="input-field col s12">
        <button class="btn waves-effect waves-light" type="submit" name="action" @click="login">LOGIN</button>
      </div>
      <div>
        <p>
          First time user?
          <router-link to="/signup">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * email=sonkeng%40gmail.com&name=sonkeng&password=sonkeng
 */
import ApiInterface from "../lib/ApiInterface";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
      login: async function(even){
          console.log(even);
          const engine =new ApiInterface(false);
          await engine.login(this.email, this.password).then((rep)=>{
              console.log(rep.token);
              this.$cookie.set("token", rep.token);
              console.log(this.$cookie.get("token"));
              this.$cookie.set("email", rep.email);
              this.$cookie.set("name", rep.name);
              this.$cookie.set("id", rep.id);
              M.toast({html: 'Login successful, welcome', classes: 'rounded'});
              setTimeout(() => {
                  window.location.hash = '/';
                  location.reload(true);
              }, 1000);
          }).catch(() => {
              M.toast({html: 'Username and password are wrong!', classes: 'rounded'});
          });
      },
  }
};
</script>

<style scoped>
button {
  height: 35px;
  background-color: #2ab7a9;
}
#login-form {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
