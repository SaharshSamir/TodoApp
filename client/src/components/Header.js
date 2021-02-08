import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <a className="nav-item nav-link mx-3" key="about" href="#">
            About
          </a>,
          <a className="nav-item nav-link mx-3" key="login" href="/auth/google">
            Login
          </a>
        ];
      default:
        return [
          <a
            className="nav-item nav-link mx-3"
            key="dashboard"
            href="/dashboard"
          >
            Dashboard
          </a>,
          <a className="nav-item nav-link mx-3" key="logout" href="/api/logout">
            Logout
          </a>
        ];
    }
  }
  render() {
    return (
      <div className="m-5" style={{ height: "10px" }}>
        <nav className="navbar mx-5 nav fixed-top navbar-dark bg-dark p-2">
          <a className="navbar-brand mx-1" href="/">
            Todo
          </a>

          <div className="navbar-nav d-flex flex-row">
            {/* <a className="nav-item nav-link mx-3">About</a>
            <a className="nav-item nav-link mx-3">Backpack</a>
            <a className="nav-item nav-link mx-3">Logout</a> */}
            {this.renderContent()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
