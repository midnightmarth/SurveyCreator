import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const MultiChoice = props => {
  const [answers, addAnswer] = useState([
    { id: 0, answer: "" },
    { id: 1, answer: "" }
  ]);
  return (
    <div>
      <Button
        onClick={() => {
          addAnswer([
            ...answers,
            { id: answers[answers.length - 1].id + 1, answer: "" }
          ]);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          if (answers.length != 2) {
            answers.pop();
            addAnswer([...answers]);
          }
        }}
      >
        -
      </Button>
      {answers.map(i => {
        return (
          <div key={i.id}>
            <TextField label="answer" />
          </div>
        );
      })}
    </div>
  );
};

export default MultiChoice;
