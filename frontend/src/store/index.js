import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//vuex의 store에서 따로 하므로 vue의 프로토타입에 할당하지 않고 사용

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : '',
    memo : { },
    memos : [],
    comments : []
  },
  getters: {
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    changeMemolist(state,mlist) {
      state.memos = mlist
    },
    changeMemo(state, memo) {
      state.memo = memo;
    },
    changeComments(state, comments) {
      state.comments = comments
    }
  
  },
  actions: {
    getMemoList({commit}) {
      axios.get('/api/memo')
      .then((res) =>{
        //가져온 res의 data에 있는 값을 store에 저장
        commit('changeMemolist',res.data);
      })
    },
    //id값은 컴포넌트에서 전달
    getMemo({commit}, id) {
      axios.get(`/api/memo/${id}`)
        .then((res) =>{
          commit("changeMemo", res.data);
        })
    },
    getComments({commit}, id) {
      axios.get(`/api/comment/${id}`)
        .then((res) =>{
          //가져온 response.data값을 comments에 넣어줌
          commit("changeComments", res.data);
        })
    },
    //comment객체를 컴포넌트에서 받아옴
    postComments({commit}, comment) {
      axios.post('/api/comment', {
        data : {
          comment : comment
        }
      }).then((res)=> {
        console.log(res.data)
        //comments의 내용을 가져와야함
        commit('changeComments',res.data);
      })
    }
  },
  modules: {
  }
})
