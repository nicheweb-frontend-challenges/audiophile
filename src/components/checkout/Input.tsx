interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label: string;
  errorMessage?: string;
}

const Input = ({ label, errorMessage, ...props }: InputProps) => {
  return (
    <label>
      <span>{label}</span>
      <span>{errorMessage}</span>
      <input {...props} />
    </label>
  );
};

export default Input;
