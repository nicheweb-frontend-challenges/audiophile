import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";

const BillingDetails = () => {
  const {
    inputRef: nameInputRef,
    value: nameValue,
    errorMessage: nameErrorMessage,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    handleValidation: handleNameValidation,
  } = useInput();
  const {
    inputRef: emailInputRef,
    value: emailValue,
    errorMessage: emailErrorMessage,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    handleValidation: handleEmailValidation,
  } = useInput();
  const {
    inputRef: phoneInputRef,
    value: phoneValue,
    errorMessage: phoneErrorMessage,
    handleChange: handlePhoneChange,
    handleBlur: handlePhoneBlur,
    handleValidation: handlePhoneValidation,
  } = useInput();

  return (
    <Fieldset title="billing details">
      <Input
        label="name"
        errorMessage={nameErrorMessage}
        value={nameValue}
        ref={nameInputRef}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        onInvalid={handleNameValidation}
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
      <Input
        label="email address"
        type="email"
        errorMessage={emailErrorMessage}
        value={emailValue}
        ref={emailInputRef}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        onInvalid={handleEmailValidation}
        required
      />
      <Input
        label="phone number"
        type="tel"
        errorMessage={phoneErrorMessage}
        value={phoneValue}
        ref={phoneInputRef}
        onChange={handlePhoneChange}
        onBlur={handlePhoneBlur}
        onInvalid={handlePhoneValidation}
        required
        pattern="^\+?[0-9\s\-]{7,15}$"
        title="Phone number must be 7-15 digits, optionally starting with a +"
      />
    </Fieldset>
  );
};

export default BillingDetails;
