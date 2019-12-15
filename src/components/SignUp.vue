<template>
  <div id="signupPage" class="container">
    <div id="signup-form">
      <h3>Signup</h3>
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" v-model="inputName" class="validate" />
          <label for="name">Enter your username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" v-model="inputEmail" class="validate" required />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            id="password"
            type="password"
            v-model="inputPassword"
            data-length="10"
            class="validate"
          />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            id="inputRepeatPassword"
            type="password"
            v-model="inputRepeatPassword"
            class="validate"
          />
          <label for="password">Repeat password</label>
        </div>
      </div>
      <div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="signup"
          v-on:click="signup"
        >SIGNUP</button>
      </div>
    </div>
  </div>
</template>

<script>
import ApiInterface from "./../lib/ApiInterface";
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputPassword: "",
      inputRepeatPassword: ""
    };
  },
  validations() {
    return {
      inputName: {
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
        required,
        sameAsPassword: sameAs("inputPassword")
      }
    };
  },
  methods: {
    signup: async function(event) {
      console.log(event);
      if (!this.$v.$invalid) {
        const engine = new ApiInterface();
        const rep = await engine.signup(
          this.inputName,
          this.inputEmail,
          this.inputPassword
        );

        M.toast({ html: "Successful sign up, welcome", classes: "rounded" });
        setTimeout(() => {
          window.location.hash = "/login";
        }, 2000);
      } else {
        M.toast({
          html: "Username, email, password or repeat Password missing or wrong",
          classes: "rounded"
        });
      }
    }
  }
};
</script>

<style scoped>
#signupBtn {
  height: 35px;
  background-color: #2ab7a9;
}
#signup-form {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
