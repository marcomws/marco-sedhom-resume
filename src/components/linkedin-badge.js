import React, { Component } from "react";
import { SHORT_NAME } from "../shared/constants.js";

export default class LinkedInBadge extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="large"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="light"
        data-vanity="marco-sedhom">
        <a
          className="LI-simple-link"
          href="https://it.linkedin.com/in/marco-sedhom?trk=profile-badge">
          { SHORT_NAME }
        </a>
      </div>
    );
  }
}