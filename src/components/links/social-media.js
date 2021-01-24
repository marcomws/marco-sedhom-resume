import React, { Component } from "react";

import GlobalImage from "../../shared/components/global-image.js";
import GlobalPopUp from "../../shared/components/global-popup.js";

export default class SocialMedia extends Component {
  links;
  popupMsg;
  popupHandler;
  popupIsVisibile = false;
  hidePopup = () => this.popupIsVisibile = false;
  showPopup = (linkName, link) => {
    this.popupIsVisibile = true;
    this.popupMsg = `We will redirect you to ${linkName} website, confirm?`;
    this.popupHandler = window.open(link, '_blank');;
  };
  
  constructor() {
    super();
  };

  render() {
    return (
      <div className="social-media">
        {
          this.props.links.map(l =>
            (
              <GlobalImage
                onClickEmitter={ this.showPopup(l.name, l.link) }
                src={ l.ico }
                alt={ l.name }>
              </GlobalImage>
            )
          )
        }
        {
          this.popupIsVisibile && (
            <GlobalPopUp
              popupMsg={ this.popupMsg }
              closeEmitter={ this.hidePopup }
              ctaEmitter={ this.popupHandler }>
            </GlobalPopUp>
          )
        }
      </div>
    );
  }
}