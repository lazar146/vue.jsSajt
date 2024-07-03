<template>
    <section class="shoping-cart spad">
        <div class="container" id="blok">
          <div class="row">
            <div class="col-lg-12" >
              <div class="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th class="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i,index in produkti" :key="index">
                      <td class="shoping__cart__item">
                        <img :src="i.product.image" width="50" alt="" />
                        <h5>{{i.product.title}}</h5>
                      </td>
                      <td class="shoping__cart__price">${{i.product.price}}</td>
                      <td class="shoping__cart__quantity">
                        <div class="quantity">
                          <div class="pro-qty">
                            <input type="text" :id="i.product.title" @change="quantityPromena" :data-id="i.product.id" :value="i.quantity" />
                          </div>
                        </div>
                      </td>
                      <td class="shoping__cart__total">${{i.product.price*i.quantity}}</td>
                      <div>
                        
                      </div>
                      <td class="shoping__cart__item__close">
                        <span @click="removeProd(i.product.id)" class="icon_close">X</span>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__btns">
                <router-link to="/shop" class="primary-btn cart-btn">CONTINUE SHOPPING</router-link>
                
              </div>
            </div>
           
            <div class="col-lg-12">
              <div class="shoping__checkout">
                
                <a href="#" @click="tojeto" class="primary-btn">CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>


<script>
export default {
    name: "caRt",
    data(){
        return {
            produkti:[],
            
        }
    },
    methods:{
        ispisiKorpu(prod){
            console.log(prod);
            this.produkti = prod;
        },
        removeProd(id){
            console.log(id);
            let produkti = JSON.parse(localStorage.getItem("cart"));
            let noviNiz=[];
            console.log(produkti);
            for (let el of produkti) {
                console.log(el.product.id);
                if (el.product.id == id) continue;
                else {
                noviNiz.push(el);
                }
      }
      localStorage.setItem("cart", JSON.stringify(noviNiz));
      console.log(noviNiz);
      this.ispisiKorpu(JSON.parse(localStorage.getItem("cart")))
        },
    quantityPromena(polje){
        console.log("aa");
        let id = polje.target.dataset.id;
        let noviQuantity = parseInt(polje.target.value);
       
        let produkti = JSON.parse(localStorage.getItem("cart"));

            let noviNiz=[];
            console.log(produkti);
            for (let el of produkti) {
                console.log(el.product.id);
                if (el.product.id == id){
                    if(noviQuantity < 1 || noviQuantity==0){
                        el.quantity = 1;
                    }
                    else{
                        el.quantity = noviQuantity;
                    }
                    
                    noviNiz.push(el);
                } 
                else {
                noviNiz.push(el);
                }
      }
      localStorage.setItem("cart", JSON.stringify(noviNiz));
      console.log(noviNiz);
      this.ispisiKorpu(JSON.parse(localStorage.getItem("cart")))
    },
    tojeto(){
        let user = JSON.parse(localStorage.getItem("user"));
        if(user == null){
          document.querySelector("#blok").innerHTML = "Log in first!"
        }
        else{
          if(localStorage.getItem("cart") != []){
            localStorage.setItem("cart",[]);
            document.querySelector("#blok").innerHTML = "Completed!"
        }
        }
        
    }
},
    mounted(){
        let produkti = localStorage.getItem("cart");
       console.log(produkti);
        if(produkti != []){
            
        this.ispisiKorpu(JSON.parse(localStorage.getItem("cart")));
            }
      else{
        document.querySelector("#blok").innerHTML = "Nothing in here!!"
      }
    },
    
  }
</script>