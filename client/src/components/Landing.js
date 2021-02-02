import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div
        className="container d-flex justify-content-center text-white align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="d-flex flex-column p-2 border">
          <h1>Todo</h1>
          <section>
            <p>Structure your day efficiently by making a list!</p>
            <p>You can add, delete and mark your tasks as done..</p>
            <p>Get started!</p>
          </section>
          <button
            className="btn btn-block bg-primary text-white"
            href="/auth/google"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
