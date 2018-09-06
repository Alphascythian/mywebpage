import React from "react";
import {
  FaFacebook,
  FaGithub
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/illya.lesyuk?ref=bookmarks">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://github.com/Alphascythian">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
