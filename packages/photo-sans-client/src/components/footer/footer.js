import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <aside className="footer__tagline">
          Made in{" "}
          <span role="img" aria-label="Switzerland">
            🇨🇭
          </span>{" "}
          by{" "}
          <a
            className="footer__link"
            href="https://www.wilsons.io"
            rel="author"
          >
            Jason Wilson
          </a>
        </aside>
        <a
          href="https://github.com/sgiobairog/photo-sans"
          className="footer__link"
          rel="source"
        >
          view code in GitHub
        </a>
      </footer>
    );
  }
}

export default Footer;
