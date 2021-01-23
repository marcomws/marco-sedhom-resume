import React from "react";
import "./styles/style.scss";
import { useScript } from "./shared/supporting-functions.js";
import MyName from "./components/my-name.js";
import LinkedInBadge from "./components/linkedin-badge.js";

export default function App() {
  useScript("https://platform.linkedin.com/badges/js/profile.js", [
    { key: "async", value: true },
    { key: "defer", value: true },
  ]);

  return (
    <div className="my-resume-page">
      <MyName/>
      <LinkedInBadge/>
    </div>
  );
}
