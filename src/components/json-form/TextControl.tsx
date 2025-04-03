import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import ErrorDescription from './ErrorDescription';

const CustomTextRenderer = (
  { label, path, schema, uischema, handleChange, data: value, enabled }: ControlProps
) => {
  const { description } = schema;

  const isMultiLine = uischema.options?.multi as boolean;

  return (
    <div className="mb-4">
      <div className={`${isMultiLine ? "w-full" : "grid grid-cols-2 gap-4 items-center"}`}>
        <div>
          <label className={`${isMultiLine ? "mb-2" : ""} block text-gray-700 font-semibold`}>{label}</label>
          {description && (
            <div className="text-sm text-gray-500">{description}</div>
          )}
        </div>
        <div>
          {isMultiLine ?
            <>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                value={value}
                disabled={!enabled}
                onChange={(e) => handleChange(path, e.target.value)}
              />
              {/* <ErrorDescription error="Invalid " /> */}
            </> :
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={value}
              disabled={!enabled}
              onChange={(e) => handleChange(path, e.target.value)}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(CustomTextRenderer);