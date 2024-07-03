<template>
    <body>
  
    
        <!-- Hero Section Begin -->
        <section class="hero">
          <div class="container">
            <div class="row">
              
              <div class="col-lg-12">
             
                <div class="">
                  <div class="hero__text">
                    <span>All Shop</span>
                    <h2>Everything <br />you can imagine</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <router-link to="/shop"><div class="primary-btn">SHOP NOW</div></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Hero Section End -->
    
        <!-- Categories Section Begin -->
        <section class="categories">
          <div class="container">
            
              <div class="row">
                 <div class="categories__item set-bg col-lg-3" v-for="i,index in proizvodi" :key="index">
                <img :src="i.image" width="100">
                <h5>{{i.title}}</h5>
              </div>
              
            

              </div>
            
          </div>
          
        </section>
        <br>
        <hr>
        <!-- Categories Section End -->
    
       
        <!-- Banner Begin -->
        <div class="banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                  <router-link to="/shop"><img src="../../assets/img/baner1.jpg" height="280" alt="" /></router-link>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                  <router-link to="/shop"><img src="../../assets/img/baner3.jpg" alt="" /></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Banner End -->
    <hr>
        
    
      
    
        <!-- Footer Section Begin -->
    
        <!-- Footer Section End -->
      </body>
</template>

<script>
import axios from 'axios';
export default {
    name: "maIn",
    data(){
        return {
          proizvodi:[]
        }
    },
    mounted() {
      var that = this;
      axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((rezultat) => {
       that.proizvodi = rezultat.data;
        
      })
      .catch((error) => {
        console.error(error.response);
      })
      
     
    


    },
  }
</script>
