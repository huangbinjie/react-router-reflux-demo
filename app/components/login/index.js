import React from 'react';
import Router from 'react-router';
import LoginAction from '../../actions/auth.action';
import loginStore from '../../stores/auth.store';
let Navigation = Router.Navigation;

let Login = React.createClass({
    mixins: [Navigation],
    getInitialState: function () {
        return {
            username: "",
            password: ""
        }
    },
    render: function () {
        return (
            <div className="login">
                <form onSubmit={this._onSubmit}>
                    <div className="form-container">
                        <div className="row">
                            <label>用户名：</label>
                            <input onInput={this._usernameInput}/>
                        </div>
                        <div className="row">
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;密码：</label>
                            <input onInput={this._passwordInput}/>
                        </div>
                        <button className="btn primary">登录</button>
                    </div>
                </form>
            </div>
        );
    },
    _onSubmit() {
        let isLogin = LoginAction.login(this.state.username, this.state.password);
        isLogin.then((d)=>this.transitionTo('/home')).catch(()=>alert("账号密码错误"));
    },
    _usernameInput(e) {
        this.setState({username: e.target.value});
    },
    _passwordInput(e) {
        this.setState({password: e.target.value});
    }
})

export default Login;
