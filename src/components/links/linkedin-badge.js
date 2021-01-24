import React from "react";

export default function LinkedInBadge({shortName}) {
  return (
    <div className="linkedin-badge">
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
          target="_blank"
          href="https://it.linkedin.com/in/marco-sedhom?trk=profile-badge">
          { shortName }
        </a>
      </div>
    </div>
  );
}