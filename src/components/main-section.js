import React, { Component } from "react";

import MyName from "./main/my-name.js";

export default class MainSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="main-section">
        <MyName/>
      </div>
    );
  }
}