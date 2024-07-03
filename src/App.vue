<template>
  <html>
    <Head />
    <navigacijaC @loggedOut="onLogout" @UserLoggedIn="onLogin" :navigacija="navigacij" :isLoggedin="user!=null"/>
  <div id="app">
    <router-view @UserLoggedIn="onLogin"></router-view>
  </div>
  <Footer />
  </html>
</template>

<script>
import Head from "./components/fixed/head.vue";
import Footer from "./components/fixed/footer.vue";
import navigacijaC from "./components/fixed/nav.vue";
export default {
  name: 'App',
  components: {Head,Footer,navigacijaC},
  
  
  data() {
    return {
      user:null
    }
  },
  mounted(){
    var user =localStorage.getItem("user");
    if(user!=null){
      
      this.user = user;
    }
  },
  computed:{
    navigacij(){

      //return [{path:"/main",text:"home"},{path:"/shop",text:"Shop"},{path:"/blog",text:"Blog"}]

      if(this.isLoggedin){
        var user=JSON.parse(localStorage.getItem("user"));
        if(user.role=="admin"){
        return [
          {
            text: "Home",
            path: "/main"
          },
          {
            text: "Shop",
            path: "/shop"
          },
         
          {
            text:"Admin",
            path:"/admin"
          },

        ]}
        else{
          return[
          {
            text: "Home",
            path: "/main"
          },
          {
            text: "Shop",
            path: "/shop"
          },
          
        
        ]}
      }else{
        return[
          {
            text: "Home",
            path: "/main"
          },
          {
            text: "Shop",
            path: "/shop"
          },
          
        
        ]
      }
    
},  
isLoggedin(){
      return this.user!=null;
    },
  },
  methods:{
    onLogin(user){
      this.user = user;
    },
    onLogout(){
      this.user = null;
     
      //this.$router.push("/main")
    }
  },
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
