import React from "react";
import { TodoItem } from "./Item";
import { TodoState } from "store/features/todo";

interface TodoListPropType extends React.HtmlHTMLAttributes<HTMLUListElement> {
  todos: TodoState["todos"];
  onClickDeleteTodo: (
    id: number
  ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoList: React.FC<TodoListPropType> = (props) => {
  const { todos, onClickDeleteTodo, ...ulProps } = props;
  return (
    <ul {...ulProps} className="flex flex-col gap-2 mt-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </ul>
  );
};
