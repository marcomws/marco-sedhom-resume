import React from "react";

export default function MyName({legalName}) {
  return (
    <div className="my-name">
      <h1>{ legalName }</h1>
    </div>
  );
}