import React from "react";

import "./fieldOutput.css";

const FieldOutput = (props) => {
  return (
    <div>
      {props.firstName || props.lastName ? (
        <h1>
          Hi, {props.firstName} {props.lastName}.
        </h1>
      ) : null}
    </div>
  );
};

export default FieldOutput;
