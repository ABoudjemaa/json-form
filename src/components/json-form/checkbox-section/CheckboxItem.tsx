import { CheckboxItemProps } from "./types";

const CheckboxItem = ({ option, checked, onChange, enabled }: CheckboxItemProps) => (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`checkbox-${option}`}
        disabled={!enabled}
        checked={checked}
        onChange={() => onChange(option)}
        className="h-4 w-4 border-gray-300 rounded"
        />
      <label
        htmlFor={`checkbox-${option}`}
        className="ml-3 block text-sm font-medium text-gray-700 capitalize"
      >
        {option}
      </label>
    </div>
  );

  export default CheckboxItem;