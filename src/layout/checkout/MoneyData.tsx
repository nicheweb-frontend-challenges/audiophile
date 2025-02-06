import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import useInput from "../../hooks/useInput";
import * as styles from "./MoneyData.module.scss";

const MoneyData = () => {
  const {
    inputRef: moneyNumberInputRef,
    value: moneyNumberValue,
    errorMessage: moneyNumberErrorMessage,
    isValid: moneyNumberIsValid,
    handleChange: handleMoneyNumberChange,
    handleBlur: handleMoneyNumberBlur,
    handleValidation: handleMoneyNumberValidation,
  } = useInput();
  const {
    inputRef: moneyPINInputRef,
    value: moneyPINValue,
    errorMessage: moneyPINErrorMessage,
    isValid: moneyPINIsValid,
    handleChange: handleMoneyPINChange,
    handleBlur: handleMoneyPINBlur,
    handleValidation: handleMoneyPINValidation,
  } = useInput();
  return (
    <Fieldset classes={styles.moneyData}>
      <Input
        label="e-money number"
        classes={styles.moneyData__number}
        errorMessage={moneyNumberErrorMessage}
        isValid={moneyNumberIsValid}
        value={moneyNumberValue}
        ref={moneyNumberInputRef}
        onChange={handleMoneyNumberChange}
        onBlur={handleMoneyNumberBlur}
        onInvalid={handleMoneyNumberValidation}
        placeholder="238521993"
        required
        pattern="^[0-9]{9}$"
        title="Only digits(9 digits)"
      />
      <Input
        label="e-money PIN"
        classes={styles.moneyData__pin}
        errorMessage={moneyPINErrorMessage}
        isValid={moneyPINIsValid}
        value={moneyPINValue}
        ref={moneyPINInputRef}
        onChange={handleMoneyPINChange}
        onBlur={handleMoneyPINBlur}
        onInvalid={handleMoneyPINValidation}
        placeholder="6891"
        required
        pattern="^[0-9]{4}$"
        title="Only digits(4 digits)"
      />
    </Fieldset>
  );
};

export default MoneyData;
