import { CountryPercentageItem } from "./types";


export const CountryItemDisplay = ({
    item,
    index,
    enabled,
    onPercentChange,
    onRemove,
  }: {
    item: CountryPercentageItem;
    index: number;
    enabled: boolean;
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
        className="w-24 p-2 border border-gray-300 rounded-md shadow-sm "
        value={item.percent || ''}
        onChange={(e) => onPercentChange(index, e.target.value)}
      />
      <button
        disabled={!enabled}
        type="button"
        onClick={() => onRemove(index)}
        className={`${!enabled ? "":" hover:bg-red-800 "}` + "w-1/6 px-4 py-2 bg-red-600  text-white rounded-md flex items-center justify-center"}
      >
        Delete
      </button>
    </div>
  );

  export default CountryItemDisplay;