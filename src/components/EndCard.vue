<template>
    <div class='text'>
        <h2 class='question'  style='height:30px;'>
            ثبت و ارسال پاسخ ها
        </h2>
        <div class='send-btn'>
            <svg height='25' width='28'>
                <polyline points='1.5,11 10,20 27.5,3.5' class='verify-icon' />
            </svg>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EndCard',
  props: {
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
    .send-btn{
        cursor:pointer;
        margin: 0 auto; 
        width: 100px;
        height:50px;
        border-radius:50px;
        text-align: center; 
        margin-top:18px;
        font-size: 25px; 
        background-color: #f3f3f3;
        padding:8px;
        padding-top:10px;
        transition:transform 0.25s;
    }
    .question{
        color:white;
        text-align: center;
        word-wrap: break-word;
        //font-family: Yekan;
        margin-top:30px;
        height:120px;
        direction:rtl;
        text-justify: inter-word;
    }
     .verify-icon{
        cursor:pointer;
        fill:none;
        stroke:rgb(77,77,77);
        stroke-width:2;
        transition:stroke 0.25s;
    }
    .text{
        transition:opacity 0.25s;
        text-align: center;
    }
</style>
