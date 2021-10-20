import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    start_index:0,
    question_num:3,
    focus_index:0,
    message:'1',
    card_datas:[
      {pass:false,focus:true,deactive:false},
      {pass:false,focus:true,deactive:false},
      {question : 'first question',answer:'',pk:'1',pass:false,focus:true,deactive:false,index:1},
      {question : 'second question',answer:'',pk:'2',pass:false,focus:true,deactive:false,index:2},
      {question : 'third question',answer:'',pk:'3',pass:false,focus:true,deactive:false,index:3},
      {pass:false,focus:true,deactive:false},
    ]
  },

  mutations: {
    Start_Index_Increment(store,data){
      store.start_index= (store.start_index + data)%(store.question_num + 3)
    },
    updateMessage(store,data){
      console.log(data)
    }
  },
  getters: {
    Card_Datas(state){
      return state.card_datas
  },
    getQuestionByIndex: (state) => (index)=> {
      return state.card_datas[index]
    }
  },
  modules: {
  }
})
