<template>
    <div class="container">
        
            <div class="col-md-12 d-flex justify-content-center">
                <form class="col-md-6">
                  <customInput 
                  @input="naUnos"
                  type="text" 
                  id="username"
                  label="Username:"
                  hint="Your username"
                  :greskaPoruka="greske.greskaUsername"
                  v-model="podaci.username"
              />
             
          <customInput 
          @input="naUnos"
          type="email" 
          id="Email"
          label="Email:"
          hint="Your email"
          :greskaPoruka="greske.greskaEmail"
          v-model="podaci.email"
      />
      <customInput 
      @input="naUnos"
      type="password" 
      id="password"
      label="Password:"
      hint="Your password"
      :greskaPoruka="greske.greskaPassword"
      v-model="podaci.password"
  />
       
        <button type="submit" @click="provera" class="btn btn-primary">Submit</button>
      </form></div>
            
       
    </div>
    
</template>

<script>
 import { mapGetters } from "vuex"
import customInput from '../customs/customInput.vue';
export default {
    name: "reGister",
    data(){
        return {
          podaci:{
              username: "",
              email: "",
              password: ""
          },
          greske:{
              greskaUsername: "",
              greskaEmail: "",
              greskaPassword: ""
          }
         
        }
    },
    computed: {
            ...mapGetters(['users'])
        },
    components: {
            customInput
     },
    methods:{
      naUnos(){

      },
      provera(){
        var greska1=false,greska2=false,greska3=false;
      const regexName =/^[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15})?$/;
      const regexEmail = /^([a-z]{3,11}(\d)*)(\.)?([a-z]{3,11}(\d)*)/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regexName.test(this.podaci.username)) {
        greska1=true;
        this.greske.greskaUsername =
          "Username is not good, Example: Lazar";
      } else {
        this.greske.greskaUsername = "";
        greska1=false;
      }
      if (!regexEmail.test(this.podaci.email)) {
        greska2=true;
        this.greske.greskaEmail =
          "Email is not good, Example: lazarm@gmail.com";
      } else {
        this.greske.greskaEmail = "";
        greska2=false;
      }
      if (!regexPassword.test(this.podaci.password)) {
        greska3=true;
        this.greske.greskaPassword =
          "Your password have to contain at least one lowercase letter, one uppercase letter and one number, and the length of the password is at least 8 characters.";
      } else {
        this.greske.greskaPassword = "";
        greska3=false;
      }
      if (greska1 == false && greska2 == false && greska3 == false) {
        this.$store.commit("userRegister", this.podaci);
        this.$router.push("/login");
      }
      else{
        console.log("nije");
      }
      }
    }

}
</script>
