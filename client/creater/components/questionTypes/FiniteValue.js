import React from "react";
import { Input, FormControl, FormHelperText } from "@material-ui/core";

const FiniteValue = props => {
  return (
    <FormControl>
      <Input defaultValue="0" />
      <FormHelperText>Minimum Value</FormHelperText>
      <Input defaultValue="0" />
      <FormHelperText>Maximum Value</FormHelperText>
    </FormControl>
  );
};

export default FiniteValue;
