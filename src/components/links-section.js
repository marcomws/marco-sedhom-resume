import React, { Component } from "react";

import { SHORT_NAME, SOCIAL_MEDIA_LINKS } from "../shared/constants.js";
import LinkedInBadge from "./links/linkedin-badge.js";
import SocialMedia from "./links/social-media.js";

export default class LinksSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="links-section">
        <LinkedInBadge shortName={ SHORT_NAME } />
        <SocialMedia links={ SOCIAL_MEDIA_LINKS } />
      </div>
    );
  }
}