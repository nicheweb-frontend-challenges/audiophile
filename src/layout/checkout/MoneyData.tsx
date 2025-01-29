import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";

const MoneyData = () => {
  const {
    inputRef: moneyNumberInputRef,
    value: moneyNumberValue,
    errorMessage: moneyNumberErrorMessage,
    handleChange: handleMoneyNumberChange,
    handleBlur: handleMoneyNumberBlur,
    handleValidation: handleMoneyNumberValidation,
  } = useInput();
  const {
    inputRef: moneyPINInputRef,
    value: moneyPINValue,
    errorMessage: moneyPINErrorMessage,
    handleChange: handleMoneyPINChange,
    handleBlur: handleMoneyPINBlur,
    handleValidation: handleMoneyPINValidation,
  } = useInput();
  return (
    <Fieldset>
      <Input
        label="e-money number"
        errorMessage={moneyNumberErrorMessage}
        value={moneyNumberValue}
        ref={moneyNumberInputRef}
        onChange={handleMoneyNumberChange}
        onBlur={handleMoneyNumberBlur}
        onInvalid={handleMoneyNumberValidation}
        required
        pattern="^[0-9]{9}$"
        title="Only digits"
      />
      <Input
        label="e-money PIN"
        errorMessage={moneyPINErrorMessage}
        value={moneyPINValue}
        ref={moneyPINInputRef}
        onChange={handleMoneyPINChange}
        onBlur={handleMoneyPINBlur}
        onInvalid={handleMoneyPINValidation}
        required
        pattern="^[0-9]{4}$"
        title="Only digits"
      />
    </Fieldset>
  );
};

export default MoneyData;
