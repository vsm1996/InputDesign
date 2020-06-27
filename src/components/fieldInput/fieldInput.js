import React from "react";
import { Input, InputLabel, FormControl, FormGroup } from "@material-ui/core";

import "./fieldInput.css";

const FieldInput = (props) => {
  return (
    <div className="fieldInput">
      <FormGroup>
        <FormControl margin="normal">
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstName"
            aria-describedby="First Name Input"
            name="firstName"
            placeholder=""
            onChange={props.handleChange}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            aria-describedby="Last Name Input"
            name="lastName"
            placeholder=""
            onChange={props.handleChange}
          />
        </FormControl>
      </FormGroup>
      {/* <FormControl>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </FormControl> */}
    </div>
  );
};

export default FieldInput;
