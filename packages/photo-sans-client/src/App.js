import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Gallery from "./components/gallery/gallery";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const graphURI = process.env.GRAPHQL_URI || "//localhost:5000/graphql?";
const client = new ApolloClient({
  uri: graphURI,
  fetchOptions: {
    contentType: "application/json"
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Nav />
            <Route exact path="/" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
