import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: 1,
    title: "(^///^)낚시하기",
    isDone: false,
  },
  {
    id: 2,
    title: "╰(*°▽°*)╯롤체하기",
    isDone: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const onInsert = (createTodo) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: createTodo, isDone: false },
    ]);
  };

  const onToggle = (todoId) => {
    let temp = todos.map((v) => {
      if (v.id === todoId) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });
    setTodos(temp);
  };

  const onDelete = (todoId) => {
    let deleted = todos.filter((v) => {
      if (v.id !== todoId) {
        return v;
      }
    });
    setTodos(deleted);
  };

  return (
    <>
      <CreateTodo onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
};

export default App;
