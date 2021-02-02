import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import dashboard from "./components/dashboard";
import landing from "./components/Landing";
import "./styling/app.css";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "./redux/actionsCreators";
import Header from "./components/Header";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={landing} />
          <Route path="/dashboard" component={dashboard} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
