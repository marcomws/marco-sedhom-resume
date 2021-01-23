import React, { Component } from 'react';
import SHORT_NAME from "../App.js";

export default class LinkedInBadge extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div
        class="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="vertical"
        data-theme="light"
        data-vanity="marco-sedhom">
          <a class="LI-simple-link" href='https://it.linkedin.com/in/marco-sedhom?trk=profile-badge'>
            {{ SHORT_NAME }}
          </a>
      </div>
    );
  }
}