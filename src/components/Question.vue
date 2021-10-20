<template>
    <div>
        <div class='text'  >
            <h2 class='question'  >
                <!-- {{questions[index].question}} -->
                <!-- {{questions[index].question}} -->
                {{question.question}}
                {{index}}
            </h2>
            <textarea type='text' class='answer-input' placeholder='پاسخ را وارد کنید' v-model='answer' @input='setAnswer'></textarea>
        </div>
        <div class='verify-btn'>
            <svg height="25" width="28">
                <polyline points="1.5,11 10,20 27.5,3.5" class='verify-icon' />
            </svg>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EndCard',
  props: ['index'],
  data:function(){
return {
    counter: this.index
  }
  },
  computed:{
        answer: {
            get () {
            return this.$store.state.message
            },
            set (value) {
                console.log( this.counter)
                value = {'index':this.$props.index,'value':value}
                console.log(typeof value)

                this.$store.commit('updateMessage', value)
            }
        }
        ,
      question : function (){
          return this.$store.getters.getQuestionByIndex(2)
          }
  },
  methods:{
      setAnswer(){
          console.log(this.answer)

      }
  },
  mounted(){
      console.log(this.$store.getters.getQuestionByIndex(this.index));
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
    
    .answer-input{
        text-align: right;
        direction:rtl;
        //font-family:Yekan-regular;
        border-radius:15px;
        margin:0 auto;
        border: none; 
        text-align: right;
        padding:14px;
        color:rgb(50,50,50);
        width: 200px;
        height:180px;
        font-size: 14px; 
        background-color: #FFFFFF;
    }
    .answer-input:focus{
        outline:none;
    }
    .answer-input:focus::placeholder {
         color: transparent;
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
