<template>
  <v-container style="width:100%">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   
    <v-snackbar v-model="show_alert" :timeout="timeout" top rounded="pill" :color="$store.state.alert_color" elevation='0' text>
      <template >
        <div style='text-align:center'>{{ $store.state.alert_text }}</div>
      </template>
    </v-snackbar>

    <v-container>
    <v-row  justify='space-between' >
      <v-btn style="margin-top:10px;" icon x-large color='#FE0B6C' @click="logOut"><v-icon large dark>mdi-logout-variant</v-icon></v-btn>
      <img alt="Vue logo" src="../assets/logo.png" class='logo_image'>

    </v-row>
    <v-row>
    <v-col md='9'>
      <v-container >
    <VueSlickCarousel v-bind='slickSetting' style='height:500px' ref="carousel">
      <template style='height:500px;'>
      <div class='scroll-item'><card :index="0" style="text-align:center; margin:10px;" v-on:tonext='donext'></card></div>
      <div class='scroll-item'><card :index="1" style="text-align:center; margin:10px;" v-on:tonext='donext'></card></div>
      <div class='scroll-item'><card :index='2' style="text-align:center; margin:0 auto;" v-on:tonext='donext'></card></div>
      <div class='scroll-item'><card :index='3' style="text-align:center; margin:0 auto;" v-on:tonext='donext'></card></div>
      <div class='scroll-item'><card :index='4' style="text-align:center; margin:10px;" v-on:tonext='donext'></card></div>      
    
    </template>
    <template #prevArrow >
        <div style='align:left; position:reltive;'>
          <v-icon  large color="gray darken-2"  > mdi-arrow-left </v-icon>
        </div>
    </template>
    <template #nextArrow >
        <div style='align:left; position:reltive;'>
          <v-icon  large color="gray darken-2"  > mdi-arrow-right </v-icon>
        </div>
    </template>
    <!-- <template #customPaging > -->
    <template #customPaging='page' >
        <div class='dots'>
        {{4- page}}
        </div>
    </template>
    </VueSlickCarousel>
      </v-container>
    </v-col>
    <v-col md='3'>
      <h3>انتخاب تو چیه؟</h3>
      <v-container>
        مگه کسی از نظر شما خبرداره؟ منظورم اینه اگر حرف حساب شما نوجوونا اینه که چرا کسی فیلم، موسیقی، گیم، کتاب و خلاصه محصولات مورد پسند ما رو تولید نمی کنه؛ خب طبیعتا یه دلیل بزرگش اینه که سلیقه شما رو نمی دونن! کشورهای دیگه به سلیقه نوجوونا جایزه هم می دن. ما هم می خوایم همین کار رو بکنیم. حالا تو با شرکت توی این نظرسنجی می تونی به خودت و بقیه نوجوونا کمک کنی که سلیقه شماها رو به گوش مسئولین و تولیدکنندگان محصولات فرهنگی برسونیم. خودتون رو جدی بگیرید. ما شما رو جدی گرفیتم.
      </v-container>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
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
  methods:{
    donext(){
      console.log('hi')
      this.$refs.carousel.next()
    },
    logOut(){
      this.$store.commit('reset')
      this.$emit('tonext')
    }
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
      "breakpoint": 1260,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "dots": true
      }
    },
    {
      "breakpoint": 900,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
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
  font-family: Yekan;
  text-align:center !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.scroll-item{
  padding:20px;
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
.logo_image{
  width:200px;
}
</style>
