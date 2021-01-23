import React, { Component } from "react";

import MyName from "./main/my-name.js";
import DescriptionContainer from "./main/description-container.js";
import { DESCRIPTION_WORDS_LENGTH } from "../shared/constants.js";

export default class MainSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="main-section">
        <MyName/>
        <DescriptionContainer wordsLength={ DESCRIPTION_WORDS_LENGTH }/>
      </div>
    );
  }
}