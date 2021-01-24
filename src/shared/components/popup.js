import React from "react";

export default function PopUp({popupMsg, closeEmitter, ctaEmitter, ctaCaption="OK"}) {
  return (
    <div className="popup-modal">
      <div className="popup-content">
        <span className="popup-close" onClick={ closeEmitter }><b>&times;</b></span>

        <p className="popup-text">{ popupMsg }</p>
        
        <div className="standard-btn" onClick={ ctaEmitter }>
          <button>{ ctaCaption }</button>
        </div>
      </div>
    </div>
  );
}