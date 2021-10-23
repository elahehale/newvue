<template>
    <div class='text'>
        <h2 class='question'>لطفا برای تایید هویت، شماره همراه خود را وارد کنید:</h2>
        <input class='phone-input' type='text' maxlength='11'  v-model="$store.state.phone_number" v-on:keyup.enter='validate_phone'
        :disabled="$store.state.focus_index > 1"  v-bind:class="{passed: $store.state.focus_index > 1}">
        <div style="position:relative ; margin-top:10px;">
            <v-progress-circular :size='65' indeterminate='true' color="white" :width="4" class='loader' v-if='$store.state.phone_validation_in_progress'>
            
            </v-progress-circular> 
            <v-btn  fab small color='white' @click="validate_phone" v-if="0 === $store.state.focus_index"><v-icon dark>mdi-check</v-icon></v-btn>

            </div>       
    </div>
</template>
<script>
export default {
  name: 'PhoneInput',
  data: () => ({
      phone: '',
      loading:false,
  }),
  props: {
  },
  methods:{
      check(){
        console.log(this.$store.state.card_datas[2])
      },
      validate_phone(){
          this.$store.dispatch('validate_phone').then(response => {
            this.loading=true;
            this.$emit('tonext');
            console.log(response)
        }, error => {
            console.error(error)
        })
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .loader{
        position: absolute;
        z-index: 0;
        margin:0 auto;
        left:75px;
        top:-13px;
    }
    .btn{
        z-index: 5000;
        position: relative;
        margin:0 auto;
    }
    .text{
        transition:opacity 0.25s;
        text-align: center;

    }
    .phone-input{
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
 
    input:focus{
    box-shadow: inset 0 -1px 0 #ddd !important;
    outline:0px !important;
    }
    .passed{
        color:green;
    }
</style>
