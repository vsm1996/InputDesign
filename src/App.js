import React, { Component } from "react";
import "./App.css";

import FieldInput from "./components/fieldInput/fieldInput";
import FieldOutput from "./components/fieldOutput/fieldOutput";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { firstName, lastName } = this.state;
    return (
      <div className="App">
        <FieldOutput firstName={firstName} lastName={lastName} />
        <FieldInput
          firstName={firstName}
          lastName={lastName}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
