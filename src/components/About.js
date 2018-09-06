import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/methink.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a dynamic figure, often seen scaling walls and crushing ice. 
          I have been known to remodel train stations on my lunch breaks, making them more efficient in the area of heat retention. 
          I translate ethnic slurs for Cuban refugees, I write award-winning operas, I manage time efficiently. 
          Occasionally, I tread water for three days in a row.
        </p>
        <p>
          I woo women with my sensuous and godlike trombone playing, I can pilot bicycles up severe inclines with unflagging speed, and I cook Thirty-Minute Brownies in twenty minutes. 
          I am an expert in stucco, a veteran in love, and an outlaw in Peru.
        </p>
        <p>
          I am an abstract artist, a concrete analyst, and a ruthless bookie. Critics worldwide swoon over my original line of corduroy evening wear. I don't perspire. I am a private citizen, yet I receive fan mail. I have been caller number nine and have won the weekend passes. Last summer I toured New Jersey with a traveling centrifugal-force demonstration. 
          I bat .400. My deft floral arrangements have earned me fame in international botany circles. Children trust me.
        </p>
        <p>
          I can hurl tennis rackets at small moving objects with deadly accuracy. 
          I once read Paradise Lost, Moby Dick, and David Copperfield in one day and still had time to refurbish an entire dining room that evening. 
          I know the exact location of every food item in the supermarket. I have performed several covert operations for the CIA. 
          I sleep once a week; when I do sleep, I sleep in a chair. While on vacation in Canada, I successfully negotiated with a group of terrorists who had seized a small bakery. 
          The laws of physics do not apply to me.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Illya Lesyuk</span>
              <br />
              <span>
                432 Street
                <br /> Paradise, 8150-777 PT
              </span>
              <br />
              <span>(351)920087250</span>
              <br />
              <span>abyssmal@mail.ru</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://media.newjobs.com/cms/uken/seeker/cv-templates/cv-template-it-project-manager.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
