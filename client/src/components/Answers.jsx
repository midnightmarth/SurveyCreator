import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const uniqueID = Math.random();
    return (
      <div>
        {this.props.answers.map(data => {
          return (
            <div key={data.key}>
              <input type="radio" name={uniqueID} />
              <label>{data}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Answers;
