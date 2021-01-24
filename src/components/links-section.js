import React, { Component } from "react";

import { SHORT_NAME, SOCIAL_MEDIA_LINKS } from "../shared/constants.js";
import LinkedInBadge from "./links/linkedin-badge.js";
import DescriptionContainer from "../shared/components/description-container.js";
import SocialMedia from "./links/social-media.js";

export default class LinksSection extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div className="links-section">
        <LinkedInBadge shortName={ SHORT_NAME } />
        <DescriptionContainer title="Contact info" wordsLength={ 50 } />
        <SocialMedia links={ SOCIAL_MEDIA_LINKS } />
      </div>
    );
  }
}