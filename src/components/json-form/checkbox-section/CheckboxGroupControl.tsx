import { withJsonFormsControlProps } from "@jsonforms/react";
import CheckboxGroupContainer from "./CheckboxGroupContainer";
import CheckboxItem from "./CheckboxItem";
import { ControlProps } from "@jsonforms/core";
import { SchemaType } from "./types";
import ErrorDescription from "../ErrorDescription";
import { useState } from "react";

const CheckboxGroupControl = (props: ControlProps) => {
  const { path, schema, handleChange, data: value, enabled } = props;
  const { title, items } = schema as SchemaType;
  const options: string[] = items?.enum || [];
  const selectedValues: string[] = value || [];
  const [error, setError] = useState<string | undefined>();

  const handleCheckboxChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    handleChange(path, newValues);
    if (newValues.length == 0) {
      setError("At least one option must be selected.");
    }
    else {
      setError(undefined);
    }
  };

  return (
    <CheckboxGroupContainer title={title}>
      {options.map((option) => (
        <CheckboxItem
          key={option}
          option={option}
          checked={selectedValues.includes(option)}
          onChange={handleCheckboxChange}
          enabled={enabled}
        />
      ))}
      {error && <ErrorDescription error={error} />}
    </CheckboxGroupContainer>
  );
};

export default withJsonFormsControlProps(CheckboxGroupControl);