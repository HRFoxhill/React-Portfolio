import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Resume from "./containers/Resume";
import Contact from "./containers/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Nav />
            <Route exact 
            path="/react-portfolio/"
            component={Home} />
            <Route exact 
            path="/react-portfolio/about"
            component={About} />
            <Route exact
            path="/react-portfolio/projects"
            component={Projects} />
            <Route exact
            path="/react-portfolio/resume"
            component={Resume} />
            <Route exact
            path="/react-portfolio/contact"
            component={Contact} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
