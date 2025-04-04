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

function App() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState();
  const [isReadonly, setIsReadonly] = useState(true);
  // console.log(data);
  
  const renderers = [
    ...vanillaRenderers,
    { tester: textControlTester, renderer: TextControl },
    { tester: CheckboxGroupControlTester, renderer: CheckboxGroupControl },
    { tester: countriesControlTester, renderer: CountriesControl },
  ];

  const toggleReadonly = () => {
    setIsReadonly(!isReadonly);
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
        onChange={({ data, errors }) => {setData(data); setErrors(errors as any)}}
        readonly={isReadonly}
      />
    </div>
  )
}

export default App