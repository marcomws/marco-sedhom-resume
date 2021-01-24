import React from "react";

export default function Image({onClickEmitter, src, alt="Image", width="24", height="24"}) {
  return (
    <div className="shared-image" onClick={ onClickEmitter }>
      <img src={src} alt={alt} width={width} height={height}></img>
    </div>
  );
}