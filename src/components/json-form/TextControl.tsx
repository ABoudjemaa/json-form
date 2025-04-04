import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import ErrorDescription from './ErrorDescription';
import { useState } from 'react';

const CustomTextRenderer = (
  props: ControlProps
) => {
  const { label, path, schema, uischema, handleChange, data: value, enabled} = props;
  const { description } = schema;
  const [error, setError] = useState<string | undefined>();

  const isMultiLine = uischema.options?.multi as boolean;

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value;
    handleChange(path, newValue);
    if (newValue.length > 50) {
      setError("Maximum length is 50 characters.");
    } else if (newValue.length < 2) {
      setError("Minimum length is 2 characters.");
    }
    else {
      setError(undefined);
    }
  }

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value;
    handleChange(path, newValue);
    if (newValue.length > 300) {
      setError("Maximum length is 300 characters.");
    } else if (newValue.length < 10) {
      setError("Minimum length is 10 characters.");
    }
    else {
      setError(undefined);
    }
  }


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
                onChange={(e) => onChangeTextarea(e)}
              />
              {error && <ErrorDescription error={error} />}
            </> :
            <>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={value}
                disabled={!enabled}
                onChange={(e) => onChangeText(e)}
              />
              {error && <ErrorDescription error={error} />}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(CustomTextRenderer);