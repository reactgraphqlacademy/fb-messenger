import React from "react";
import LeanJSLogo from "./LeanJSLogo";
import Link from "./Link";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <Link target="_blank" to="https://reactjs.academy">
          ReactJS Academy
        </Link>
      </li>
      <li>by</li>
      <li>
        <Link target="_blank" to="https://leanjs.com">
          <LeanJSLogo width={25} />
        </Link>
      </li>
    </ul>
  </div>
);

export default Footer;
