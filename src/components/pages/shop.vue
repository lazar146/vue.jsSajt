<template>
     <!-- Product Section Begin -->
     <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="sidebar">
                <div class="sidebar__item">
                  <h4>Department</h4>
                  <form class="mb-4" action="#">
                    <div class="form-check" v-for="i,index of kategorije" :key="index">
                      <input class="form-check-input categoryFilter" :value="i" style="background-color:black" type="radio" v-model="selektovana" @change="filterKat">
                      <label class="ps-2 form-check-label" >{{i}}</label>
                    </div>
                    
                  </form>
                </div>
             
              </div>
            </div>
            <div class="col-lg-9 col-md-7">
              
              
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="(i,index) in proizvodi" :key="index">
                  <div class="product__item">
                    <div
                      class="product__item__pic set-bg"
                      
                    ><img :src="i.image">
                      <ul class="product__item__pic__hover">
                        <li >
                          <button @click="dodajKanta(i.id)" ><i class="fa fa-shopping-cart"></i></button>
                        </li>
                       
                      </ul>
                    </div>
                    <div class="product__item__text">
                      <h6>{{i.title}}</h6>
                      <h5>{{i.price}} $</h5>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <!-- Product Section End -->
</template>


<script>
import axios from 'axios';
export default {
    name: "shOp",
    data(){
        return {
          proizvodi:[],
          kategorije:[],
          selektovana : "",
          cart:[]
        }
    },
    mounted() {
      //var that = this;
      axios
      .get("https://fakestoreapi.com/products")
      .then((rezultat) => {
        this.proizvodiNizLod(rezultat.data);
        localStorage.setItem("proizvodi", JSON.stringify(rezultat.data));
      })
      .catch((error) => {
        console.error(error.response);
      }),
      axios
      .get("https://fakestoreapi.com/products/categories")
      .then((rezultat) => {
        this.katNizLod(rezultat.data);
        
      })
      .catch((error) => {
        console.error(error.response);
      });
      if(localStorage.getItem("cart") == null){
        localStorage.setItem("cart",[]);
      }
    


    },
    methods:{
      proizvodiNizLod(proiz){
        this.proizvodi = proiz;
      },
      katNizLod(kat){
        this.kategorije = kat;
      },
      filterKat(){
        axios.get("https://fakestoreapi.com/products/category/"+this.selektovana)
                    .then(response=>{
                        this.proizvodi=response.data
                    }).catch(error=>{
                        console.log(error);
                        
                    })
      },
      dodajKanta(id){
               
                
                console.log(id);
                let product=this.proizvodi.find(p=>p.id==id);
                console.log(product);
                var element={
                    product,
                    quantity:1
                }
                if(localStorage.getItem('cart')){
                    this.cart = JSON.parse(localStorage.getItem('cart'));
                    if(this.cart.some(p=>p.product.id==id)){
                        this.cart.find(p=>p.product.id==id).quantity++;
                    }else{
                        this.cart.push(element);
                    }
                }else{
                    this.cart.push(element);
                }
                localStorage.setItem('cart',JSON.stringify(this.cart));
                
                
                
      }
    }
}
</script>
