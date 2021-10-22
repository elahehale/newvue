<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <div class="d-flex justify-center flex-row-reverse">
        <card :index="0" style=" margin:10px;"></card>
        <card :index="1" style=" margin:10px;"></card>
        <card :index='2' style=" margin:10px;"></card>
    </div> -->
    <v-snackbar v-model="show_alert" :timeout="timeout" top rounded="pill" :color="$store.state.alert_color" elevation='0' text>
      <template >
        <div style='text-align:center'>{{ $store.state.alert_text }}</div>
      </template>
    </v-snackbar>
    <div style="margin:0 auto; width:75%;">
    <VueSlickCarousel v-bind='slickSetting' style='height:500px'>
      <template style='height:500px;'>
      <div class='scroll-item'><card :index="0" style="text-align:center; margin:10px;"></card></div>
      <div class='scroll-item'><card :index="1" style="text-align:center; margin:10px;"></card></div>
      <div class='scroll-item'><card :index='2' style="text-align:center; margin:0 auto;"></card></div>
      <div class='scroll-item'><card :index='3' style="text-align:center; margin:0 auto;"></card></div>
      <div class='scroll-item'><card :index='4' style="text-align:center; margin:10px;"></card></div>      
    
    </template>
    <template #prevArrow >
        <div style='align:left; position:reltive;'>
        <img alt="Vue logo" src="../assets/logo.png" style="width:20px;">
        </div>
    </template>
    <template #nextArrow >
        <div style='align:left; position:reltive;'>
        <img alt="Vue logo" src="../assets/logo.png" style="width:20px;">
        </div>
    </template>
    <!-- <template #customPaging > -->
    <template #customPaging='page' >
        <div class='dots'>
        {{4- page}}
        </div>
    </template>
    </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card,VueSlickCarousel 

  },
  computed:{
    show_alert: {
      get () {
        return this.$store.state.show_alert
      },
      set (value) {
        this.$store.commit('set_show_alert', value)
      }
    }
    ,
    text(){

      console.log(this.$store.state.alert_text)
      return this.$store.state.alert_text
    }
  },
  mounted(){
          this.$store.dispatch('fetch_poll_by_pk')

  },
  data: () => ({
    
      timeout: 2000,
      snackbar:true,
      
      notification_color:'rgba(146, 237, 76,1)',
     slickSetting:{
  "dots": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 5,
  // "rtl":true,
  "infinite": false,


  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "dots": true
      }
    },
    {
      "breakpoint": 900,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
  }),
  methods:{
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Yekan;
  text-align:center !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.scroll-item{
  text-align: center;
  height:500px;
 
}
.dots{
        cursor:pointer;
        width:15px;
        height:15px;
        margin:0 auto;
        border:solid black 2px;
        border-radius:100%;
        transition: border 0.5s , background-color 0.5s,transform 0.5s;
}
</style>
