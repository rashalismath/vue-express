import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    strict:true,
    state:{
        token:null,
        user:null
    },
    mutations:{
        setToken:(state,token)=>{
            state.token=token;
        },
        setUser:(state,user)=>{
            state.user=user;
        },
    },
    actions:{
        setToken:(context,token)=>{
            context.commit('setToken',token);
        },
        setUser:(context,user)=>{
            context.commit('setUser',user);
        }
    }

})