const CountryInput = ({
  countries,
  newCountry,
  newPercent,
  enabled,
  onCountryChange,
  onPercentChange,
  onAdd,
}: {
  countries: string[];
  newCountry: string;
  newPercent: string;
  enabled: boolean;
  onCountryChange: (value: string) => void;
  onPercentChange: (value: string) => void;
  onAdd: () => void;
}) => (
  <div className="flex flex-wrap gap-4 mb-4 px-2">
    <select
      disabled={!enabled}
      className="w-1/3 md:flex-1 md:min-w-[200px] p-2 border border-gray-300 rounded-md shadow-sm "
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
      className="w-20 md:w-24 p-2 border border-gray-300 rounded-md shadow-sm "
      placeholder="%"
      disabled={!enabled}
      value={newPercent}
      onChange={(e) => onPercentChange(e.target.value)}
    />
    <button
      type="button"
      onClick={onAdd}
      className={`${!enabled ? "":" hover:bg-gray-800 "}` +"w-20 md:w-1/6 px-4 py-2 bg-black text-white rounded-md  focus:outline-none focus:ring-2"}
    >
      Add
    </button>
  </div>
);

export default CountryInput;