export const validateText = (value: string): string | undefined => {
    if (value.length > 50) {
      return "Maximum length is 50 characters.";
    }
    if (value.length < 2) {
      return "Minimum length is 2 characters.";
    }
    return undefined;
  };
  
  export const validateTextarea = (value: string): string | undefined => {
    if (value.length > 300) {
      return "Maximum length is 300 characters.";
    }
    if (value.length < 10) {
      return "Minimum length is 10 characters.";
    }
    return undefined;
  };
  
  export const validateCheckboxGroup = (values: string[]): string | undefined => {
    if (values.length === 0) {
      return "At least one option must be selected.";
    }
    return undefined;
  };
  
  export const validateCountryPercent = (country: string, percent: string): string | undefined => {
    if (!country || !percent || country === "?Unknown") {
      return 'Please select a country.';
    }
    const percentValue = parseFloat(percent);
    if (isNaN(percentValue)) {
      return 'Invalid percentage.';
    }
    if (percentValue < 1 || percentValue > 100) {
      return 'Percentage must be between 1 and 100.';
    }
    return undefined;
  };
  