import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";

const BillingDetails = () => {
  const {
    inputRef: nameInputRef,
    value: nameValue,
    errorMessage: nameErrorMessage,
    isValid: nameIsValid,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    handleValidation: handleNameValidation,
  } = useInput();
  const {
    inputRef: emailInputRef,
    value: emailValue,
    errorMessage: emailErrorMessage,
    isValid: emailIsValid,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    handleValidation: handleEmailValidation,
  } = useInput();
  const {
    inputRef: phoneInputRef,
    value: phoneValue,
    errorMessage: phoneErrorMessage,
    isValid: phoneIsValid,
    handleChange: handlePhoneChange,
    handleBlur: handlePhoneBlur,
    handleValidation: handlePhoneValidation,
  } = useInput();

  return (
    <Fieldset title="billing details">
      <Input
        label="name"
        errorMessage={nameErrorMessage}
        isValid={nameIsValid}
        value={nameValue}
        ref={nameInputRef}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        onInvalid={handleNameValidation}
        placeholder="Alexei Ward"
        required
        pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
      />
      <Input
        label="email address"
        type="email"
        errorMessage={emailErrorMessage}
        isValid={emailIsValid}
        value={emailValue}
        ref={emailInputRef}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        onInvalid={handleEmailValidation}
        placeholder="alexei@mail.com"
        required
      />
      <Input
        label="phone number"
        type="tel"
        errorMessage={phoneErrorMessage}
        isValid={phoneIsValid}
        value={phoneValue}
        ref={phoneInputRef}
        onChange={handlePhoneChange}
        onBlur={handlePhoneBlur}
        onInvalid={handlePhoneValidation}
        placeholder="+1 202-555-0136"
        required
        pattern="^\+?[0-9\s\-]{7,15}$"
        title="Phone number must be 7-15 digits, optionally starting with a +"
      />
    </Fieldset>
  );
};

export default BillingDetails;
