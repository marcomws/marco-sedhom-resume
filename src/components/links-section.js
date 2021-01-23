import React, { Component } from "react";

import LinkedInBadge from "./links/linkedin-badge.js";

export default class LinksSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="links-section">
        <LinkedInBadge/>
      </div>
    );
  }
}