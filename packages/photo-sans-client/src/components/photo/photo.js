import React, { Component } from "react";
import PropTypes from "prop-types";
import palettes from "nice-color-palettes";
import random from "canvas-sketch-util/random";
import "./photo.css";

class Photo extends Component {
  render() {
    const { title, body, created } = this.props.photo;
    random.setSeed(title);
    const colorCount = random.rangeFloor(1, 6);
    const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
    const bgColor = random.pick(palette);
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const parsedDate = new Date(created).toLocaleDateString(
      "en-GB",
      dateOptions
    );

    const styles = {
      backgroundColor: bgColor
    };

    return (
      <article className="photo">
        <figure className="photo__body" style={styles}>
          <span className="photo__body-content">{body}</span>
        </figure>
        <header className="photo__header">
          <h2 className="photo__title">{title}</h2>
          <p className="photo__released">{parsedDate}</p>
        </header>
      </article>
    );
  }
}

Photo.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string
};

export default Photo;
