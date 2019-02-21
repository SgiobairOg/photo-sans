import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <main className="about">
        <h2 className="about__title">Hi, I'm Jason,</h2>
        <p>
          I've never been good with cameras, especially not for night projects,
          but I have been fortunate enough to see so many beautiful and
          interesting places from beautiful Swiss mountainscapes to the solitude
          of the Pacific Ocean. Photographer Sans is going to be my place to try
          and convey the beauty of my world through words&mdash;a photographer
          sans camera.
        </p>
      </main>
    );
  }
}

export default About;
