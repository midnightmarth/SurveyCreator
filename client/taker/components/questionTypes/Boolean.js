import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

const Boolean = props => {
  const question = props.data.question;
  return (
    <div className="boolean">
      <RadioGroup
        key={props.data.key}
        onChange={(e, value) => {
          props.dispatcher("multichoice", value, question);
        }}
      >
        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="True"
        />
        <FormControlLabel
          value="false"
          control={<Radio color="primary" />}
          label="False"
        />
      </RadioGroup>
    </div>
  );
};

export default Boolean;
