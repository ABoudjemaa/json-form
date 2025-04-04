# React JSON Forms with Custom Controls

This is a React project that utilizes [JSON Forms](https://jsonforms.io/) to render dynamic forms based on a JSON schema. It includes custom form controls and validation logic, allowing users to interact with and submit the form data in an easy-to-use interface.

## Features

- **JSON Forms**: Utilizes JSON Forms to dynamically render forms based on JSON schemas.
- **Custom Controls**: Includes custom renderers for text fields, checkboxes, and country-related data.
- **Validation**: Includes form validation for various fields like text, checkbox groups, and percentages.
- **Readonly/Editable Mode**: Toggle between readonly and editable form modes.
- **Responsive Design**: The layout is responsive, designed to fit different screen sizes.

## Project Structure

- `src/`
  - `components/`
    - `json-form/`: Custom form controls like `TextControl`, `CheckboxGroupControl`, and `CountriesControl`.
    - `utils/`: Validation functions for various form fields.
  - `schema.json`: The schema that defines the structure of the form data.
  - `uischema.json`: The UI schema for customizing the appearance of the form.
  - `initial-json.json`: The initial data to be populated in the form.


