import React, { Component } from "react";
import css from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Person.js: Inside Constructor", props);
  }

  componentWillMount() {
    console.log("Person.js: Insided componentWillMount");
  }

  componentDidMount() {
    console.log("Person.js Inside componentDidMount");
  }
  render() {
    console.log("Person.js Inside render()");
    return (
      <div className={css.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
