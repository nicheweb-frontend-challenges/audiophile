import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";
import * as styles from "./ShippingInfo.module.scss";

const ShippingInfo = () => {
  const {
    inputRef: addressInputRef,
    value: addressValue,
    errorMessage: addressErrorMessage,
    isValid: addressIsValid,
    handleChange: handleAddressChange,
    handleBlur: handleAddressBlur,
    handleValidation: handleAddressValidation,
  } = useInput();
  const {
    inputRef: zipcodeInputRef,
    value: zipcodeValue,
    errorMessage: zipcodeErrorMessage,
    isValid: zipcodeIsValid,
    handleChange: handleZipcodeChange,
    handleBlur: handleZipcodeBlur,
    handleValidation: handleZipcodeValidation,
  } = useInput();
  const {
    inputRef: cityInputRef,
    value: cityValue,
    errorMessage: cityErrorMessage,
    isValid: cityIsValid,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
    handleValidation: handleCityValidation,
  } = useInput();
  const {
    inputRef: countryInputRef,
    value: countryValue,
    errorMessage: countryErrorMessage,
    isValid: countryIsValid,
    handleChange: handleCountryChange,
    handleBlur: handleCountryBlur,
    handleValidation: handleCountryValidation,
  } = useInput();

  return (
    <Fieldset classes={styles.shippingInfo} title="shipping info">
      <Input
        label="address"
        errorMessage={addressErrorMessage}
        isValid={addressIsValid}
        value={addressValue}
        ref={addressInputRef}
        onChange={handleAddressChange}
        onBlur={handleAddressBlur}
        onInvalid={handleAddressValidation}
        placeholder="1137 Williams Avenue"
        classes={styles.shippingInfo__address}
        required
        pattern="^\d+\s[A-Za-z0-9\s,.#'-]+$"
        title="Enter a valid street address (e.g., 123 Main St, Apt 4B)"
      />
      <Input
        label="ZIP code"
        errorMessage={zipcodeErrorMessage}
        isValid={zipcodeIsValid}
        value={zipcodeValue}
        ref={zipcodeInputRef}
        onChange={handleZipcodeChange}
        onBlur={handleZipcodeBlur}
        onInvalid={handleZipcodeValidation}
        placeholder="10001"
        required
        pattern="\d{5}(-\d{4})?"
        title="Enter a valid ZIP code (e.g., 12345 or 12345-6789)"
      />
      <Input
        label="city"
        errorMessage={cityErrorMessage}
        isValid={cityIsValid}
        value={cityValue}
        ref={cityInputRef}
        onChange={handleCityChange}
        onBlur={handleCityBlur}
        onInvalid={handleCityValidation}
        placeholder="New York"
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
      <Input
        label="country"
        errorMessage={countryErrorMessage}
        isValid={countryIsValid}
        value={countryValue}
        ref={countryInputRef}
        onChange={handleCountryChange}
        onBlur={handleCountryBlur}
        onInvalid={handleCountryValidation}
        placeholder="United States"
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
    </Fieldset>
  );
};

export default ShippingInfo;
