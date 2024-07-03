import products from "../sources/products.json"

export default {
    state: {
      searchObj: { keyword : null },
      products: products,
      deletedProducts: []
    },
    mutations: {
      changeKeyword(state, keyword) {
        state.searchObj.keyword = keyword
      },
      updateProduct(state, productObj) {
        var obj = state.products.find(x => x.id == productObj.id)
        obj.name = productObj.name
        obj.price = productObj.price
        obj.image = productObj.image
      },
      deleteProduct(state, id) {
        // for(let i = 0; i < state.products.length; i++) {
        //   let p = state.products[i];
        //   if(p.id == id) {
        //     state.products.splice(i, 1)
        //   }
        // }
        state.deletedProducts.push(id)
      }
    },
    actions: {
      changeKeyword(context, keyword) {
        context.commit('changeKeyword', keyword)
      }
    },
    getters: {
      products(state) {
        if(state.searchObj.keyword) {
          return state.products.filter(function(p) {
            return p.name.toLowerCase().includes(state.searchObj.keyword.toLowerCase().trim())
          }) 
        }
        return state.products
      },
      nonDeletedProducts(state ,getters) {
        return getters.products.filter(x => !state.deletedProducts.includes(x.id))
      }
    }
}