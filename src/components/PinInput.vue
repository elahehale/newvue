<template>
    <div class='text'>
        <h2 class='question'>کد ارسال شده به شماره همراه خود را وارد کنید:</h2>
        <!-- <div class='input-group flex-row'>
            <input type='text' class='form-control pin' maxlength='1'  >
            <input type='text' class='form-control pin' maxlength='1'  >
            <input type='text' class='form-control pin' maxlength='1'  >
            <input type='text' class='form-control pin' maxlength='1'  >
            <input type='text' class='form-control pin' maxlength='1'  >
        </div> -->
        <div class='verify-btn pin-btn' @click='sendCode'>
            <svg height='25' width='28'>
                <polyline points='1.5,11 10,20 27.5,3.5' class='verify-icon' />
            </svg>
        </div>
        <div>
            <PincodeInput
                v-model="code"
                placeholder=""
                length='5'
            />
        </div>


    </div>
</template>
<script>
import PincodeInput from 'vue-pincode-input';

export default {
  name: 'PinInput',
  props: {
  }
  ,
  mounted(){
      this.setStyle()
  },
  components:{
      PincodeInput,
  },
  data: () => ({
      code:'',
  }),
  methods:{
      sendCode(){
          this.$store.dispatch('check_pin',{'code':this.code})
        
      }
      ,setStyle(){
        
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
    .input-group{
        margin-top:12px;
        margin-bottom:12px;

    }
    div.vue-pincode-input-wrapper > input {
        height:50px;
        background-color: #F3F3F3 !important;

    }


    .new-style {
   font-family:Yekan-light;
    color:rgb(30,30,30);
    border-radius:20px !important;
    border: none; 
    text-align: center; 
    width: 45px;
    height:45px;
    font-size: 25px !important; 
    background-color: #F3F3F3 !important;
    margin:5px;
}
input:focus{
    box-shadow: inset 0 -1px 0 #ddd !important;
    outline:0px !important;
}
    .pin{
      //  font-family:Yekan-light;
        color:rgb(30,30,30);
        border-radius:15px !important;
        border: none; 
        text-align: center; 
        width: 45px;
        height:45px;
        font-size: 25px; 
        background-color: #F3F3F3;
        margin:5px;
    }
    .pin-btn{
        margin-top: 0px;
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
    .question{
        color:white;
        text-align: center;
        word-wrap: break-word;
     //   font-family: Yekan;
        margin-top:30px;
        height:120px;
        direction:rtl;
        text-justify: inter-word;
    }
</style>
