import React, { Component } from "react";

import MyName from "./main/my-name.js";
import DescriptionContainer from "../shared/components/description-container.js";
import { LEGAL_NAME } from "../shared/constants.js";

export default class MainSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="main-section">
        <MyName legalName={ LEGAL_NAME } />
        <DescriptionContainer title="About me" wordsLength={ 100 } />
        <DescriptionContainer title="Professional experience" wordsLength={ 200 } />
      </div>
    );
  }
}