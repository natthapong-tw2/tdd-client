import React, {useEffect, useState} from "react";
import {TodoService} from "../services/todo-service";
import {Task} from "../models/task";

export const Todo: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = useState<Task[]>([])
  useEffect(() => {
    TodoService.getTodos()
      .then(todoResult => setTodos(todoResult))
  }, [])

  return <span>
    This is todo App
    {
      todos.map(todo => <span key={todo.id}>{ todo.name }</span>)
    }
  </span>;
}