<template>
    <div class='text'>
        <h2 class='question'>لطفا برای تایید هویت، شماره همراه خود را وارد کنید:</h2>
        <input class='phone-input' type='text' maxlength='11'  >
        <div class='verify-btn phone-btn'>
            <svg height='25' width='28' @click='check'>
                <polyline points='1.5,11 10,20 27.5,3.5' class='verify-icon' />
            </svg>
        </div>
        <h3 class = 'timer-text' >بعد از ثانیه برای دریافت دوباره کد</h3>
    </div>
</template>
<script>
export default {
  name: 'PhoneInput',
  props: {
  },
  methods:{
      check(){
        console.log(this.$store.state.card_datas[2])
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    /*@font-face {
        font-family: Yekan;
        src: url(IRANYekanWebBlack.woff);
    }
    @font-face {
        font-family: Yekan-light;
        src: url(IRANYekanWebLight.woff);
    }
    @font-face {
        font-family: Yekan-medium;
        src: url(IRANYekanWebMedium.woff);
    }
    @font-face {
        font-family: Yekan-regular;
        src: url(IRANYekanWebRegular.woff);
    }*/
    .text{
        transition:opacity 0.25s;
        text-align: center;

    }
    .phone-input{
       // font-family:Yekan-light;
        border-radius:15px;
        border: none; 
        text-align: center;
        color:rgb(40,40,40);
        width: 200px;
        height:45px;
        font-size: 25px; 
        background-color: #F3F3F3;
        margin-top:12px;
        margin-bottom:12px;

    }
    .verify-icon{
        cursor:pointer;
        fill:none;
        stroke:rgb(77,77,77);
        stroke-width:2;
        transition:stroke 0.25s;
    }
    .question{
        color:white;
        text-align: center;
        word-wrap: break-word;
        font-family: Yekan;
        margin-top:30px;
        height:120px;
        direction:rtl;
        text-justify: inter-word;
    }
    .timer-text{
        color:white;
        text-align: center;
       // font-family: Yekan;
        margin-top:20px;
        text-justify: inter-word;
        direction:rtl;

    }
    .phone-btn{
        margin-top:0px;
        fill:none;
        stroke:rgb(77,77,77);
        stroke-width:3;
        transition:stroke 0.25s;
    }
    .verify-btn{
        cursor:pointer;
        margin: 0 auto; 
        width: 45px;
        height:45px;
        border-radius:100px;
        text-align: center; 
        margin-top:15px;
        font-size: 25px; 
        background-color: #F3F3F3;
        padding:8px;
        padding-top:10px;
        transition:transform 0.25s;
    }
</style>
