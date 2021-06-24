import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => (
  <button className="bg-hardBlue m-auto rounded px-6 py-2 font-tondu text-white tracking-wider" onClick={onClick}>
    {text}
  </button>
);

export default Button;
