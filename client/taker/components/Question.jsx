import React from "react";
// import Answers from "./Answers.jsx";
import {
  Boolean,
  FiniteValue,
  MultipleChoice,
  OrderOfPrecidence
} from "./questionTypes";
import { Typography } from "@material-ui/core";

const Question = props => {
  switch (props.data.type) {
    case "fv":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <FiniteValue data={props.data} dispatcher={props.dispatcher} />
        </div>
      );
    case "boolean":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <Boolean data={props.data} dispatcher={props.dispatcher} />
        </div>
      );
    case "op":
      return (
        <div className="order">
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <OrderOfPrecidence
            items={props.data.answers}
            dispatcher={props.dispatcher}
            question={props.data.question}
          />
        </div>
      );
    case "mc":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <MultipleChoice data={props.data} dispatcher={props.dispatcher} />
        </div>
      );
  }
  // return (
  //   <div className="questions">
  //     <h5>{props.data.question}</h5>
  //     <Answers data={props.data} />
  //   </div>
  // );
};

export default Question;
