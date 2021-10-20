<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <div class="d-flex justify-center flex-row-reverse">
        <card :index="0" style=" margin:10px;"></card>
        <card :index="1" style=" margin:10px;"></card>
        <card :index='2' style=" margin:10px;"></card>
    </div> -->
    <div style="margin:0 auto; width:75%;">
    <VueSlickCarousel v-bind='slickSetting' style='height:500px'>
      <template style='height:500px;'>
      <div class='scroll-item'><card :index="0" style="text-align:center; margin:10px;"></card></div>
      <div class='scroll-item'><card :index="1" style="text-align:center; margin:10px;"></card></div>
      <div class='scroll-item'><card :index='2' style="text-align:center; margin:0 auto;"></card></div>
      <div class='scroll-item'><card :index='3' style="text-align:center; margin:0 auto;"></card></div>
      <div class='scroll-item'><card :index='4' style="text-align:center; margin:10px;"></card></div>      
      <div class='scroll-item'><card :index='5' style="text-align:center; margin:0 auto;"></card></div>
    
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
    <template #customPaging >
        <div class='dots'>
          <!-- {{page}} -->
        </div>
    </template>
    </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
import Card from '../components/Card.vue'
// import PhoneInput from './components/PhoneInput.vue'
// import EndCard from './components/EndCard.vue'
// import PinInput from './components/PinInput.vue'
// import Question from './components/Question.vue'


export default {
  name: 'Home',
  components: {
    Card,VueSlickCarousel 
    // PhoneInput,
    // EndCard,
    // PinInput,
    // Question,
  },
  data: () => ({
     slickSetting:{
  "dots": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 5,
  "rtl":true,
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
        "slidesToShow": 2,
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
  
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
