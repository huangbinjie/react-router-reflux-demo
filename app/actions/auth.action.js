import Reflux from "reflux";

var loginAction = {
  login: Reflux.createAction({ asyncResult: true }),
  loginout: Reflux.createAction(),
  isLogin: Reflux.createAction()
}

export default loginAction;
