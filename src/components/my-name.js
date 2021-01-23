import React, { Component } from "react";

import { LEGAL_NAME } from "../shared/constants.js";

export default class MyName extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <h1>{ LEGAL_NAME }</h1>
      </div>
    );
  }
}