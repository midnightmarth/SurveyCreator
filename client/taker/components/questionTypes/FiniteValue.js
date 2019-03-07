import React, { useState, useCallback } from "react";
import Slider from "@material-ui/lab/Slider";
import { Typography } from "@material-ui/core";

const FiniteValue = props => {
  const question = props.data.question;
  const [slide, setSlide] = useState(props.data.min);
  const onChange = useCallback((e, value) => {
    setSlide(value);
    props.dispatcher("range", value, question);
  });
  return (
    <div
      key={props.data.key}
      className="range-field"
      style={{ width: 25 + "%", margin: 25 + "px" }}
    >
      <Slider
        value={slide}
        min={props.data.min}
        max={props.data.max}
        step={1}
        onChange={onChange}
      />
      <Typography variant="body1" gutterBottom>
        {slide}
      </Typography>
    </div>
  );
};

export default FiniteValue;
