<template>
    <div>
      
    
        <!-- Header Section Begin -->
        <header class="header">
          <div class="header__top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="header__top__left">
                    <ul>
                      <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="header__top__right">
                    <div class="header__top__right__social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                      <a href="#"><i class="fa fa-pinterest-p"></i></a>
                    </div>
                   
                    <div v-if="!isLoggedin">
                      <div class="header__top__right__auth">
                      <router-link to="/login">Login</router-link>
                    </div>&nbsp;
                    <div class="header__top__right__auth">
                      <router-link to="/register">Register</router-link>
                    </div>
                    </div>
                    <div v-else>
                      <div class="header__top__right__auth">
                        <button @click="izloguj">Log out</button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="header__logo">
                  <img src="../../assets/img/logoN.png" width="100" height="100" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <nav class="header__menu">
                  <ul>
                   
                        <li v-for="i,index in navigacija" :key="index">
                          &nbsp;<router-link :to="i.path">{{i.text}}</router-link>
                        </li>
                        
                      
                    
                    
                  </ul>
                </nav>
              </div>
              <div class="col-lg-3">
                <div class="header__cart">
                  <ul>
                   
                    <li>
                      <router-link to="/cart"><i class="fa fa-shopping-bag">Cart</i> <span>!</span></router-link>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </div>
            <div class="humberger__open">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </header>
    </div>
        <!-- Header Section End -->
</template>

<script>
export default {
    name: "navIgation",
    data(){
        return {

        }
    },
    props:{
        navigacija:{
            type:Array,
            required:true
        },
        isLoggedin:{
          type:Boolean,
        }
    },
    methods:{
      izloguj(){
        localStorage.removeItem("user");
        this.$emit("loggedOut",null);
        this.$router.push("/main");
      }
    }
}
</script>
