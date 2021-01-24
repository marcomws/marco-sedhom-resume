import React from "react";

export default function GlobalImage({onClickEmitter, src, alt="Image", width="24", height="24"}) {
  return (
    <div className="shared-image" onClick={ onClickEmitter }>
      {
        src
        ? <img src={src} alt={alt} width={width} height={height}></img>
        : <span width={width} height={height}>{ alt }</span>
      }
    </div>
  );
}