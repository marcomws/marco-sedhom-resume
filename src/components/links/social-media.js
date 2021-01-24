import React, { Component } from "react";

import GlobalImage from "../../shared/components/global-image.js";
import GlobalPopUp from "../../shared/components/global-popup.js";

export default class SocialMedia extends Component {
  
  constructor() {
    super();
    this.state = {
      popupIsVisibile: false,
      popupHandlerLink: "",
      popupMsg: "",
    };

    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.popupHandler = this.popupHandler.bind(this);
  };

  showPopup = (linkName, link) => {
    this.setState({
      ...this.state,
      popupIsVisibile: true,
      popupHandlerLink: link,
      popupMsg: `We will redirect you to <b>${linkName}</b> website, confirm?`
      });
  };

  hidePopup = () => this.setState({...this.state, popupIsVisibile: false});

  popupHandler = (link) => {
    window.open(link, '_blank');
    this.hidePopup();
  };

  render() {
    return (
      <div className="social-media">
        {
          this.props.links.map((l, k) =>
            (
              <GlobalImage
                key={k}
                onClickEmitter={ () => this.showPopup(l.name, l.link) }
                src={ l.ico }
                alt={ l.alt }>
              </GlobalImage>
            )
          )
        }
        {
          <GlobalPopUp
            isVisibile={ this.state.popupIsVisibile }
            popupMsg={ this.state.popupMsg }
            closeEmitter={ () => this.hidePopup() }
            ctaEmitter={ () => this.popupHandler(this.state.popupHandlerLink) }>
          </GlobalPopUp>
        }
      </div>
      
    );
  }
}