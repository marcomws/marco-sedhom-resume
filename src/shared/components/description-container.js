import React from "react";

import { createArrayWithRandomValues } from "../supporting-functions.js";

export default function DescriptionContainer({wordsLength, minChars = 1, maxChars = 50}) {

  let words = createArrayWithRandomValues(wordsLength, minChars, maxChars);

  return (
    <div className="description-container">
      {
        words.map(w => <span className="word" style={{minWidth: w + "px"}}></span>)
      }
    </div>
  );
}