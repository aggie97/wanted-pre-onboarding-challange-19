import React from "react";
import { Button } from "components";
import { Input } from "components";

interface TodoFormPropType extends React.HTMLAttributes<HTMLFormElement> {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TodoForm: React.FC<TodoFormPropType> = (props) => {
  const { onChangeInput, value, ...formProps } = props;
  const inputProps = { onChange: onChangeInput, value };
  return (
    <form {...formProps} className="flex place-content-center space-x-4">
      <Input
        className="border-2 border-[#757575] rounded-md outline-none bg-transparent p-2"
        {...inputProps}
      />
      <Button name="Add" />
    </form>
  );
};
