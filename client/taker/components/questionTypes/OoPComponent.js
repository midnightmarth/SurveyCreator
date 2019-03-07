import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

const Component = props => {
  const [state, changeState] = useState("");
  let data = props.name;
  return (
    <div>
      <Select
        value={state}
        onChange={(e, value) => {
          changeState(value.props.value);
          props.dispatcher("oop", value.props.value, props.question, data);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.items.map(list => {
          return (
            <MenuItem name={data} value={props.items.indexOf(list) + 1}>
              {props.items.indexOf(list) + 1}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Component;
