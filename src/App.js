import React from "react";
import './styles/style.scss';

export const LEGAL_NAME = "Marco Michel Wahsh Sedhom";
export const SHORT_NAME = "Marco Sedhom";

export default function App() {
  return (
    <div>
      <h1>{{ LEGAL_NAME }}</h1>

      <LinkedInBadge/>
    </div>
  );
}
