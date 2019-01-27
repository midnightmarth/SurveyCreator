import React from "react";
import ReactDOM from "react-dom";

import QuestionHolder from "./components/QuestionsHolder.jsx";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        Survey!;
        <QuestionHolder />;
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
