import React, { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./form-input.style";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group className="group">
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
      <Input className="form-input" {...otherProps} />
    </Group>
  );
};

export default FormInput;
