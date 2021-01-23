import React from "react";

import { createArrayWithRandomValues } from "../../shared/supporting-functions.js";

export default function BlaBlaBla({wordsLength}) {

  let words = createArrayWithRandomValues(wordsLength);

  return (
    <div className="description-container">
      {
        words.map(w => <span className="word" style={{minWidth: w + "px"}}></span>)
      }
    </div>
  );
}