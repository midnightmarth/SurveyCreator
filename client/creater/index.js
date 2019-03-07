import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import QuestionHolder from "./components/QuestionHolder.js";

const handleSubmit = answers => {
  console.log("Submit button clicked!");
};

const App = () => {
  return (
    <Grid>
      <QuestionHolder />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
