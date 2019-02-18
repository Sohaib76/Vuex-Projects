<template>
  <div id="product-list-one">
    <h2>Course List</h2>
    <ul>
      <li v-for="product in removeSale">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
        </li>
    </ul>
    <Button class="button button1" v-on:click="reducePrice(4)">Reduce Price</Button>
    <Button class="button button1" v-on:click="increasePrice(2)">Increase Price</Button>
    <!-- <Button class="button button1" v-on:click="saleProducts()">Remove Sale</Button> -->
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
  //props:['products'],
  computed:{
      products(){
        return this.$store.state.products
      },
      ...mapGetters([
        'saleProducts',
        'removeSale'
      ]),
    },
      // saleProducts(){
      //   return this.$store.getters.saleProducts;
      // }
    // },
    methods:{
      ...mapActions([
        'reducePrice',
        'increasePrice',
         'removeSale',
         'saleProducts'
  ]),


      // reducePrice:function(amount) {
      //
      //   // this.$store.state.products.forEach(product =>{
      //   //   product.price -= 1
      //   // })
      //   this.$store.dispatch('reducePrice',amount);
      //}
    }
  }


</script>






<style scoped>

.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
}
.button1:hover {
    background-color: #4CAF50;
    color: white;
}


#product-list-one{

    background: #FFF8B1;

    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);

    margin-bottom: 30px;

    padding: 10px 20px;

}

#product-list-one ul{

    padding: 0;

}

#product-list-one li{

    display: inline-block;

    margin-right: 10px;

    margin-top: 10px;

    padding: 20px;

    background: rgba(255,255,255,0.7);

}

.price{

    font-weight: bold;

    color: #E8800C;

}
</style>
