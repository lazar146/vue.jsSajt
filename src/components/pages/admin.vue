<template>
    <table class="table">
        <thead>
          <tr>
            
            <th scope="col">username</th>
            <th scope="col">role</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i,index in users" :key="index">
            
            <td>{{i.username}}</td>
            <td>{{i.role}}</td>
            <td><button class="btn btn-warning">update</button></td>
            <td><button @click="obrisiUsera(i.username)"  class="btn btn-danger">delete</button></td>
          </tr>
          
        </tbody>
      </table>
</template>

<script>
 import { mapGetters } from "vuex"
//import customInput from '../customs/customInput.vue';
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
          },
          brojac:1
         
        }
    },
    computed: {
            ...mapGetters(['users'])
        },
    components: {
            //customInput
     },
     mounted(){
        let user = JSON.parse(localStorage.getItem("user"));
            if (user == null) {
            this.$router.push("/main");
            }
            if (user.role != "admin") {
            this.$router.push("/main");
            }
  },
  methods:{
    obrisiUsera(ime){
      this.$store.commit("delete", ime);
    }
  }
     }
    
</script>
