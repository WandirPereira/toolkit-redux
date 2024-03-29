import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todos = [], isLoading } = useGetTodosQuery();
  // console.log(todos);

  const { data: todo = "", isLoading: isLoading_id } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  console.log(todo);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading_id ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? "DONE" : "PENDING"} </strong>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};
