import React, { Fragment, useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(
    ref,
    () => {
      return { activateFocus: activate };
    },
    []
  );

  return (
    <Fragment>
      <div
        className={`${classes.control} ${
          // !emailState.isValid ? classes.invalid : ""
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          ref={inputRef}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </Fragment>
  );
});

export default Input;
