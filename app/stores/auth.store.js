/*
  name: 登录认证相关的数据仓库
  time: 2015/5/27 14:53
  author: akira
*/
import Reflux from "reflux";
import AuthAction from "../actions/auth.action";
import Cookie from '../utils/cookie';

let loginStore = Reflux.createStore({

  init: function(){
    this.listenTo(AuthAction.login,this.login);
  },

  login: function(...params){
    if(params[0] == "hbj" && params[1] == "123"){
      Cookie.setItem("auth",true,60*15);
      AuthAction.login.completed(true);
    } else {
      Cookie.removeItem("auth");
      AuthAction.login.failed(false);
    }
  },

  isLogin: function(){
    return Cookie.hasItem("auth");
  }

})

export default loginStore;
