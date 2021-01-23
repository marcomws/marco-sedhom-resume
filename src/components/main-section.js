import React, { Component } from "react";

import MyName from "./main/my-name.js";
import DescriptionContainer from "../shared/components/description-container.js";
import { DESCRIPTION_WORDS_LENGTH, LEGAL_NAME } from "../shared/constants.js";

export default class MainSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="main-section">
        <MyName legalName={ LEGAL_NAME } />

        <DescriptionContainer
          wordsLength={ DESCRIPTION_WORDS_LENGTH }
          minChars={1}
          maxChars={50}
        />
      </div>
    );
  }
}