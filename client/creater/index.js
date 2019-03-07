import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  handleSubmit(answers) {
    console.log("Submit button clicked!");
  }

  render() {
    console.log("Props:",this.props);
    return (
      <div>
        Create your survey!
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
