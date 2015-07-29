import React from 'react';
import Router from 'react-router';

import Modal from '../common/modal';
import AuthStore from '../../stores/auth.store';

let {Navigation} = Router;

let Home = React.createClass({
    mixins: [Navigation],
    componentWillMount: function () {
        if (!AuthStore.isLogin()) {
            this.transitionTo("/login");
        }
    },
    render: function () {
        return (
            <div>
              <Modal display="show" content={"One fine body…"} onSubmit={this._modalSubmit}/>
            </div>
        )
    }
})

export default Home;
