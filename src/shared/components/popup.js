import React, { Component } from "react";

export default class PopUp extends Component {
  closeEmitter;
  popupMsg;
  
  constructor() {
    super();

    this.closeEmitter = this.props.toggle;
    this.popupMsg = this.props.popupMsg;
  };

  render() {
    return (
      <div className="modal-popup">
        <div className="popup_content">
          <span className="close" onClick={this.closeEmitter}><b>&times;</b></span>
          <p>{ this.popupMsg }</p>
        </div>
      </div>
    );
  }
}