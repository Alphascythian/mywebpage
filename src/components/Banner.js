import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Illya Lesyuk.</h1>
      <h3>
        I'm Algarve based <span><s>"wannabe"</s> programmer</span>,
        <span> and</span> <span>webdesigner.</span> I want to create awesome
        and effective visual identities for companies of all sizes around the
        globe. Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
