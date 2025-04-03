import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { useState } from 'react';
import CountryInput from './CountryInput';
import CountryItemDisplay from './CountryItemDisplay';
import TotalPercentageDisplay from './TotalPercentageDisplay';
import { CountryPercentageItem } from './types';

const CountriesControl = (props: ControlProps) => {
    const {
        path,
        schema,
        data = [] as CountryPercentageItem[],
        handleChange,
        required,
        rootSchema,
        enabled
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

   

    return (
        <div className="space-y-4">
            <div className="text-sm font-medium text-gray-700">
                {schema.title}
                {required && <span className="text-red-500"> *</span>}
            </div>

            {schema.description && (
                <p className="text-sm text-gray-500 mb-4">{schema.description}</p>
            )}

            <CountryInput
                countries={countries}
                newCountry={newCountry}
                newPercent={newPercent}
                onCountryChange={setNewCountry}
                onPercentChange={setNewPercent}
                onAdd={handleAddCountry}
                enabled={enabled}
            />

            {data.length > 0 && (
                <div className="border rounded-md divide-y">
                    {data.map((item: CountryPercentageItem, index: number) => (
                        <CountryItemDisplay
                            key={index}
                            item={item}
                            index={index}
                            onPercentChange={handlePercentChange}
                            onRemove={handleRemoveCountry}
                        />
                    ))}
                </div>
            )}

            <TotalPercentageDisplay data={data} />
        </div>
    );
};

export default withJsonFormsControlProps(CountriesControl)