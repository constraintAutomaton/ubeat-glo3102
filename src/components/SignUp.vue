<template>
  <div id="signupPage" class="container">
    <div id="signup-form">
      <h3>Signup</h3><div class="row">
      <div class="input-field col s12">
        <input id="name" type="text" v-model="inputName" class="validate">
        <label for="name">Enter your username</label>
      </div>
    </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" v-model="inputEmail" class="validate" required>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" v-model="inputPassword" data-length="10" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="inputRepeatPassword" type="password" v-model="inputRepeatPassword" class="validate">
          <label for="password">Repeat password</label>
        </div>
      </div>
      <div >
        <button class="btn waves-effect waves-light" type="submit" name="signup" v-on:click="signup">SIGNUP</button>
      </div>
    </div>
  </div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import { required, email } from "vuelidate/lib/validators";
    export default {
        data(){
            return {
                inputName: '',
                inputEmail: '',
                inputPassword: '',
                inputRepeatPassword: ''
            };
        },
        validations() {
            return {
                inputName:{
                    required
                },
                inputEmail: {
                    required,
                    email
                },
                inputPassword: {
                    required
                },
                inputRepeatPassword: {
                    required
                }
            };
        },
        methods: {
            signup: async function(event){
                    console.log(event);
                    if (this.$v.inputName.required === true &&
                        this.$v.inputPassword.required === true &&
                        this.$v.inputRepeatPassword.required === true &&
                        this.$v.inputEmail.required === true &&
                        this.$v.inputEmail.email === true) {
                        if(this.inputPassword===this.inputRepeatPassword){
                            const engine =new ApiInterface(false);
                            const rep = await engine.signup(this.inputName, this.inputEmail, this.inputPassword)
                            console.log(rep);
                            M.toast({html: 'Successful sign up, welcome', classes: 'rounded'});
                            setTimeout(()=>{
                               window.location.hash='/login';
                            },2000);

                        } else {
                            M.toast({html: 'Passwords do not match', classes: 'rounded'});
                        }
                    } else {
                        M.toast({
                            html: "Username, email, password or repeat Password missing",
                            classes: "rounded"
                        });
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
