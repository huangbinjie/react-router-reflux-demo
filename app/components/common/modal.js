import React from 'react';

var Modal = React.createClass({
  componentWillMount: function(){
    this.setState({display:this.props.display})
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({display:this.nextProps.display})
  },
  render: function(){
    return (
      <div className={"modal "+this.state.display}>
        <div className="modal-dialog">
          <div className="modal-header">
            <button type="button" className="close" onClick={this._close}><span>×</span></button>
            <h4>模态对话框</h4>
          </div>
          <div className="modal-body">{this.props.content}</div>
          <div className="modal-footer">
            <button type="button" className="btn default" onClick={this._close}>关闭</button>
            <button type="button" className="btn primary">确定</button>
          </div>
        </div>
      </div>
    )
  },
  _close: function(){
    this.setState({display: "hide"})
  }
})

export default Modal;
