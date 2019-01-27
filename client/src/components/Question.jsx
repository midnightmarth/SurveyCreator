import React from "react";

import Answers from "./Answers.jsx";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.data.question}</h2>
        <Answers answers={this.props.data.answers} />
      </div>
    );
  }
}
export default Question;
