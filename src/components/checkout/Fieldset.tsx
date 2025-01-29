type FieldsetProps = {
  title?:
    | "billing details"
    | "shipping info"
    | "payment details"
    | "payment method";
  children: React.ReactNode;
};

const Fieldset = ({ title, children }: FieldsetProps) => {
  return (
    <fieldset style={{ border: "none" }}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
