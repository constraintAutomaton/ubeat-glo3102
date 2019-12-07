<template>

  <div id="signupPage" class="container">
    <div id="signup-form">
      <h3>Signup</h3>
      <p>
        <label for="username"> Enter your username</label>
        <input type="text" id="username" name="inputName" v-model="inputName" required>
      </p>
      <p>
        <label for="email"> Enter your email adress </label>
        <input type="email" id="email" name="inputEmail" v-model="inputEmail" required>
        <p> test {{inputEmail}}</p>
      </p>
      <p>
        <label for="password"> Enter your password</label>
        <input type="password" id="password" name="inputPasseword" v-model="inputPassword" required>
      </p>
      <p>
        <label for="password"> Repeat your Password</label>
        <input type="password" id="repeatPassword" name="inputRepeatPasseword" v-model="inputRepeatPassword" required>
      </p>
      <div >
        <button id="signupBtn" v-on:click="signup">SIGNUP</button>
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
//import {createUser} from "./../lib/util/utilUser";
import ApiInterface from "./../lib/ApiInterface";
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
            signup: async function(event){


                if(this.inputPassword===this.inputRepeatPassword){
                    console.log(event);
                    console.log("test");

                    const engine =new ApiInterface(false);

                    const rep = await engine.signup(this.inputName, this.inputEmail, this.inputPassword);
                    console.log(rep);

            }

        }
    }
    }
</script>

<style scoped>
#signupBtn {
  height: 35px;
  background-color: #2ab7a9;
}
  #signup-form{
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-items:center;
  }

</style>
