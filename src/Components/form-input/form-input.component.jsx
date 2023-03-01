import React from "react";
import { FormInputLabel, Group, Input } from "./form-input.style.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group className="group">
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <Input className="form-input" {...otherProps} />
    </Group>
  );
};

export default FormInput;
