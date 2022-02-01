import React from 'react';

type InputProps = {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input = React.forwardRef(
  ({ label, input }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className='input'>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  },
);

export default Input;
