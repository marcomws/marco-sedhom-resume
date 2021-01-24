import React from "react";

import { createArrayWithRandomValues } from "../supporting-functions.js";

export default function DescriptionContainer({title, wordsLength, minChars = 1, maxChars = 50}) {

  let words = createArrayWithRandomValues(wordsLength, minChars, maxChars);

  return (
    <div className="description-container">
      <h3>{ title }</h3>
      {
        words.map((w, k) => <span key={k} className="word" style={{minWidth: w + "px"}}></span>)
      }
    </div>
  );
}