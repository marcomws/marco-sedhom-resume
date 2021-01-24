import React from "react";

export default function Image({onClickEmitter}) {
  return (
    <div className="shared-image" onClick={ onClickEmitter }>
    </div>
  );
}