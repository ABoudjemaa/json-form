import { RendererProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const CheckboxGroup = (props: RendererProps) => {
    const { label, path, schema, uischema, visible, handleChange, data: value } = props as any;
  const { title, items } = schema;
  const options = items.enum;
  const selectedValues = value || [];

  const handleCheckboxChange = (value) => {
    console.log(value);
    let newValues;
    if (selectedValues.includes(value)) {
      // Remove the value if it's already selected
      newValues = selectedValues.filter(v => v !== value);
    } else {
      // Add the value if it's not selected
      newValues = [...selectedValues, value];
    }
    handleChange(path, newValues);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={`checkbox-${option}`}
              checked={selectedValues.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor={`checkbox-${option}`}
              className="ml-3 block text-sm font-medium text-gray-700 capitalize"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(CheckboxGroup);