import React from "react";
import { Button } from "components";
import { TodoState } from "store/features/todo";

interface TodoItemPropType extends React.HTMLAttributes<HTMLLIElement> {
  todo: TodoState["todos"][0];
  onClickDeleteTodo: (
    id: number
  ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoItem: React.FC<TodoItemPropType> = (props) => {
  const { todo, onClickDeleteTodo, ...liProps } = props;
  const { todo: todoContent, id } = todo;
  return (
    <li
      {...liProps}
      className="flex place-content-between p-2 border-2 rounded-md border-[#757575] items-center"
    >
      <p className="w-9/12">{todoContent}</p>
      <Button
        name="Delete"
        onClick={onClickDeleteTodo(id)}
        className="w-3/12"
      />
    </li>
  );
};
