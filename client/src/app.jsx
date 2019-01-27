import React from "react";
import ReactDOM from "react-dom";

import QuestionHolder from "./components/QuestionsHolder.jsx";

class App extends React.Component {
  handleSubmit(answers) {
    console.log("Submit button clicked!");
  }

  render() {
    return (
      <div>
        Survey!
        <QuestionHolder />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
