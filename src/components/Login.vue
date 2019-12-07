<template>
  <div id="loginPage" class="container">
      <div id="login-form">
        <h3>Login</h3>
        <p>
          <label for="email"> Votre Adresse email</label>
          <input type="email" id="email" name="inputEmail" v-model="email" required>
        </p>
        <p>
          <label for="password"> Votre Adresse password</label>
          <input type="password" id="password" name="inputPasseword" v-model="password" required>
        </p>
        <div>
          <button onclick="login">Login</button>
          <p>First time user? <router-link to="/signup">Register</router-link></p>
        </div>
        <v-snackbar
          :color="color"
          v-model="snackbar"
        > {{snackText}}
          <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </div>


  </div>

</template>

<script>
import ApiInterface from "../lib/ApiInterface";
    export default {
        data() {
            return {
                snackText: '',
                snackbar: false,
                color: '',
                email: '',
                password: '',

            };
        },
        methods:{
            login: async function(even){
            console.log(even);
            const engine =new ApiInterface(false);
            const rep = await engine.login(this.email, this.password);
            console.log(rep);

        },
  }
};
</script>

<style scoped>
  button{
  height: 35px;
  background-color: #2ab7a9;
}
#login-form{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-items:center;
}
</style>
