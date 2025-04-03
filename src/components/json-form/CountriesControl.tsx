import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { useState } from 'react';

interface CountryPercentageItem {
    country: string;
    percent: number;
}

const CountriesPercentage = (props: ControlProps) => {
    const {
        id,
        enabled,
        path,
        schema,
        data = [] as CountryPercentageItem[],
        handleChange,
        required,
        rootSchema,
    } = props;
    const countries: string[] = rootSchema.definitions?.countries?.enum || [];
    const [newCountry, setNewCountry] = useState('');
    const [newPercent, setNewPercent] = useState('');

    const handleAddCountry = () => {
        if (!newCountry || !newPercent || newCountry === "?Unknown") return;

        const percentValue = parseFloat(newPercent);
        if (isNaN(percentValue)) return;

        const updatedData = [...data, {
            country: newCountry,
            percent: percentValue
        }];

        handleChange(path, updatedData);
        setNewCountry('');
        setNewPercent('');
    };

    const handleRemoveCountry = (index: number) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        handleChange(path, updatedData);
    };

    const handlePercentChange = (index: number, value: string) => {
        const percentValue = parseFloat(value);
        if (isNaN(percentValue)) return;

        const updatedData = [...data];
        updatedData[index] = {
            ...updatedData[index],
            percent: percentValue
        };
        handleChange(path, updatedData);
    };

    const totalPercentage = data.reduce((sum: number, item: CountryPercentageItem) => sum + (item.percent || 0), 0);

    return (
        <div className="space-y-4">
            <div className="text-sm font-medium text-gray-700">
                {schema.title}
                {required && <span className="text-red-500"> *</span>}
            </div>

            {schema.description && (
                <p className="text-sm text-gray-500 mb-4">{schema.description}</p>
            )}

            <div className="flex flex-wrap gap-4 mb-4 px-2">
                <select
                    className="flex-1 min-w-[200px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={newCountry}
                    onChange={(e) => setNewCountry(e.target.value)}
                >
                    <option value="">Select a country</option>
                    {schema.items?.properties.country.$ref === "#/definitions/countries" &&
                        countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                </select>

                <input
                    //   disabled={!enabled}
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="%"
                    value={newPercent}
                    onChange={(e) => setNewPercent(e.target.value)}
                />

                <button
                    type="button"
                    onClick={handleAddCountry}
                    className="w-1/6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </div>

            {data.length > 0 && (
                <div className="border rounded-md divide-y">
                    {data.map((item: CountryPercentageItem, index: number) => (
                        <div key={index} className="p-3 flex flex-wrap gap-4 mb-4 items-center justify-between">
                            <div className="flex-1 font-medium">{item.country}</div>

                            <input
                                type="number"
                                min="0"
                                max="100"
                                step="0.1"
                                className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={item.percent || ''}
                                onChange={(e) => handlePercentChange(index, e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() => handleRemoveCountry(index)}
                                className="w-1/6 px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                            >
                                Delete
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-sm font-medium mt-2">
                Total: {totalPercentage.toFixed(1)}%
                {schema.totalPercentage && (
                    <span className={totalPercentage !== 100 ? 'text-red-500' : 'text-green-600'}>
                        {totalPercentage !== 100 ? ' (Should total 100%)' : ' (Valid)'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default withJsonFormsControlProps(CountriesPercentage);