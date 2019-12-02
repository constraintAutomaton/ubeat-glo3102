<template>
  <div id="signupPage" class="container">
    <form>
      <h3>Signup</h3>
      <p>
        <label for="username"> Enter your username</label>
        <input type="text" id="username" name="inputName" required>
      </p>
      <p>
        <label for="email"> Enter your email adress </label>
        <input type="email" id="email" name="inputEmail" required>
      </p>
      <p>
        <label for="password"> Enter your password</label>
        <input type="password" id="password" name="inputPasseword" required>
      </p>
      <p>
        <label for="password"> Repeat your Password</label>
        <input type="password" id="repeatPassword" name="inputRepeatPasseword" required>
      </p>
      <div >
        <button id="signuBtn" v-on:click="signup(inputName, inputEmail, inputPassword, inputRepeatPassword)">SIGNUP</button>
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
        data(){
            return {
                snackText: '',
                snackbar: false,
                color: '',
                inputName: '',
                inputEmail: '',
                inputPassword: '',
                inputRepeatPassword: '',
            };
        },
        methods: {
            async signup(name, email, password, passeword2){
                if(password===passeword2){
                    await createNewUser(name, email, password).then((rep)=>{
                        this.snackText = `Successful sign up, welcome, ${rep.data.name}`;
                        this.color = 'success';
                        this.snackbar = true;
                        setTimeout(() => {
                            window.location.hash = '/login';
                        }, 2000);

                    }).catch((err)=>{
                        this.snackText = ` failed! ${err.response.statusText}`;
                        this.color = 'error';
                        this.snackbar = true;

                    })
                }else{
                    this.snackText = 'Passwords do not match';
                    this.color = 'error';
                    this.snackbar = true;

                }

            }
        }
    };
</script>

<style scoped>
button {
  height: 35px;
  background-color: #2ab7a9;
}
</style>
