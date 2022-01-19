import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Todo } from '../model';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string | number>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, t: editTodo } : t)));
    setEdit(false);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex mb-4 justify-center items-center"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          className="p-2"
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <p className="w-52 text-grey-darkest bg-white p-3 line-through text-green-400">
          {todo.todo}
        </p>
      ) : (
        <p className="w-52 text-grey-darkest bg-white p-3 ">{todo.todo}</p>
      )}

      <AiOutlineEdit
        className="mx-2"
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          }
        }}
      />
      <AiFillDelete className="mx-2" onClick={() => handleDelete(todo.id)} />
      <MdDone className="mx-2" onClick={() => handleDone(todo.id)} />
    </form>
  );
};

export default SingleTodo;
