import React, { Component } from "react";

import GlobalImage from "../../shared/components/global-image.js";
import GlobalPopUp from "../../shared/components/global-popup.js";

export default class SocialMedia extends Component {
  links;
  popupMsg;
  popupHandler = (link) => window.open(link, '_blank');
  popupHandlerLink;
  popupIsVisibile = false;
  hidePopup = () => this.popupIsVisibile = false;
  showPopup = (linkName, link) => {
    this.popupIsVisibile = true;
    this.popupMsg = `We will redirect you to ${linkName} website, confirm?`;
    this.popupHandlerLink = link;
    console.log("hi marcolino");
  };
  
  constructor() {
    super();
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
          this.popupIsVisibile ? (
            <GlobalPopUp
              popupMsg={ this.popupMsg }
              closeEmitter={ () => this.hidePopup }
              ctaEmitter={ () => this.popupHandler(this.popupHandlerLink) }>
            </GlobalPopUp>
          ) : null
        }
      </div>
    );
  }
}