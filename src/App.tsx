import { useState } from "react";
import { JsonForms } from "@jsonforms/react"
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import schema from './schema.json'
import uischema from './uischema.json'
import initialData from './initial-json.json'
import TextControl from './components/json-form/TextControl'
import textControlTester from "./components/json-form/testers/textControlTester";
import CheckboxGroupControlTester from "./components/json-form/testers/checkboxGroupControlTester";
import countriesControlTester from "./components/json-form/testers/countriesControlTester";
import CountriesControl from "./components/json-form/countries-section/CountriesControl";
import CheckboxGroupControl from "./components/json-form/checkbox-section/CheckboxGroupControl";
import { validateCheckboxGroup, validateCountryPercent, validateText, validateTextarea } from "./utils/validators";

function App() {
  const [data, setData] = useState(initialData);
  const [isReadonly, setIsReadonly] = useState(true);
  const { user, item } = data
  const { a08: name, a09: description } = user || {}
  const { i01: countries, s01: contracts } = item || {}

  const renderers = [
    ...vanillaRenderers,
    { tester: textControlTester, renderer: TextControl },
    { tester: CheckboxGroupControlTester, renderer: CheckboxGroupControl },
    { tester: countriesControlTester, renderer: CountriesControl },
  ];

  const toggleReadonly = () => {
    setIsReadonly(!isReadonly);
  };

  const handleSubmit = () => {
    let errors: string[] = [];

    const nameError = validateText(name);
    if (nameError) {
      errors.push(nameError);
    }

    const descriptionError = validateTextarea(description);
    if (descriptionError) {
      errors.push(descriptionError);
    }

    countries.forEach((item) => {
      const countriesError = validateCountryPercent(item.country, item.percent.toString());
      if (countriesError) {
        errors.push(countriesError);
      }
    });

    const contractsError = validateCheckboxGroup(contracts);
    if (contractsError) {
      errors.push(contractsError);
    }

    if (errors.length > 0) {
      alert("Form has errors:\n" + errors.join("\n"));
      console.log("Form Errors", errors);
    } else {
      alert("Form submitted successfully!");
      console.log("Form Submitted", data);
    }
  };


  return (
    <div className='max-w-2xl mx-4 md:m-auto md:my-10'>
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleReadonly}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isReadonly ? "Edit Form" : "Readonly Mode"}
        </button>
      </div>

      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={vanillaCells}
        onChange={({ data }) => { setData(data) }}
        readonly={isReadonly}
      />

      <div className="mt-4 text-right">
        <button
          onClick={handleSubmit}
          className={`${isReadonly ? "" : " hover:bg-gray-800 "}` + "px-4 py-2 bg-black text-white rounded w-full"}
          disabled={isReadonly}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App