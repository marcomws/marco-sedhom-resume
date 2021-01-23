import React from "react";

import "./styles/style.scss";
import { useScript } from "./shared/supporting-functions.js";
import MainSection from "./components/main-section.js";
import LinksSection from "./components/links-section.js";

export default function App() {
  useScript("https://platform.linkedin.com/badges/js/profile.js", [
    { key: "async", value: true },
    { key: "defer", value: true },
  ]);

  return (
    <div className="my-resume-page">
      <MainSection/>
      <LinksSection/>
    </div>
  );
}
