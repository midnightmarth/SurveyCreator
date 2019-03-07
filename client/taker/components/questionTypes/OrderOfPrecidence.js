import React from "react";
import { OoPComponent } from "./";

const OrderOfPrecidence = props => {
  return (
    <div>
      {props.items.map(data => {
        return (
          <div>
            <OoPComponent
              name={data}
              items={props.items}
              dispatcher={props.dispatcher}
              question={props.question}
            />
            <li>{data}</li>
          </div>
        );
      })}
    </div>
  );
};

export default OrderOfPrecidence;
