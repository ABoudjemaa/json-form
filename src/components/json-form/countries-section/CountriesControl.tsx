import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { useState } from 'react';
import { CountryPercentageItem } from './types';
import CountryInput from './CountryInput';
import CountryItemDisplay from './CountryItemDisplay';
import TotalPercentageDisplay from './TotalPercentageDisplay';
import ErrorDescription from '../ErrorDescription';

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
    const [error, setError] = useState<string | undefined>();

    const handleAddCountry = () => {
        if (!newCountry || !newPercent || newCountry === "?Unknown"){
            setError('Please select a country.');
            return;
        }

        const percentValue = parseFloat(newPercent);
        if (isNaN(percentValue)) return;
        if (percentValue < 1 || percentValue > 100) {
            setError('Percentage must be between 1 and 100.');
            return;
        }

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

            {error && <ErrorDescription error={error} />}

            {data.length > 0 && (
                <div className="border rounded-md divide-y">
                    {data.map((item: CountryPercentageItem, index: number) => (
                        <CountryItemDisplay
                            key={index}
                            item={item}
                            index={index}
                            onRemove={handleRemoveCountry}
                            enabled={enabled}
                        />
                    ))}
                </div>
            )}

            <TotalPercentageDisplay data={data} />
        </div>
    );
};

export default withJsonFormsControlProps(CountriesControl)