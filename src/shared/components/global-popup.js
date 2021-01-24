import React from "react";

export default function GlobalPopUp({isVisibile, popupMsg, closeEmitter, ctaEmitter, ctaCaption="OK"}) {
  return (
    <div className={isVisibile ? "popup-modal-open" : "popup-modal-close"}>
      <div className="popup-content">
        <span className="popup-close" onClick={ closeEmitter }><b>&times;</b></span>

        <p className="popup-text" dangerouslySetInnerHTML={{ __html: popupMsg }}></p>
        
        <div className="standard-btn" onClick={ ctaEmitter }>
          <button>{ ctaCaption }</button>
        </div>
      </div>
    </div>
  );
}