import React from "react";
import css from "./Person.module.css";

const person = props => {
  return (
    <div className={css.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
