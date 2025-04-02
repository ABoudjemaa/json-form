import { useState } from "react";
import { JsonForms } from "@jsonforms/react"
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import schema from './schema.json'
import uischema from './uischema.json'
import TextControl from './components/TextControl'
import textControlTester from "./components/textControlTester";

function App() {
  const [data, setData] = useState();
  const [errors, setErrors] = useState();
  console.log("data", data);
  console.log("errors", errors);
  const renderers = [
    ...vanillaRenderers,
    { tester: textControlTester, renderer: TextControl },
  ];
  return (
    <div className='max-w-2xl m-auto mt-10'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={vanillaCells}
        onChange={({ data, errors }) => {setData(data); setErrors(errors as any)}}
      />
    </div>
  )
}

export default App
