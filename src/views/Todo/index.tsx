import React from "react";
import { TodoList } from "components";
import { useAppDispatch, useAppSelector } from "store";
import { createTodo, deleteTodo } from "store/features/todo";
import { TodoForm } from "views/Todo/TodoForm";

export const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todoReducer);

  const [todo, setTodo] = React.useState<string>("");

  const onChangeTodo = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(event.target.value);
    },
    []
  );

  const handleCreateTodo = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (todo.length > 0) {
        dispatch(createTodo(todo));
        setTodo("");
        return;
      }
      alert("할 일을 입력해주세요.");
    },
    [dispatch, todo]
  );
  const handleDeleteTodo = React.useCallback(
    (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  return (
    <div className="w-9/12 mx-auto">
      <TodoForm
        onSubmit={handleCreateTodo}
        onChangeInput={onChangeTodo}
        value={todo}
      />
      <TodoList todos={todos} onClickDeleteTodo={handleDeleteTodo} />
    </div>
  );
};
