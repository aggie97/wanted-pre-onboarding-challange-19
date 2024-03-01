import React from "react";

interface CustomButtonPropType extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const Button: React.FC<CustomButtonPropType> = (props) => {
  const { name, ...restProps } = props;
  return (
    <button {...restProps} className="p-2 border-2 rounded-md border-[#757575]">
      {name}
    </button>
  );
};
