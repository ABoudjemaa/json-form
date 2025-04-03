



const CountryInput = ({
    countries,
    newCountry,
    newPercent,
    onCountryChange,
    onPercentChange,
    onAdd,
  }: {
    countries: string[];
    newCountry: string;
    newPercent: string;
    onCountryChange: (value: string) => void;
    onPercentChange: (value: string) => void;
    onAdd: () => void;
  }) => (
    <div className="flex flex-wrap gap-4 mb-4 px-2">
      <select
        className="flex-1 min-w-[200px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        value={newCountry}
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="0"
        max="100"
        step="0.1"
        className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="%"
        value={newPercent}
        onChange={(e) => onPercentChange(e.target.value)}
      />
      <button
        type="button"
        onClick={onAdd}
        className="w-1/6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </div>
  );
  
  export default CountryInput;