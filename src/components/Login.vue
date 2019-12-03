<template>
  <div id="loginPage" class="container">
      <form>
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
          <button onclick="login()">Login</button>
          <p>First time user? <router-link to="/signup">Register</router-link></p>
        </div>
        <v-snackbar
          :color="color"
          v-model="snackbar"
        > {{snackText}}
          <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </form>


  </div>

</template>

<script>

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
            async login(email, pass) {
                await utilUser.getCurrentUser(email, pass).then((rep) => {
                    this.snackText = `Login successful, welcome, ${rep.data.name}`;
                    this.color = 'success';
                    this.snackbar = true;

                }).catch(() => {
                    this.snackText = 'Username and password are wrong!';
                    this.color = 'error';
                    this.snackbar = true;
                });
            },
        }

        }
</script>

<style scoped>
button{
  height: 35px;
  background-color: #2ab7a9;
}
</style>
