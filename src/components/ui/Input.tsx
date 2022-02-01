type InputProps = {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input = ({ label, input }: InputProps) => {
  return (
    <div className='input'>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
