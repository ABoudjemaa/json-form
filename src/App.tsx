import { useState } from "react";
import { JsonForms } from "@jsonforms/react"
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import schema from './schema.json'
import uischema from './uischema.json'
import TextControl from './components/json-form/TextControl'
import textControlTester from "./components/json-form/testers/textControlTester";
import CheckboxGroupControl from "./components/json-form/CheckboxGroupControl";
import CheckboxGroupControlTester from "./components/json-form/testers/checkboxGroupControlTester";
import countriesControlTester from "./components/json-form/testers/countriesControlTester";
import CountriesControl from "./components/json-form/contries-section/CountriesControl";

const initialData = {
  user: {
    a08: "John Doe",
    a09: "Experienced in React, TypeScript and UI development"
  },
  item: {
    s01: ["vendor", "subcontractor"],
    p02: "no",
    i01: [
      { country: "France", percent: 60 },
      { country: "Germany", percent: 30 },
      { country: "United Kingdom of Great Britain and Northern Ireland", percent: 10 }
    ]
  }
};

function App() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState();
  // console.log("data", data.item.s01);
  // console.log("errors", errors);
  const renderers = [
    ...vanillaRenderers,
    { tester: textControlTester, renderer: TextControl },
    { tester: CheckboxGroupControlTester, renderer: CheckboxGroupControl },
    { tester: countriesControlTester, renderer: CountriesControl },
  ];

  return (
    <div className='max-w-2xl mx-4 md:m-auto md:mt-10'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={vanillaCells}
        onChange={({ data, errors }) => {setData(data); setErrors(errors as any)}}
        readonly={true}
      />
    </div>
  )
}

export default App
