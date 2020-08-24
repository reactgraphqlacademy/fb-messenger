import React from "react";
import LeanJSLogo from "./Layout/LeanJSLogo";

const Footer = () => (
  <footer className="footer">
    <ul>
      <li>
        <a target="_blank" href="https://reactgraphql.academy">
          React GraphQL Academy
        </a>
      </li>
      <li>by</li>
      <li>
        <a target="_blank" href="https://leanjs.com">
          <LeanJSLogo width={25} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
