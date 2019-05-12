import React from "react";
import LeanJSLogo from "./Layout/LeanJSLogo";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <a target="_blank" href="https://reactjs.academy">
          ReactJS Academy
        </a>
      </li>
      <li>by</li>
      <li>
        <a target="_blank" href="https://leanjs.com">
          <LeanJSLogo width={25} />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
