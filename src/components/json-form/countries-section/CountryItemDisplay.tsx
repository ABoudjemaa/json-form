import { CountryPercentageItem } from "./types";


export const CountryItemDisplay = ({
    item,
    index,
    onPercentChange,
    onRemove,
  }: {
    item: CountryPercentageItem;
    index: number;
    onPercentChange: (index: number, value: string) => void;
    onRemove: (index: number) => void;
  }) => (
    <div className="p-3 flex flex-wrap gap-4 mb-4 items-center justify-between">
      <div className="flex-1 font-medium">{item.country}</div>
      <input
        type="number"
        min="0"
        max="100"
        step="0.1"
        className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        value={item.percent || ''}
        onChange={(e) => onPercentChange(index, e.target.value)}
      />
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="w-1/6 px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
      >
        Delete
      </button>
    </div>
  );

  export default CountryItemDisplay;