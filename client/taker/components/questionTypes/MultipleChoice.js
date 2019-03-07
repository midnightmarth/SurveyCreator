import React from "react";
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

const MultipleChoice = props => {
  const question = props.data.question;
  return (
    <RadioGroup
      className="multichoice"
      key={props.data.key}
      onChange={(e, value) => {
        props.dispatcher("multichoice", value, question);
      }}
    >
      {props.data.answers.map(data => {
        return (
          <FormControlLabel
            value={data}
            control={<Radio color="primary" />}
            label={data}
          />
        );
      })}
    </RadioGroup>
  );
};

export default MultipleChoice;
