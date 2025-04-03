import { withJsonFormsControlProps } from "@jsonforms/react";
import CheckboxGroupContainer from "./CheckboxGroupContainer";
import CheckboxItem from "./CheckboxItem";
import { ControlProps } from "@jsonforms/core";
import { SchemaType } from "./types";

const CheckboxGroupControl = (props: ControlProps) => {
  const { path, schema, handleChange, data: value, enabled } = props;
  const { title, items } = schema as SchemaType;
  const options: string[] = items?.enum || [];
  const selectedValues: string[] = value || [];

  const handleCheckboxChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    handleChange(path, newValues);
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
    </CheckboxGroupContainer>
  );
};

export default withJsonFormsControlProps(CheckboxGroupControl);