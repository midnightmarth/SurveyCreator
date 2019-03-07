import React, { useState } from "react";
import {
  Button,
  InputLabel,
  TextField,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";

import {
  TrueFalse,
  OrderOfPrecidence,
  MultiChoice,
  FiniteValue
} from "./questionTypes/";

const Question = props => {
  const [state, changeState] = useState("");

  return (
    <div key={props.key}>
      <TextField label="Question" />

      <div>
        <FormControl>
          <InputLabel>Question Type</InputLabel>
          <Select
            value={state}
            onChange={(e, value) => {
              switch (value.props.value) {
                case 1:
                  changeState("1");
                  break;
                case 2:
                  changeState("2");
                  break;
                case 3:
                  changeState("3");
                  break;
                case 4:
                  changeState("4");
                  break;
                default:
                  changeState("");
                  break;
              }
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Multiple Choice</MenuItem>
            <MenuItem value={2}>True/False</MenuItem>
            <MenuItem value={3}>Order of Precidence</MenuItem>
            <MenuItem value={4}>Finite Value</MenuItem>
          </Select>
          {state === "1" ? (
            <MultiChoice />
          ) : state === "2" ? (
            <TrueFalse />
          ) : state === "3" ? (
            <OrderOfPrecidence />
          ) : state === "4" ? (
            <FiniteValue />
          ) : (
            <div>Choose Question Type</div>
          )}
        </FormControl>
      </div>
      <div>
        <Button
          onClick={() => {
            props.removeQuestion(props.id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
export default Question;
