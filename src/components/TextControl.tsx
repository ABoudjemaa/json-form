import { RendererProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

const CustomTextRenderer = (props: RendererProps) => {
  const { label, path, schema, uischema, visible, handleChange, data: value } = props as any;

  if (!visible) {
    return null;
  }

  const isMultiLine = uischema.options?.multi;

  return (  
    <div className="mb-4">
      {isMultiLine ? (
        <div className="w-full">
          <label className="block text-gray-700 font-semibold mb-2">{label}</label>
          {schema.description && (
            <div className="text-sm text-gray-500 mb-2">{schema.description}</div>
          )}
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={value}
            onChange={(e) => handleChange(path, e.target.value)}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-gray-700 font-semibold">{label}</label>
            {schema.description && (
              <div className="text-sm text-gray-500">{schema.description}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={value}
              onChange={(e) => handleChange(path, e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default withJsonFormsControlProps(CustomTextRenderer);