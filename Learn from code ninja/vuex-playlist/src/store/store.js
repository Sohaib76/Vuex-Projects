import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state:{
    products: [
      {name: 'Certified Ethical Hacking', price:200},
      {name: 'Android Application Development', price:400},
      {name: '3D Game Characters Designing', price:600},
      {name: 'Unity Game Development', price:800}
    ]
  },
  getters:{
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**'+product.name+'**',
          price: product.price / 2
        }
      });
      return saleProducts;

    },
    removeSale: state => {
      var removeSale = state.products.map(product => {
        return {
          name: product.name,
          price: product.price
        }
      });
      return removeSale;

    }
  },
  mutations:{
    reducePriceMutation:(state,payload) => {    //it's reducePrice
    state.products.forEach(product =>{                 //  setTimeout(function(){           //asyncronized task
      product.price -= payload                                //  },3000)
      })

    },
    //Check
    increasePriceMutation:(state,payload) => {
    state.products.forEach(product =>{
      product.price += payload
      })

    },
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**'+product.name+'**',
          price: product.price / 2
        }
      });
      return saleProducts;

    },

  },
actions:{
  //asyncronized task
  reducePrice:(context,payload) => {
    setTimeout(function(){
      context.commit('reducePriceMutation',payload)               //it's reducePrice
    },1000)
  },

  increasePrice:(context,payload) => {
    setTimeout(function(){
      context.commit('increasePriceMutation',payload)               //it's reducePrice
    },0)
  },

   // removeSale:(context) => {
   //   setTimeout(function(){
   //    context.commit('increasePriceMutation')               //it's reducePrice
   //   },0)
   // }
   saleProducts:(context) => {
     setTimeout(function(){
      context.commit('saleProducts')               //it's reducePrice
     },0)
   }
}

})
