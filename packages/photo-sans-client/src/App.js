import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Gallery from "./components/gallery/gallery";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Route exact path="/" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
