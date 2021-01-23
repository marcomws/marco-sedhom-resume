import React from "react";

import { createArrayWithRandomValues } from "../supporting-functions.js";

export default function DescriptionContainer({wordsLength, minChars, maxChars}) {

  let words = createArrayWithRandomValues(wordsLength, minChars, maxChars);

  return (
    <div className="description-container">
      {
        words.map(w => <span className="word" style={{minWidth: w + "px"}}></span>)
      }
    </div>
  );
}