import React from "react";
import ReactDOM from "react-dom";

import QuestionHolder from "./components/QuestionsHolder.jsx";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        Survey!
        <QuestionHolder />
        <button type="submit">Submit</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
