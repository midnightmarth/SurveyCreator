import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.answers.map(data => {
          return (
            <div>
              <input type="radio" />
              {data}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Answers;
