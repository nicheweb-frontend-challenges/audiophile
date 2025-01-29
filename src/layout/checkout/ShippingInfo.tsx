import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";

const ShippingInfo = () => {
  const {
    inputRef: addressInputRef,
    value: addressValue,
    errorMessage: addressErrorMessage,
    handleChange: handleAddressChange,
    handleBlur: handleAddressBlur,
    handleValidation: handleAddressValidation,
  } = useInput();
  const {
    inputRef: zipcodeInputRef,
    value: zipcodeValue,
    errorMessage: zipcodeErrorMessage,
    handleChange: handleZipcodeChange,
    handleBlur: handleZipcodeBlur,
    handleValidation: handleZipcodeValidation,
  } = useInput();
  const {
    inputRef: cityInputRef,
    value: cityValue,
    errorMessage: cityErrorMessage,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
    handleValidation: handleCityValidation,
  } = useInput();
  const {
    inputRef: countryInputRef,
    value: countryValue,
    errorMessage: countryErrorMessage,
    handleChange: handleCountryChange,
    handleBlur: handleCountryBlur,
    handleValidation: handleCountryValidation,
  } = useInput();

  return (
    <Fieldset title="shipping info">
      <Input
        label="address"
        errorMessage={addressErrorMessage}
        value={addressValue}
        ref={addressInputRef}
        onChange={handleAddressChange}
        onBlur={handleAddressBlur}
        onInvalid={handleAddressValidation}
        required
        pattern="^\d+\s[A-Za-z0-9\s,.#'-]+$"
        title="Enter a valid street address (e.g., 123 Main St, Apt 4B)"
      />
      <Input
        label="zip code"
        errorMessage={zipcodeErrorMessage}
        value={zipcodeValue}
        ref={zipcodeInputRef}
        onChange={handleZipcodeChange}
        onBlur={handleZipcodeBlur}
        onInvalid={handleZipcodeValidation}
        required
        pattern="\d{5}(-\d{4})?"
        title="Enter a valid ZIP code (e.g., 12345 or 12345-6789)"
      />
      <Input
        label="city"
        errorMessage={cityErrorMessage}
        value={cityValue}
        ref={cityInputRef}
        onChange={handleCityChange}
        onBlur={handleCityBlur}
        onInvalid={handleCityValidation}
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
      <Input
        label="country"
        errorMessage={countryErrorMessage}
        value={countryValue}
        ref={countryInputRef}
        onChange={handleCountryChange}
        onBlur={handleCountryBlur}
        onInvalid={handleCountryValidation}
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
    </Fieldset>
  );
};

export default ShippingInfo;
