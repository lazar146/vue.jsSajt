<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12">
    <form>
        <customInput 
        @input="naUnos"
        type="text" 
        id="username"
        label="Username:"
        hint="Your username"
        
        v-model="username"
    />
    
    <customInput 
    @input="naUnos"
    type="password" 
    id="password"
    label="Password:"
    hint="Your username"
    
    v-model="password"
/>
        
        <button  @click="loguj" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import customInput from '../customs/customInput.vue';
import { mapGetters } from "vuex"


    export default {
        name: "loGin",
        
        data() {
            return {
                error: "",
                username: "pera",
                password: "sifra1"
            }
        },
        methods: {
            naUnos(){

                },
            loguj() {
                
                let user = null;
                for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].username === this.username && this.users[i].password === this.password) {
                    user = this.users[i];
                    break;
                }
                }


                
        

                let localStorageItem = {
                    username : user.username,
                    role : user.role
                }
                localStorage.setItem("user", JSON.stringify(localStorageItem));
                    var x = localStorage.getItem("user");
                this.$emit("UserLoggedIn",x);
                
                this.$router.push("/main")
               
            }
        },
        computed : {
            ...mapGetters(['users'])
        },
        mounted() {
            if(localStorage.getItem("user") != null) {
                this.$router.push("/main")
            }
            console.log(this.users);
        },
        components:{
            customInput
        }
        

    }
</script>
