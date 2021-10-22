<template>

    <div class='container' v-bind:class="{ passed: index < $store.state.focus_index,
                                           onFocus: index == $store.state.focus_index,
                                           deactive: index > $store.state.focus_index}">
        <end-card v-if='index == $store.state.question_num +2'></end-card>
        <phone-input v-else-if='index == 0' v-on:tonext="tonext"></phone-input>
        <pin-input v-else-if='index == 1' v-on:tonext="tonext"></pin-input>
        <question v-else :index='index' v-on:tonext="tonext"></question>
        <div v-on:tonext="console.log('hi')"></div>

    </div>
</template>

<script>
import PhoneInput from '../components/PhoneInput.vue'
import EndCard from '../components/EndCard.vue'
import PinInput from '../components/PinInput.vue'
import Question from '../components/Question.vue'

export default {
    
  name: 'Card',
  props: ['index',
  ],
  components:{
    PhoneInput,
    EndCard,
    PinInput,
    Question
    
  },
  methods:{
    tonext(){
      this.$emit('tonext')
    }
  },
  mounted(){
    console.log(this.index)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container{
      margin:0 auto;
      font-family:Yekan;
        width:240px; 
        position:relative;
        z-index:2000;
        height:410px; 
        background-color:white;
        border-radius:20px;
        transform:scale(1) ;
        transition:transform 0.4s ,background-color 0.4s ,box-shadow 0.4s,opacity 0.25s;
    }
    .container:hover{
        transform:scale(1.06) ;
        transition: all 0.2s ease-in;    
    }
    .passed{
        background-color: rgb(6,170,62);
        box-shadow:0 -150px 60px -2px rgba(56,248,88,0.8) inset;
        }
    .deactive{
        background-color: rgb(203,203,203);
        box-shadow:0 -150px 80px -2px rgba(255,255,255,0.77) inset;
        }
    .onFocus{
        background-color:rgb(169,17,6);
        box-shadow:0 -150px 60px -2px rgba(248,65,69,0.8) inset;
    }
</style>
