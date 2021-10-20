import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex,axios,VueAxios)

export default new Vuex.Store({
  state: {
    phone_number:'09121487633',
    count:0,
    base_url:"http://localhost:8000/api/",
    start_index:0,
    question_num:3,
    focus_index:0,
    validated_index:0,
    message:'1',
    show_alert:true,
    aler_text:'hi',
    alert_color:'green',
    error_messages:[
        'شماره همراه معتبر نمیباشد',
        'کد وارد شده صحیح نمیباشد',
        'ارتباط با سرور قطع میباشد',
        'سوال های قبلی تایید نشده است',
        'پاسخ به سوالات نباید خالی باشد',
    ],
    success_messages:[
      'کد تایید برای شما ارسال شد',
      'کد شما تایید شد',
      'ورود مجددتون مبارک',

    ],
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
    verified(store,data){
        console.log('horray',data)
    },
    set_show_alert (state, active) {
      state.show_alert = active
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
  actions:{
    validate_phone({ commit }, data){
      let context = this
      this.state.phone_number = data.phone_number;
      let request_data = new FormData();
      request_data.append('phone', this.state.phone_number);
      let config = {
        method: 'post',
        url: this.state.base_url + "auth/sign/",
        data : request_data
      };
      console.log(request_data)
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data),response.status);
        context.state.alert_text = context.state.success_messages[0]
        context.state.alert_color = 'green'
        console.log(context.state.success_messages[0])
        context.state.show_alert=true
        console.log('status code', response.status)
        commit('verified')
      })
      .catch(function (error) {
        console.log('some error')
        console.log(error.response.status);
        let status = error.response.status;
        context.state.alert_color= 'red'
        if (status == 400)
          context.state.alert_text = context.state.error_messages[0]
        else
          context.state.alert_text = context.state.error_messages[2]
        context.state.show_alert=true

      });
    },
    check_pin({ commit },data){
      console.log(data.code)
      let request_data = new FormData();
      request_data.append('phone', this.state.phone_number);
      request_data.append('code', data.code);

      let config = {
        method: 'post',
        url: this.state.base_url + "auth/sign/verify/",
        data : request_data
      };
      console.log(request_data)
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data),response.status);
        commit('verified')
      })
      .catch(function (error) {
        console.log('some error')
        console.log(error);
      });
    },

  },
  modules: {
  }
})
