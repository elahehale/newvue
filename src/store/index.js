import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex,axios,VueAxios)

export default new Vuex.Store({
  state: {
    phone_number:'',
    code :'',
    count:0,
    base_url:"http://localhost:8000/api/",
    start_index:0,
    question_num:2,
    token: localStorage.getItem('token') || '',
    focus_index:0,
    validated_index:0,
    message:'1',
    show_alert:false,
    aler_text:'hi',
    alert_color:'green',
    loaded:false,
    phone_validation_in_progress:false,
    pin_in_progress:false,
    error_messages:[
        'شماره همراه معتبر نمیباشد',
        'کد وارد شده صحیح نمیباشد',
        'ارتباط با سرور قطع میباشد',
        'سوال های قبلی تایید نشده است',
        'دقت کنید پاسخ خالی نباشد',
    ],
    success_messages:[
      'کد تایید برای شما ارسال شد',
      'کد شما تایید شد',
      'ورود مجددتون مبارک',
      'جواب شما به این سوال ثبت شد'

    ],
    questions:[],
    // card_datas:[
    //   {pass:false,focus:true,deactive:false},
    //   {pass:false,focus:true,deactive:false},
    //   {pass:false,focus:true,deactive:false,},
    //   {pass:false,focus:true,deactive:false,},
    //   {pass:false,focus:true,deactive:false,},
    //   {pass:false,focus:true,deactive:false},
    // ]
  },

  mutations: {
    empty_answer(store){
      store.alert_text = store.error_messages[4]
    
      store.alert_color='red'
      store.show_alert = true;
    },
    reset(store){
      console.log("reset")
      for (let index in store.questions){
        store.questions[index].answer =''
      }
      localStorage.setItem('token','')
      store.focus_index = 0
      store.phone_number=''
      store.code = ''
    },
    answerr(){
      console.log('hi')
    },
    phone_validation_progress(store,data){
      store.phone_validation_in_progress = data
    },
    pin_progress(store,data){
      store.pin_in_progress = data
    },
    Start_Index_Increment(store,data){
      store.start_index= (store.start_index + data)%(store.question_num + 3)
    },
    verified(store,data){
        console.log('horray',data)
        store.focus_index = store.focus_index + 1
        console.log('index increaminent',store.focus_index)
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
      return state.questions[index -2 ]
    }
  },
  actions:{
    validate_phone({ commit }){
      return new Promise((resolve, reject) => {
      let context = this
      console.log(localStorage.getItem('token'),'token')
      commit('phone_validation_progress',true)
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
        context.state.alert_text = context.state.success_messages[0]
        context.state.alert_color = 'green'
        context.state.show_alert=true
        context.focus_index= context.focus_index + 1
        console.log(context.focus_index)
        commit('phone_validation_progress',false)
        commit('verified')
        resolve(response);
      })
      .catch(function (error) {
        commit('phone_validation_progress',false)
        let stat = error.response.status;
        context.state.alert_color= 'red'
        if (stat == 400)
          context.state.alert_text = context.state.error_messages[0]
        else
          context.state.alert_text = context.state.error_messages[2]
        context.state.show_alert=true
        reject(error);

      });
    })
    },
    fetch_poll_by_pk({commit}){
      let context = this
      var config = {
        method: 'get',
        url: this.state.base_url + "polls/fetch/1/",
        headers: { 
          'Authorization': 'token ' + localStorage.getItem('token'),
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data.phone)
        context.state.questions = response.data.questions
        if (response.data.phone !== undefined){
          context.state.phone_number = response.data.phone
          context.state.focus_index = 2
        }
        context.state.loaded= true
        commit('updateMessage')

      })
      .catch(function (error) {
        console.log(error);
      });
    },
    answer({commit},data){
      console.log(data)
      let context = this
      var request_data = JSON.stringify({
        "answer": data.answer
      });
      
      var config = {
        method: 'put',
        url: 'http://localhost:8000/api/polls/answer/' + data.pk + '/',
        headers: { 
          'Authorization': 'token ' + localStorage.getItem('token'), 
          'Content-Type': 'application/json'
        },
        data : request_data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        context.state.alert_text = context.state.success_messages[3]
        context.state.alert_color = 'green'
        context.state.show_alert=true   
        commit('verified')
      })
      .catch(function (error) {
        console.log(error);
        let stat = error.response.status;
        context.state.alert_color= 'red'
        if (stat == 400 || stat == 403)
          context.state.alert_text = context.state.error_messages[4]
        else
          context.state.alert_text = context.state.error_messages[2]
        context.state.show_alert=true
      });
      

    },
    check_pin({ commit ,dispatch}){
      return new Promise((resolve, reject) => {
      let context = this
      let request_data = new FormData();
      request_data.append('phone', this.state.phone_number);
      request_data.append('code', context.state.code);
      commit('pin_progress',true)
      let config = {
        method: 'post',
        url: this.state.base_url + "auth/sign/verify/",
        data : request_data
      };
      console.log(request_data)
      axios(config)
      .then(function (response) {
        context.state.alert_text = context.state.success_messages[1]
        context.state.alert_color = 'green'
        context.state.show_alert=true        
        console.log(context.focus_index)
        let token = response.data.token
        console.log(token,'token')
        localStorage.setItem('token', token)
        dispatch('fetch_poll_by_pk')
      commit('pin_progress',false)
        resolve(response);

        commit('verified')
      })
      .catch(function (error) {
      commit('pin_progress',false)

        let stat = error.response.status;
        context.state.alert_color= 'red'
        if (stat == 400 || stat == 403)
          context.state.alert_text = context.state.error_messages[1]
        else
          context.state.alert_text = context.state.error_messages[2]
        context.state.show_alert=true
        reject(error)
      });
    })
    },

  },
  modules: {
  }
})
