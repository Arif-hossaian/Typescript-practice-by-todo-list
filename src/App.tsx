import React, { useState } from 'react';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };
  console.log(todos);

  return (
    <div className="bg-blue-400 h-screen w-screen">
      <h1 className="text-center p-10 font-extrabold text-2xl z-10 text-white">
        Typescript practice
      </h1>
      <InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
