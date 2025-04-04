import { CountryPercentageItem } from "./types";

export const TotalPercentageDisplay = ({ data }: { data: CountryPercentageItem[] }) => {
  const totalPercentage = data.reduce(
    (sum: number, item: CountryPercentageItem) => sum + (item.percent || 0),
    0
  );

  const isValid = totalPercentage === 100;

  return (
    <div
      className={`mt-4 p-4 rounded-2xl text-sm font-medium shadow-sm transition-colors duration-300
        ${isValid ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
    >
      <span className="block text-base font-semibold mb-1">Total Percentage:</span>
      <span className="text-xl font-bold">{totalPercentage.toFixed(1)}%</span>
      <span className={`ml-2 ${isValid ? "text-green-600" : "text-red-500 animate-pulse"}`}>
        {isValid ? "✓ Valid" : "⚠ Should total 100%"}
      </span>
    </div>
  );
};

export default TotalPercentageDisplay;
